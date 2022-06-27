import React from 'react';

import Card from './Card';
import classes from './Projects.module.css';

const Projects = () => {
	return (
<<<<<<< HEAD
		<div className={classes.Projects} id="Projects">
      <div className={`${classes.projects_card} container`}>
				<h2 className="display-5 text-white fw-bold lh-1 mb-3">Projects</h2>
				<div className="row row-cols-1 row-cols-md-2">
					<Card
						text="Project Organizer"
						color="rgb(194, 174, 158)"
						link="https://github.com/ploymahloy/construction-work-orders"
					/>
					<Card
						text="Dictionary App"
						color="rgb(220, 135, 73)"
						link="https://github.com/ploymahloy/dictionaryapi"
					/>
					<Card
						text="CLI Calculator"
						color="rgb(243, 170, 72)"
						link="https://github.com/ploymahloy/cli-calculator"
					/>
					<Card
						text="Budget Tracker"
						color="rgb(151, 165, 163)"
						link="https://github.com/ploymahloy/budget-app"
					/>
				</div>
=======
		<div className="projects-container" id="Projects">
			<div className="projects-card">
				<h2 className="projects-card-title">Projects</h2>
				<Card
					text="Work Order Portal"
					color="rgb(194, 174, 158)"
					link="https://github.com/ploymahloy/construction-work-orders"
				/>
				<Card
					text="Dictionary App"
					color="rgb(220, 135, 73)"
					link="https://github.com/ploymahloy/dictionaryapi"
				/>
				<Card
					text="CLI Calculator"
					color="rgb(243, 170, 72)"
					link="https://github.com/ploymahloy/cli-calculator"
				/>
				<Card
					text="Budget Tracker"
					color="rgb(151, 165, 163)"
					link="https://github.com/ploymahloy/budget-app"
				/>
>>>>>>> 3a47de4b992633dfbd15f950d263c03b967b037f
			</div>
		</div>
	);
};

export default Projects;
