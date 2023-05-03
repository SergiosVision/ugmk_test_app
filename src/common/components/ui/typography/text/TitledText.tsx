import { FC, ReactNode } from 'react';

import classNames from '@utils/classNames';

import Text from './Text';
import styles from './styles/TitledText.module.scss';

interface Props {
	children: ReactNode;
	subTitle?: ReactNode;
	className?: string;
	classNameTitle?: string;
	classNameSubtitle?: string;
}

const TitledText: FC<Props> = ({
	children,
	subTitle,
	classNameSubtitle,
	className,
	classNameTitle
}) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			{typeof children === 'string' ? (
				<Text as='span' className={classNames(styles.title, classNameTitle)}>
					{children}
				</Text>
			) : (
				children
			)}
			<Text className={classNames(styles.subtitle, classNameSubtitle)}>
				{subTitle || '-'}
			</Text>
		</div>
	);
};

export default TitledText;
