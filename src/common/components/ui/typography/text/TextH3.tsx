import { FC } from 'react';

import classNames from '@utils/classNames';

import Text, { BaseTextProps } from './Text';

export type TextBodyProps = BaseTextProps;

const TextH3: FC<TextBodyProps> = props => {
	const { className, children, as = 'h3', ...rest } = props;

	return (
		<Text className={classNames('text-3xl', className)} as={as} {...rest}>
			{children}
		</Text>
	);
};

export default TextH3;
