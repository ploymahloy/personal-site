import React, { useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { TiThMenu, TiTimes } from 'react-icons/ti';

import styles from '../styles/Default.module.scss';

const Default = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div className={styles.menu}>
				<span>
					<div className={`${styles.menu_underlay} ${styles.logo_underlay}`}>
						<a href="/" className={`${styles.link} ${styles.logo}`}>
							Patrick Mahloy
						</a>
					</div>
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
					<div className={styles.sidenav_menu}>
						<TiTimes
							className={styles.sidenav_menu_x}
							onClick={() => setIsActive(false)}
						/>
						<div>
							<a href="/projects" className={styles.sidenav_menu_link}>
								Projects
							</a>
						</div>
						<div>
							<a href="https://us.docs.wps.com/l/sIEmYyay2AYGt55kG?v=v2" target="_blank" className={styles.sidenav_menu_link}>
								Resume
							</a>
						</div>
						<div>
							<a href="/contact" className={styles.sidenav_menu_link}>
								Contact
							</a>
						</div>
					</div>
				</div>

				<span className={styles.right}>
					<div className={styles.menu_underlay}>
						<a href="/projects" className={styles.link}>
							Projects
						</a>
					</div>
					<div className={styles.menu_underlay}>
						<a href="https://us.docs.wps.com/l/sIEmYyay2AYGt55kG?v=v2" target="_blank" className={styles.link}>
							Resume
						</a>
					</div>
					<div
						className={styles.menu_underlay}
						id={styles.underlay_no_margin_right}
					>
						<a href="/contact" className={styles.link}>
							Contact
						</a>
					</div>
				</span>
			</div>
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
