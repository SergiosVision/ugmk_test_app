import { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Fallback from './fallback/Fallback';

interface Props {
	children: ReactNode;
}

const ErrorBoundaryWrapper: FC<Props> = ({ children }) => {
	return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
