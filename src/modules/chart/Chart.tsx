import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import merge from 'lodash/merge';
import { FC, useMemo } from 'react';

import { baseOptions } from './options';

const Chart: FC<HighchartsReact.Props> = ({ options, ...rest }) => {
	const mergedOptions = useMemo(() => merge(baseOptions, options), [options]);

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={mergedOptions}
			{...rest}
		/>
	);
};

export default Chart;
