import { SeriesOptionsType } from 'highcharts';
import groupBy from 'lodash/groupBy';
import toPairs from 'lodash/toPairs';
import values from 'lodash/values';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { normalizeDate } from '@utils/dates.ts';

import { ProductType } from '../../typings/productType.ts';

import View from './view/View.tsx';
import { ProductsViewModel } from './viewModel.ts';

interface Props {
	viewModel: ProductsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary();

	useEffect(() => {
		(async () => {
			try {
				await viewModel.getList();
			} catch (error) {
				showBoundary(error);
			}
		})();
	}, []);

	const handleChangeFilter = async (type: ProductType) => {
		await viewModel.changeFilter(type);
	};

	const chartData = useMemo(() => {
		return toPairs(groupBy(viewModel.list, 'factory_id')).map(
			([key, items]) => ({
				name: `Factory ${key}`,
				data: values(
					groupBy(items, ({ date }) => normalizeDate(date as string).getMonth())
				).map(productItems =>
					productItems.reduce(
						(sum, product) => sum + (product.product_weight || 0),
						0
					)
				)
			})
		) as SeriesOptionsType[];
	}, [viewModel.list]);

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
