import { FC } from 'react';

import classNames from '@utils/classNames';

import Button, { BaseButtonProps } from '../Button';
import styles from '../styles/PrimaryButton.module.scss';

const PrimaryButton: FC<BaseButtonProps> = ({
	className,
	children,
	...rest
}) => {
	return (
		<Button
			className={classNames(styles['primary-button'], className)}
			{...rest}
		>
			{children}
		</Button>
	);
};

export default PrimaryButton;
