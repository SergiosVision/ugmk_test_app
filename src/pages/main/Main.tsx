import { FC } from 'react';

import Container from '@components/layouts/containers/сontainer/Сontainer';

import { ProductsChart } from '@modules/products/presentation/main/index';

const Main: FC = () => {
	return (
		<Container className='flex flex-col'>
			<ProductsChart />
		</Container>
	);
};

export default Main;
