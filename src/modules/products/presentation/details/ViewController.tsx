import { SeriesOptionsType } from 'highcharts';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { formatKgToTons } from '@utils/formatters.ts';

import View from './view/View';
import { FactoryDetailsViewModel } from './viewModel';

interface Props {
	viewModel: FactoryDetailsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const params = useParams<{ factoryId: string; monthId: string }>();

	const handleRequestDetails = async () => {
		if (params.factoryId && params.monthId) {
			await viewModel.getDetails(params.factoryId, params.monthId);
		}
	};

	const handleReset = async () => {
		await handleRequestDetails();

		if (viewModel.error) {
			viewModel.setError(null);
		}
	};

	useEffect(() => {
		(async () => {
			await handleRequestDetails();
		})();
	}, []);

	const chartData = useMemo(
		() =>
			[
				{
					name: 'Тонн',
					colorByPoint: true,
					data: Object.values(
						viewModel.data.products.reduce(
							(result, item) => ({
								...result,
								product1: result.product1 + (item.product1 || 0),
								product2: result.product2 + (item.product2 || 0),
								product3: result.product3 + (item.product3 || 0)
							}),
							{ product1: 0, product2: 0, product3: 0 }
						)
					).map((value, index) => ({
						name: `Продукт ${index + 1}`,
						y: formatKgToTons(value)
					}))
				}
			] as SeriesOptionsType[],
		[viewModel.data.products]
	);

	return (
		<ErrorBoundaryWrapper
			error={viewModel.error}
			resetErrorBoundary={handleReset}
		>
			<View
				chartData={chartData}
				monthId={params.monthId || ''}
				factoryId={viewModel.data.factory_id}
				isLoading={viewModel.isLoading}
			/>
		</ErrorBoundaryWrapper>
	);
};

export default observer(ViewController);
