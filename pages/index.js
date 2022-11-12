import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaNode, FaSass } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
	SiBootstrap,
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import Tooltip from '@mui/material/Tooltip';
import emailjs from 'emailjs-com';

import Default from '../layouts/Default';
import Modal from '../components/Modal';
import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Home.module.scss';
import profilePic from '../public/headshot.png';

export default function Home() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('gmail', 'template_a', form.current, '_iYWkac8R892UoUAV')
			.then(
				(res) => {
					alert(res.text);
				},
				(error) => {
					alert(error.text);
				}
			);
	};

	return (
		<>
			<Head>
				<title>Patrick Mahloy</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<Default>
				<main className={styles.container}>
					<section className={styles.container_1}>
						<div className={styles.profile}>
							<Image
								src={profilePic}
								alt="Profile image"
								width={300}
								height={315}
								layout={'intrinsic'}
							/>
						</div>
						<div className={styles.bio}>
							<h2 className={styles.bio_intro}>
								{`Hi, I\'m Patrick.`} {'\n'}
							</h2>
							<h3 className={styles.bio_about}>
								{`I\'m a Web Developer from Richmond, VA!`}
							</h3>
							<p className={styles.bio_spiel}>
								{`Ever since a friend showed me the basics of web development a
								few years ago, I have been in love ever since. One truly gets out
								what they put in and I LOVE that! Currently, I am pursuing
								freelance and full-time employment opportunities.`}
								<p>Here are some of my favorites technologies to work with:</p>
							</p>
							<div className={styles.bio_tech}>
								<Tooltip title="HTML">
									<span>
										<SiHtml5 className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="CSS">
									<span>
										<SiCss3 className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="Sass">
									<span>
										<FaSass className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="Bootstrap">
									<span>
										<SiBootstrap className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="TailwindCSS">
									<span>
										<SiTailwindcss className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="JavaScript">
									<span>
										<SiJavascript className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="TypeScript">
									<span>
										<SiTypescript className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="React.JS">
									<span>
										<SiReact className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="Next.JS">
									<span>
										<SiNextdotjs className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
								<Tooltip title="Node.JS">
									<span>
										<FaNode className={styles.bio_tech_icon} />
									</span>
								</Tooltip>
							</div>
						</div>
					</section>
					<div className={styles.wrapper}>
						<header id="projects" className={styles.page_title}>
							Projects
						</header>
						<ProjectCard
							appSummary="I use Google Keep almost every day between personal and professional use. I learned how to implement a masonry grid using pure CSS, among other layout techniques."
							appTitle="Keep Clone"
							linkDemo="https://keep-clone-f0u1cieio-ploymahloy.vercel.app"
							linkSource="https://github.com/ploymahloy/keep_clone"
							techStack="React Typescript, Sass, JSON"
						/>
						<ProjectCard
							appSummary="A local store has been in business for over 50 years strong. Their website, unfortunately, has not been updated in almost 20 years. I created a site for the sake of developing my skills most relevant to freelance work."
							appTitle="SMB Landing Page"
							linkDemo="https://games-market.vercel.app/"
							linkSource="https://github.com/ploymahloy/games-market"
							techStack="NextJS, TailwindCSS, JSON"
						/>
						<ProjectCard
							appSummary="This site was built to showcase responsive design skills, and to showcase my other projects. To view the demo, scroll around! "
							appTitle="My Website"
							linkDemo="https://patrick-mahloy.vercel.app/"
							linkSource="https://github.com/ploymahloy/personal-site"
							techStack="NextJS, Sass, Material UI, JSON"
						/>
						<ProjectCard
							appSummary="In an attempt to become more familiar with NextJS, I wanted to apply responsive design principles to create a multi-page artist portfolio; complete with a functioning contact page."
							appTitle="Artist Portfolio"
							linkDemo="https://next-template-xi.vercel.app/"
							linkSource="https://github.com/ploymahloy/next-template"
							techStack="NextJS, Sass, JSON"
						/>
						<ProjectCard
							appSummary="This web app is meant to assist users of a project-based
            company better organize their projects by deadline and job
            type. Users are also able to add new work orders as well."
							appTitle="Project Organizer"
							linkDemo="https://ploymahloy.github.io/project-organizer/"
							linkSource="https://github.com/ploymahloy/project-organizer"
							techStack="React, Bootstrap, SQL, JSON"
						/>
						<ProjectCard
							appSummary="To break the mould of some of my other projects' workflow, I
            made a command line application that functions as a simple
            calculator with a difficult personality. The interface prompts the user for two numbers and an operator then calculates the result."
							appTitle="Command Line App"
							linkDemo="https://www.youtube.com/watch?v=gUpLU6GX3XY"
							linkSource="https://github.com/ploymahloy/cli-calculator"
							techStack="Typescript, Node, JSON"
						/>
					</div>
					<div className={styles.wrapper}>
						<header id="contact" className={styles.page_title}>
							Contact
						</header>
						<div className={styles.contact}>
							<BsFillTelephoneFill className={styles.contact_icon} />{' '}
							<p className={styles.contact_detail}>{'(757) 286-6772'}</p>
						</div>
						<div className={styles.contact}>
							<MdEmail className={styles.contact_icon} />{' '}
							<p className={styles.contact_detail}>
								{'patrick.mahloy@gmail.com'}
							</p>
						</div>
						<form ref={form} onSubmit={sendEmail} className={styles.form}>
							<div>
								<input
									required
									type="text"
									name="name"
									placeholder="Name"
									className={styles.input}
								/>
								<input
									required
									type="text"
									name="company"
									placeholder="Company"
									className={styles.input}
								/>
							</div>
							<div>
								<input
									required
									type="email"
									name="email"
									placeholder="Email"
									className={styles.input}
								/>
							</div>
							<div>
								<textarea
									required
									name="message"
									placeholder="Message"
									resize="vertical"
									className={styles.textarea}
								/>
							</div>
							<input type="submit" value="Send" className={styles.button} />
						</form>
					</div>
				</main>
			</Default>
		</>
	);
}
