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
		backgroundColor: undefined
	},
	legend: {
		symbolRadius: 0,
		labelFormatter: function () {
			return '<span style="color: ' + this.color + '">' + this.name + '</span>';
		}
	}
};
