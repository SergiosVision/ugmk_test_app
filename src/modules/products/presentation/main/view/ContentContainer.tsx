import { FC, ReactNode } from 'react';

import classNames from '@utils/classNames.ts';

interface Props {
	className?: string;
	children: ReactNode;
}

const ContentContainer: FC<Props> = ({ children, className }) => {
	return (
		<section
			className={classNames(
				'bg-white rounded-md p-6 border-2 border-base box-content w-full',
				className
			)}
		>
			{children}
		</section>
	);
};

export default ContentContainer;
