import { FC } from 'react';
import RLSkeleton, { SkeletonProps } from 'react-loading-skeleton';

import classNames from '@utils/classNames';

import styles from './BaseSkeleton.module.scss';

const BaseSkeleton: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<RLSkeleton
			className={classNames(styles['base-skeleton'], className)}
			{...rest}
		/>
	);
};

export default BaseSkeleton;
