import {
	FC,
	FunctionComponent,
	ReactElement,
	ReactNode,
	createContext,
	useContext
} from 'react';

import { FallbackProps } from './types/fallbackProps';

interface ContextProps {
	error: any;
	errorFallback: ValueOrNull<ReactElement>;
}

const ErrorBoundaryContext = createContext<ContextProps>({
	error: null,
	errorFallback: null
});

export const useErrorBoundaryContext = () => useContext(ErrorBoundaryContext);
export interface ErrorBoundaryContextProviderProps {
	error: any;
	children: ReactNode;
	resetErrorBoundary: () => void;
	FallbackComponent: FunctionComponent<FallbackProps>;
}

const ErrorBoundaryContextProvider: FC<ErrorBoundaryContextProviderProps> = ({
	children,
	FallbackComponent,
	resetErrorBoundary,
	error
}) => {
	return (
		<ErrorBoundaryContext.Provider
			value={{
				error,
				errorFallback: FallbackComponent({
					error,
					resetErrorBoundary
				})
			}}
		>
			{children}
		</ErrorBoundaryContext.Provider>
	);
};

export default ErrorBoundaryContextProvider;
