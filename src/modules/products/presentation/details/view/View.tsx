import { SeriesOptionsType } from 'highcharts';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import routes from '@common/router/routes';

import PrimaryButton from '@components/ui/buttons/primary/PrimaryButton';
import TextH2 from '@components/ui/typography/text/TextH2';

import { formatMothValueToString } from '@utils/formatters';

import { formatFactoryIdToString } from '../../../utils/formatFactoryIdToString';

import Chart from './Chart';
import Skeleton from './Skeleton';

interface Props {
	isLoading: boolean;
	monthId: StringOrNull;
	factoryId: NumberOrNull;
	chartData: SeriesOptionsType[];
}

const View: FC<Props> = ({ chartData, isLoading, factoryId, monthId }) => {
	return (
		<div className='flex flex-col gap-6'>
			<Link to={routes.home}>
				<PrimaryButton className='w-full sm:w-max'>Назад</PrimaryButton>
			</Link>

			{!isLoading ? (
				<>
					<TextH2 className='mb-6 text-center'>
						Статистика по продукции фабрики {formatFactoryIdToString(factoryId)}{' '}
						за{' '}
						<span className='capitalize'>
							{formatMothValueToString(monthId)}
						</span>
					</TextH2>
					<section className='h-[400px]'>
						<Chart series={chartData} />
					</section>
				</>
			) : (
				<Skeleton />
			)}
		</div>
	);
};

export default View;
