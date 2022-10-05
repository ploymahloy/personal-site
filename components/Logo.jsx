import React, { useEffect, useState } from 'react';
import styles from '../styles/Logo.module.scss';

export default function LogoNoSSR() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [_position, setPosition] = useState();

	function getLocation() {
		window.navigator.geolocation.getCurrentPosition(
			(newPos) => setPosition(newPos),
			console.error
		);
	}

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<span>
			<div className={`${styles.menu_underlay} ${styles.logo_underlay}`}>
				<a href="/" className={`${styles.link} ${styles.logo}`}>
					{windowWidth > 451 ? 'Patrick Mahloy' : 'PM'}
				</a>
			</div>
		</span>
	);
}
