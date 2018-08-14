import React from 'react';

import styles from './header.css';

const Header = () => (
		<header className="header">
			<div className="header__logo">
				<a className="header__logo-link" href="#">
					<img alt="logo" src="assets/logo.png" />
				</a>
			</div>
		</header>
	);

export default Header;
