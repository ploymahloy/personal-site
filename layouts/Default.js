import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si';
import { TiThMenu, TiTimes } from 'react-icons/ti';

import styles from '../styles/Default.module.scss';

const LogoNoSSR = dynamic(() => import('../components/Logo'), { ssr: false });

const resumeLink = "https://drive.google.com/file/d/19AUBk0H4R155CVbfZfrY_U6omnpshsWU/view?usp=sharing"

const Default = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div className={styles.menu}>
				{/* Logo */}
				<LogoNoSSR />

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
							<a href="#projects" className={styles.sidenav_menu_link}>
								Projects
							</a>
						</div>
						<div>
							<a
								href={resumeLink}
                download="Patrick_Mahloy_Resume.pdf"
                target="blank"
								className={styles.sidenav_menu_link}
							>
								Resume
							</a>
						</div>
						<div>
							<a href="#contact" className={styles.sidenav_menu_link}>
								Contact
							</a>
						</div>
					</div>
				</div>

				<span className={styles.right}>
					<div className={styles.menu_underlay}>
						<a href="#projects" className={styles.link}>
							Projects
						</a>
					</div>
					<div className={styles.menu_underlay}>
						<a
							href={resumeLink}
							download="Patrick_Mahloy_Resume.pdf"
							target="blank"
							className={styles.link}
						>
							Resume
						</a>
					</div>
					<div
						className={styles.menu_underlay}
						id={styles.underlay_no_margin_right}
					>
						<a href="#contact" className={styles.link}>
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
					<a
						href="https://medium.com/@patrick.mahloy"
						target="_blank"
						className={styles.footer_icon}
					>
						<SiMedium />
					</a>
				</div>
			</footer>
		</>
	);
};

export default Default;
