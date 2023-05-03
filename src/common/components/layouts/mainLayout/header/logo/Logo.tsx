import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '@common/router/routes';

import Text from '@components/ui/typography/text/Text';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
	return (
		<NavLink to={routes.home} className={styles.logo}>
			<Text>ugmk test app</Text>
		</NavLink>
	);
};

export default Logo;
