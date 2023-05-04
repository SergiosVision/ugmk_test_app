import { FC } from 'react';

import BaseSkeleton from '@components/ui/skeleton/BaseSkeleton';

const Skeleton: FC = () => {
	return (
		<>
			<BaseSkeleton height='42px' className='mb-6 w-full' />
			<BaseSkeleton height='500px' />
		</>
	);
};

export default Skeleton;
