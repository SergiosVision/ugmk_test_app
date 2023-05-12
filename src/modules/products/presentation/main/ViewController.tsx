import { Point, SeriesOptionsType } from 'highcharts';
import groupBy from 'lodash/groupBy';
import toPairs from 'lodash/toPairs';
import values from 'lodash/values';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import { ProductType } from '@modules/products/typings/productType';
import { formatFactoryIdToString } from '@modules/products/utils/formatFactoryIdToString';

import { formatKgToTons } from '@utils/formatters';

import View from './view/View.tsx';
import { ProductsViewModel } from './viewModel';

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
				name: `Фабрика ${formatFactoryIdToString(Number(key))}`,
				events: {
					click: ({ point }) => handlePlotClick(key, point)
				},
				data: values(
					groupBy(items, ({ date }) => new Date(date as string).getMonth())
				).map(productItems =>
					formatKgToTons(
						productItems.reduce(
							(sum, product) => sum + (product.product_weight || 0),
							0
						)
					)
				)
			})
		) as SeriesOptionsType[];
	}, [viewModel.list]);

	const handleChangeFilter = async (type: ProductType) => {
		await viewModel.changeFilter(type);
	};

	const handlePlotClick = (factoryId: string, point: Point) => {
		navigate(`/factories/${factoryId}/${point.index + 1}`);
	};

	return (
		<View
			chartData={chartData}
			isLoading={viewModel.isLoading}
			productType={viewModel.productType}
			changeFilter={handleChangeFilter}
		/>
	);
};

export default observer(ViewController);
