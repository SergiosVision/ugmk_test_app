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
		backgroundColor: '#424244'
	},
	colors: ['#FF7652', '#6C4ECF', '#32A8E2', '#50B432', '#ffffff'],
	title: {
		style: {
			color: '#ffffff'
		}
	},
	subtitle: {
		style: {
			color: '#ffffff'
		}
	},
	legend: {
		itemStyle: {
			color: '#ffffff'
		},
		itemHoverStyle: {
			color: 'rgba(255, 255, 255, 0.3)'
		}
	},
	yAxis: {
		labels: {
			style: {
				color: '#ffffff'
			}
		},
		title: {
			style: {
				color: '#ffffff'
			}
		}
	},
	xAxis: {
		labels: {
			style: {
				color: '#ffffff'
			}
		},
		title: {
			style: {
				color: '#ffffff'
			}
		}
	}
};
