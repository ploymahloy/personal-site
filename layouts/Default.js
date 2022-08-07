import React from 'react';
import { TiThMenu } from 'react-icons/ti';

import styles from '../styles/Default.module.scss';

const Default = ({ children }) => {
	return (
		<>
			<ul className={styles.menu}>
				<span>
					<li className={`${styles.menu_underlay} ${styles.logo_underlay}`}>
						<a href="/" className={`${styles.link} ${styles.logo}`}>
							Patrick Mahloy
						</a>
					</li>
				</span>

				<a href="#" className={styles.menu_icon} >
					<TiThMenu />
				</a>
				<span className={styles.right}>
					<li className={styles.menu_underlay}>
						<a href="/projects" className={styles.link}>
							Projects
						</a>
					</li>
					<li className={styles.menu_underlay}>
						<a href="#" className={styles.link}>
							Resume
						</a>
					</li>
					<li
						className={styles.menu_underlay}
						id={styles.underlay_no_margin_right}
					>
						<a href="/contact" className={styles.link}>
							Contact
						</a>
					</li>
				</span>
			</ul>
			{children}
		</>
	);
};

export default Default;
