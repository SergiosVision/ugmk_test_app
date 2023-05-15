import { FC } from 'react';

import ErrorBoundaryContextProvider, {
	ErrorBoundaryContextProviderProps
} from './ErrorBoundaryContextProvider';
import Fallback from './fallback/Fallback';

type Props = Pick<
	ErrorBoundaryContextProviderProps,
	'error' | 'children' | 'resetErrorBoundary'
>;

const ErrorBoundaryWrapper: FC<Props> = ({ children, ...rest }) => {
	return (
		<ErrorBoundaryContextProvider {...rest} FallbackComponent={Fallback}>
			{children}
		</ErrorBoundaryContextProvider>
	);
};

export default ErrorBoundaryWrapper;
