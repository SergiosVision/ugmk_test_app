import { Options, Point, SeriesOptionsType } from 'highcharts';
import { FC } from 'react';

import ChartComponent from '@modules/chart/Chart';

const baseOptions: Options = {
	title: {
		text: ''
	},
	chart: {
		type: 'column',
		height: '400px'
	},
	yAxis: {
		title: {
			text: 'Tons'
		}
	},
	xAxis: {
		min: 0,
		max: 11,
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
	plotClick: (point: Point) => void;
}

const Chart: FC<Props> = ({ series, plotClick }) => {
	const options: Options = {
		...baseOptions,
		series,
		plotOptions: {
			series: {
				cursor: 'pointer',
				point: {
					events: {
						click: function () {
							plotClick(this);
						}
					}
				}
			}
		}
	};

	return <ChartComponent options={options} />;
};

export default Chart;
