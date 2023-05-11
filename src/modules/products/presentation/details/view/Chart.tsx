import { Options, SeriesOptionsType } from 'highcharts';
import { FC } from 'react';
import colors from 'tailwindcss/colors';

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
		height: '400px'
	},
	colors: [colors.green['500'], colors.amber['500'], colors.red[500]],
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				connectorWidth: 0,
				style: {
					textOutline: undefined
				},
				formatter: function () {
					return (
						'<span style="color: ' + this.color + '">' + this.y + '</span>'
					);
				}
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
