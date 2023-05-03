import { FC, ReactNode } from 'react';

import TextH3 from './TextH3';

interface Props {
	children?: ReactNode;
}

const ErrorText: FC<Props> = ({ children }) => {
	return <TextH3 className='text-center text-primary'>{children}</TextH3>;
};

export default ErrorText;
