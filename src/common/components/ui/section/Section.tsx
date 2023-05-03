import { FC, ReactNode } from 'react';

import TextH2 from '@components/ui/typography/text/TextH2';

import classNames from '@utils/classNames';

import styles from './Section.module.scss';

interface Props {
	title?: ReactNode;
	className?: string;
	classNameTitle?: string;
	children: ReactNode;
}

const Section: FC<Props> = ({ title, classNameTitle, className, children }) => {
	return (
		<section className={classNames(styles.wrapper, className)}>
			{title && typeof title === 'string' ? (
				<TextH2 className={classNames(classNameTitle, 'mb-4')}>{title}</TextH2>
			) : (
				title
			)}
			{children}
		</section>
	);
};

export default Section;
