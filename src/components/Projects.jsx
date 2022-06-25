import React from 'react';

// import Card from './Card';
import './Projects.css';

const Projects = () => {
	return (
		<div className="Projects container">
			<h2 className="display-5 text-white fw-bold lh-1 mb-3">Projects</h2>
			<div className="row row-cols-1 row-cols-md-2">
				<div className="display-5 img-card bg-dark text-white mb-3 p-0">
					Project
				</div>
				<div className="display-5 img-card bg-dark text-white mb-3 p-0">
					Project
				</div>
				<div className="display-5 img-card bg-dark text-white mb-3 p-0">
					Project
				</div>
				<div className="display-5 img-card bg-dark text-white mb-3 p-0">
					Project
				</div>
				<div className="display-5 img-card bg-dark text-white p-0">Project</div>
			</div>
		</div>
	);
};

export default Projects;
