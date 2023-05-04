import { Options, SeriesOptionsType } from 'highcharts';
import { FC } from 'react';

import ChartComponent from '@modules/chart/Chart';

const baseOptions: Options = {
	title: {
		text: ''
	},
	chart: {
		plotBackgroundColor: undefined,
		plotBorderWidth: undefined,
		plotShadow: false,
		type: 'pie',
		height: '500px'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: false
			},
			showInLegend: true
		}
	}
};

interface Props {
	series: SeriesOptionsType[];
}

const Chart: FC<Props> = ({ series }) => {
	const options: Options = {
		...baseOptions,
		series
	};

	return <ChartComponent options={options} />;
};

export default Chart;