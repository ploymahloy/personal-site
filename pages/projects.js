import Head from 'next/head';

import Default from '../layouts/Default';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.scss';

export default function Projects() {
	const imgUrl =
		'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Default>
				<div className={styles.wrapper}>
					<header className={styles.page_title}>Projects</header>
					<ProjectCard
						appSummary="In an attempt to become more familiar with NextJS, I wanted to apply responsive design principles to create a multi-page artist portfolio; complete with a functioning contact page. The technologies used for this project are:"
						appTitle="Portfolio Template"
						linkDemo="https://next-template-xi.vercel.app/"
						linkSource="https://github.com/ploymahloy/next-template"
						techStack="NextJS, Sass"
					/>
					<ProjectCard
						appSummary="This web app is meant to assist users of a project-based
            company better organize their projects by deadline and job
            type. Users are also able to add new work orders as well. The
            technologies used for this project are:"
						appTitle="Project Organizer"
						linkDemo="https://ploymahloy.github.io/project-organizer/"
						linkSource="https://github.com/ploymahloy/project-organizer"
						techStack="React, Bootstrap"
					/>
					<ProjectCard
						appSummary="This CRUD app reads and writes notes to a JSON database stored in the front end. The Note Taker was built while attending U of R's coding bootcamp. The technologies used for this project are:"
						appTitle="Note Taker"
						linkDemo="https://note-taker-mahloy.herokuapp.com/"
						linkSource="https://github.com/ploymahloy/note-taker"
						techStack="Node, Bootstrap"
					/>
					<ProjectCard
						appSummary="To break the mould of some of my other projects' workflow, I
            made a command line application that functions as a simple
            calculator with a difficult personality. The
            technologies used for this project are:"
						appTitle="CLI Calculator"
						linkDemo="https://www.youtube.com/watch?v=gUpLU6GX3XY"
						linkSource="https://github.com/ploymahloy/cli-calculator"
						techStack="Typescript, Node"
					/>
					<ProjectCard
						appSummary="Utilizing the Dictionary API, this simple app populates dictionary data (i.e. part of speech and definition) from user input. The technologies used for this project
            are:"
						appTitle="Dictionary App"
						linkDemo="https://ploymahloy.github.io/dictionary-app/"
						linkSource="https://github.com/ploymahloy/dictionary-app"
						techStack="React Typescript"
          />
          <ProjectCard
						appSummary="A very straightforward web app designed to calculate monthly
            mortgage payments based on data input by the user. The
            technologies used for this project are:"
						appTitle="Mortgage Calculator"
						linkDemo="https://ploymahloy.github.io/mortgage-calculator/"
						linkSource="https://github.com/ploymahloy/mortgage-calculator"
						techStack="React"
					/>
					<ProjectCard
						appSummary="Everyone seems to have this project in their portfolio, and for good reason. It's great for beginners and introduces challenges that allow the developer to graduate to more complex issues. The technologies used
            for this project are:"
						appTitle="Basic Calculator"
						linkDemo="https://ploymahloy.github.io/basic-calculator/"
						linkSource="https://github.com/ploymahloy/basic-calculator"
						techStack="JavaScript"
					/>
				</div>
			</Default>
		</>
	);
}
