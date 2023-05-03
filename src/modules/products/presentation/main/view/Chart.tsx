import { Options, SeriesOptionsType } from 'highcharts';
import { FC } from 'react';

import ChartComponent from '@modules/chart/Chart';

const baseOptions: Options = {
	title: {
		text: ''
	},
	chart: {
		type: 'column',
		height: '300px'
	},
	xAxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		crosshair: true
	}
};

interface Props {
	series: SeriesOptionsType[];
}

const Chart: FC<Props> = ({ series }) => {
	const options = {
		...baseOptions,
		series
	};

	return <ChartComponent options={options} />;
};

export default Chart;
