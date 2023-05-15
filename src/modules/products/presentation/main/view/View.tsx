import { SeriesOptionsType } from 'highcharts';
import { FC } from 'react';

import { useErrorBoundaryContext } from '@components/errors/ErrorBoundaryContextProvider.tsx';
import Text from '@components/ui/typography/text/Text';

import { ProductType } from '@modules/products/typings/productType';

import Chart from './Chart';
import ChartSkeleton from './ChartSkeleton';
import ContentContainer from './ContentContainer';
import Header from './Header';

interface Props {
	isLoading: boolean;
	productType: ProductType;
	chartData: SeriesOptionsType[];
	changeFilter: (type: ProductType) => void;
}

const View: FC<Props> = ({
	chartData,
	isLoading,
	productType,
	changeFilter
}) => {
	const { error, errorFallback } = useErrorBoundaryContext();

	return (
		<div className='flex flex-col w-full gap-6'>
			<Header productType={productType} changeFilter={changeFilter} />
			<ContentContainer className='h-[400px]'>
				{error ? (
					errorFallback
				) : !isLoading ? (
					chartData.length ? (
						<Chart series={chartData} />
					) : (
						<Text className='text-center'>Нет данных для отображения</Text>
					)
				) : (
					<ChartSkeleton />
				)}
			</ContentContainer>
		</div>
	);
};

export default View;
