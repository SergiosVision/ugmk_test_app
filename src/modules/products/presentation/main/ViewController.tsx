import { Point, SeriesOptionsType } from 'highcharts';
import groupBy from 'lodash/groupBy';
import toPairs from 'lodash/toPairs';
import values from 'lodash/values';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import { formatKgToTons } from '@utils/formatters.ts';

import { ProductType } from '../../typings/productType.ts';

import View from './view/View.tsx';
import { ProductsViewModel } from './viewModel.ts';

interface Props {
	viewModel: ProductsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				await viewModel.getList();
			} catch (error) {
				showBoundary(error);
			}
		})();
	}, []);

	const chartData = useMemo(() => {
		return toPairs(groupBy(viewModel.list, 'factory_id')).map(
			([key, items]) => ({
				name: `Factory ${key}`,
				id: key,
				data: values(
					groupBy(items, ({ date }) => new Date(date as string).getMonth())
				).map(productItems =>
					productItems.reduce(
						(sum, product) => sum + formatKgToTons(product.product_weight),
						0
					)
				)
			})
		) as SeriesOptionsType[];
	}, [viewModel.list]);

	const handleChangeFilter = async (type: ProductType) => {
		await viewModel.changeFilter(type);
	};

	const handlePlotClick = (point: Point) => {
		navigate(`/factories/${point.series.userOptions.id}/${point.index + 1}`);
	};

	return (
		<View
			chartData={chartData}
			isLoading={viewModel.isLoading}
			productType={viewModel.productType}
			changeFilter={handleChangeFilter}
			plotClick={handlePlotClick}
		/>
	);
};

export default observer(ViewController);
