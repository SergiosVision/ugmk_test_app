import { FC } from 'react';
import { FallbackProps, useErrorBoundary } from 'react-error-boundary';

import PrimaryButton from '@components/ui/buttons/primary/PrimaryButton';
import BaseErrorText from '@components/ui/typography/text/ErrorText';
import Text from '@components/ui/typography/text/Text';

import styles from './Fallback.module.scss';

const Fallback: FC<FallbackProps> = ({ error }) => {
	const { resetBoundary } = useErrorBoundary();

	return (
		<div className={styles.wrapper}>
			<BaseErrorText>Ошибка:</BaseErrorText>
			<Text className='text-base text-center'>{error?.message}</Text>
			<PrimaryButton onClick={resetBoundary}>Повторить</PrimaryButton>
		</div>
	);
};

export default Fallback;
