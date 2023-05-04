import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@components/layouts/mainLayout/MainLayout';

import FactoryDetails from '@pages/factories/FactoryDetails';
import Main from '@pages/main/Main';
import NotFound from '@pages/notFound/NotFound';

import routes from './routes';

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: routes.home,
				index: true,
				element: <Main />
			},
			{
				path: routes.factoryDetails,
				element: <FactoryDetails />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]);

export default router;
