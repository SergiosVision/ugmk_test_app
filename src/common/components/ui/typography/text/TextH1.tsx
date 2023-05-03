import { FC } from 'react';

import classNames from '@utils/classNames';

import Text, { BaseTextProps } from './Text';

export type TextBodyProps = BaseTextProps;

const TextH1: FC<TextBodyProps> = props => {
	const { className, children, as = 'h1', ...rest } = props;

	return (
		<Text className={classNames('text-8xl', className)} as={as} {...rest}>
			{children}
		</Text>
	);
};

export default TextH1;
