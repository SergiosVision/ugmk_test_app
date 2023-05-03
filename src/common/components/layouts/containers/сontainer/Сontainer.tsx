import { FC, ReactNode } from 'react';

import classNames from '@utils/classNames';

import styles from './Container.module.scss';

interface Props {
	children?: ReactNode;
	className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
	return (
		<div className={classNames(styles['base-container'], className)}>
			{children}
		</div>
	);
};

export default Container;
