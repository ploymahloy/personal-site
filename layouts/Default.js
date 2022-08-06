import React from 'react';
import { TiThMenu } from 'react-icons/ti';

import styles from '../styles/Default.module.css';

const Default = ({ children }) => {
	return (
		<div>
			<ul className={styles.menu}>
				<span className={styles.left}>
					<li className={styles.menu_underlay}>
						<a href="/" className={styles.link}>
							Patrick Mahloy
						</a>
					</li>
				</span>

				<a href="#" className={styles.icon_underlay}>
					<TiThMenu className={styles.menu_icon} />
				</a>
				<span className={styles.right}>
					<li className={styles.menu_underlay}>
						<a href="/projects" className={styles.link}>
							Projects
						</a>
					</li>
					<li
						className={styles.menu_underlay}
						id={styles.underlay_no_margin_right}
					>
						<a href="#" className={styles.link}>
							Resume
						</a>
					</li>
				</span>
			</ul>
			{children}
		</div>
	);
};

export default Default;
