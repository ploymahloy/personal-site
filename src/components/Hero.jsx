import React from 'react';

import classes from './Hero.module.css';
import pdf from '../assets/placeholder_resume.pdf';

const Hero = () => {
	return (
		<div className={`${classes.Hero} container text-white col-xxl-8 px-4`}>
			<div className={`${classes.hero_card}`}>
				<h1 className="display-5 fw-bold lh-1 mb-3">Hi, I'm Patrick</h1>
				<p className="lead">
					I'm a nerd based out of Richmond, VA.
					<br />I love building apps and websites for people to use. Let's build
					something!
				</p>
				<div className="d-grid gap-2 d-md-flex justify-content-md-start">
					<a
						href={pdf}
						target="_blank"
						className="btn btn-outline-light btn-lg px-4 me-md-2"
					>
						Resume
					</a>
					<a
						href="#Projects"
						className="btn btn-outline-light btn-lg px-4 me-md-2"
					>
						Projects
					</a>
					<a
						href="#Contact"
						className="btn btn-outline-light btn-lg px-4 me-md-2"
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
