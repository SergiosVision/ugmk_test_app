import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from '@utils/classNames';

import styles from './styles/Button.module.scss';

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button: FC<BaseButtonProps> = ({ children, className, ...rest }) => {
	return (
		<button className={classNames(styles['base-button'], className)} {...rest}>
			{children}
		</button>
	);
};

export default Button;
