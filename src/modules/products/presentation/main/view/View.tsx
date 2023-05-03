import { SeriesOptionsType } from 'highcharts';
import { FC } from 'react';

import { ProductType } from '../../../typings/productType';

import Chart from './Chart';
import ChartSkeleton from './ChartSkeleton';
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
	return (
		<div className='flex flex-col w-full gap-6'>
			<Header productType={productType} changeFilter={changeFilter} />
			<section className='h-[300px]'>
				{!isLoading ? <Chart series={chartData} /> : <ChartSkeleton />}
			</section>
		</div>
	);
};

export default View;
