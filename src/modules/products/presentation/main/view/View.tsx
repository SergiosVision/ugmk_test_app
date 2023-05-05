import { Point, SeriesOptionsType } from 'highcharts';
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
	plotClick: (point: Point) => void;
}

const View: FC<Props> = ({
	chartData,
	isLoading,
	productType,
	changeFilter,
	plotClick
}) => {
	return (
		<div className='flex flex-col w-full gap-6'>
			<Header productType={productType} changeFilter={changeFilter} />
			<section className='h-[400px]'>
				{!isLoading ? (
					<Chart series={chartData} plotClick={plotClick} />
				) : (
					<ChartSkeleton />
				)}
			</section>
		</div>
	);
};

export default View;
