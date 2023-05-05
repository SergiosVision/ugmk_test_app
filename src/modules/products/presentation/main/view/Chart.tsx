import { Options, SeriesOptionsType } from 'highcharts';
import { FC } from 'react';
import colors from 'tailwindcss/colors';

import ChartComponent from '@modules/chart/Chart';

const baseOptions: Options = {
	title: {
		text: ''
	},
	chart: {
		type: 'column',
		height: '400px'
	},
	colors: [colors.red[500], colors.indigo['500']],
	yAxis: {
		title: {
			text: 'Тонн'
		}
	},
	xAxis: {
		min: 0,
		max: 11,
		categories: [
			'Янв',
			'Фев',
			'Мар',
			'Апр',
			'Май',
			'Июн',
			'Июл',
			'Авг',
			'Сен',
			'Окт',
			'Ноя',
			'Дек'
		],
		crosshair: true
	},
	plotOptions: {
		series: {
			cursor: 'pointer'
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
