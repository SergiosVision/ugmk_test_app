import { FC } from 'react';

import Container from '@components/layouts/containers/сontainer/Сontainer';

import ProductsChart from '@modules/products/presentation/main/Provider.tsx';

const Repositories: FC = () => {
	return (
		<Container className='flex flex-col w-full gap-6'>
			<ProductsChart />
		</Container>
	);
};

export default Repositories;
