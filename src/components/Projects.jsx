import React from 'react';

import Card from './Card';
import './Projects.css';

const Projects = () => {
	return (
		<div className="Projects container">
			<h2 className="display-5 text-white fw-bold lh-1 mb-3">Projects</h2>
			<div className="row row-cols-1 row-cols-md-2">
				<Card text="Work Order Portal" color="rgb(194, 174, 158)" link="https://github.com/ploymahloy/construction-work-orders"/>
				<Card text="Dictionary App" color="rgb(220, 135, 73)" link="https://github.com/ploymahloy/dictionaryapi"/>
				<Card text="CLI Calculator" color="rgb(243, 170, 72)" link="https://github.com/ploymahloy/cli-calculator"/>
				<Card text="Budget Tracker" color="rgb(151, 165, 163)" link="https://github.com/ploymahloy/budget-app"/>
			</div>
		</div>
	);
};

export default Projects;
