import { SeriesOptionsType } from 'highcharts';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import View from './view/View';
import { FactoryDetailsViewModel } from './viewModel';

interface Props {
	viewModel: FactoryDetailsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary();
	const params = useParams<{ factoryId: string; monthId: string }>();

	useEffect(() => {
		(async () => {
			if (params.factoryId && params.monthId) {
				try {
					await viewModel.getDetails(params.factoryId, params.monthId);
				} catch (error) {
					showBoundary(error);
				}
			}
		})();
	}, []);

	const chartData = useMemo(() => {
		const productsSum = viewModel.data.products.reduce(
			(result, item) => ({
				...result,
				product1: result.product1 + (item.product1 || 0),
				product2: result.product2 + (item.product2 || 0)
			}),
			{ product1: 0, product2: 0 }
		);

		return [
			{
				name: 'Килограммы',
				colorByPoint: true,
				data: [
					{
						name: 'Продукт 1',
						y: productsSum.product1
					},
					{
						name: 'Продукт 2',
						y: productsSum.product2
					}
				]
			}
		] as SeriesOptionsType[];
	}, [viewModel.data.products]);

	return (
		<View
			chartData={chartData}
			monthId={params.monthId || ''}
			factoryId={viewModel.data.factory_id}
			isLoading={viewModel.isLoading}
		/>
	);
};

export default observer(ViewController);
