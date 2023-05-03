import React from 'react'

import styles from './Header.module.scss'
import Logo from './logo/Logo'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles['header-container']}>
				<Logo />
			</div>
		</header>
	)
}

export default Header
