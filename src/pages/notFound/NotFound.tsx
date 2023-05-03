import React from 'react';

import Container from '@components/layouts/containers/сontainer/Сontainer';
import TextH1 from '@components/ui/typography/text/TextH1';
import TextH2 from '@components/ui/typography/text/TextH2';

const NotFound: React.FC = () => {
	return (
		<Container className='flex flex-col justify-center items-center flex-1'>
			<TextH1 className='text-primary text uppercase mb-4'>404</TextH1>
			<TextH2 as='p'>Nothing found</TextH2>
		</Container>
	);
};

export default NotFound;
