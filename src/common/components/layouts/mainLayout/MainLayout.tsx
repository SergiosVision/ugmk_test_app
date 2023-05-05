import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
