import React, { useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { TiThMenu, TiTimes } from 'react-icons/ti';

import styles from '../styles/Default.module.scss';
import resume from '../public/resume.png';

const Default = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

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

				<a
					href="#!"
					className={styles.menu_icon}
					onClick={() => setIsActive(true)}
				>
					<TiThMenu />
				</a>
				<div
					className={styles.sidenav}
					style={{ display: isActive ? 'block' : 'none' }}
				>
					<ul className={styles.sidenav_menu}>
						<TiTimes
							className={styles.sidenav_menu_x}
							onClick={() => setIsActive(false)}
						/>
						<li>
							<a href="/projects" className={styles.sidenav_menu_link}>
								Projects
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/patrickmahloy/details/featured/" target="_blank" className={styles.sidenav_menu_link}>
								Resume
							</a>
						</li>
						<li>
							<a href="/contact" className={styles.sidenav_menu_link}>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<span className={styles.right}>
					<li className={styles.menu_underlay}>
						<a href="/projects" className={styles.link}>
							Projects
						</a>
					</li>
					<li className={styles.menu_underlay}>
						<a href="https://www.linkedin.com/in/patrickmahloy/details/featured/" target="_blank" className={styles.link}>
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
			<div className={styles.page_content}>{children}</div>
			<footer className={styles.footer}>
				<div className={styles.footer_icons}>
					<a
						href="https://github.com/ploymahloy"
						target="_blank"
						className={styles.footer_icon}
					>
						<SiGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/patrickmahloy/"
						target="_blank"
						className={styles.footer_icon}
					>
						<SiLinkedin />
					</a>
				</div>
			</footer>
		</>
	);
};

export default Default;
