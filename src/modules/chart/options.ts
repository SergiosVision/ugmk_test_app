import { Options } from 'highcharts';

export const baseOptions: Partial<Options> = {
	boost: {
		enabled: true,
		useGPUTranslations: true
	},
	accessibility: {
		enabled: false
	},
	chart: {
		backgroundColor: undefined,
		height: '400px'
	},
	legend: {
		symbolRadius: 0,
		labelFormatter: function () {
			return '<span style="color: ' + this.color + '">' + this.name + '</span>';
		}
	}
};
