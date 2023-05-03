import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@components/layouts/mainLayout/MainLayout';

import NotFound from '@pages/notFound/NotFound';
import Repositories from '@pages/repositories/Repositories';
import RepositoryDetails from '@pages/repositories/repositoryDetails/RepositoryDetails';

import routes from './routes';

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: routes.home,
				index: true,
				element: <Repositories />
			},
			{
				path: routes.repositoryDetails,
				element: <RepositoryDetails />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]);

export default router;
