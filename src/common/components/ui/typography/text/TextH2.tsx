import { FC } from 'react';

import classNames from '@utils/classNames';

import Text, { BaseTextProps } from './Text';

export type TextBodyProps = BaseTextProps;

const TextH2: FC<TextBodyProps> = props => {
	const { className, children, as = 'h2', ...rest } = props;

	return (
		<Text className={classNames('text-2xl', className)} as={as} {...rest}>
			{children}
		</Text>
	);
};

export default TextH2;
