import { FC, ReactNode } from 'react';

import classNames from '@utils/classNames';

import styles from './BaseCard.module.scss';

interface Props {
	children: ReactNode;
	className?: string;
}
const BaseCard: FC<Props> = ({ children, className }) => {
	return (
		<div className={classNames(styles['base-card'], className)}>{children}</div>
	);
};

export default BaseCard;
