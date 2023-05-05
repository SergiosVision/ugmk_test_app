import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@common/router/routes';

import Container from '@components/layouts/containers/сontainer/Сontainer';
import PrimaryButton from '@components/ui/buttons/primary/PrimaryButton.tsx';
import TextH1 from '@components/ui/typography/text/TextH1';
import TextH2 from '@components/ui/typography/text/TextH2';

const NotFound: React.FC = () => {
	return (
		<Container className='flex flex-col justify-center items-center flex-1'>
			<TextH1 className='text-primary text uppercase mb-4'>404</TextH1>
			<TextH2 as='p'>Такой страницы не существует</TextH2>
			<Link className='mt-6' to={routes.home}>
				<PrimaryButton>На главную</PrimaryButton>
			</Link>
		</Container>
	);
};

export default NotFound;
