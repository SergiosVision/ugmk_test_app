import { FC, useState } from 'react';

import PrimaryButton from '@components/ui/buttons/primary/PrimaryButton';
import BaseErrorText from '@components/ui/typography/text/ErrorText';
import Text from '@components/ui/typography/text/Text';

import { FallbackProps } from '../types/fallbackProps';

import styles from './Fallback.module.scss';

const Fallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	const [isLoading, setLoading] = useState(false);

	const handleReset = async () => {
		if (!isLoading) {
			setLoading(true);

			try {
				await resetErrorBoundary();
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<div className={styles.wrapper}>
			<BaseErrorText>Ошибка:</BaseErrorText>
			<Text className='text-base text-center'>{error?.message}</Text>
			<PrimaryButton disabled={isLoading} onClick={handleReset}>
				Повторить
			</PrimaryButton>
		</div>
	);
};

export default Fallback;
