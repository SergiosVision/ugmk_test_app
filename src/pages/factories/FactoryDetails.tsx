import { FC } from 'react';

import Container from '@components/layouts/containers/сontainer/Сontainer';

import { FactoryDetails } from '@modules/products/presentation/details/index';

const FactoryDetailsPage: FC = () => {
	return (
		<Container className='flex flex-col w-full'>
			<FactoryDetails />
		</Container>
	);
};

export default FactoryDetailsPage;
