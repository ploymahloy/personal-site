import React from 'react';

import classes from './Hero.module.css';
import pdf from '../assets/placeholder_resume.pdf';

const Hero = () => {
	return (
<<<<<<< HEAD
		<div className={`${classes.Hero} container text-white col-xxl-8 px-4`}>
			<div className={`${classes.hero_card}`}>
				<h1 className="display-5 fw-bold lh-1 mb-3">Hi, I'm Patrick</h1>
				<p className="lead">
=======
		<div className="hero-container">
			<div className="hero-card">
				<h1>Hi, I'm Patrick</h1>
				<p>
>>>>>>> 3a47de4b992633dfbd15f950d263c03b967b037f
					I'm a nerd based out of Richmond, VA.
					<br />I love building apps and websites for people to use. Let's build
					something!
				</p>
<<<<<<< HEAD
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
=======
				<div className="hero-btns">
					<a type="button" href="#" className="hero-btn">
						Resume
					</a>
					<a
						type="button"
						link="/projects"
						href="#Projects"
						className="hero-btn"
					>
						Projects
					</a>
					<a type="button" link="/contact" href="#Contact" className="hero-btn">
>>>>>>> 3a47de4b992633dfbd15f950d263c03b967b037f
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
