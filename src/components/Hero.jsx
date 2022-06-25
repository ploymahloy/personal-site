import React from 'react';

import './Hero.css';

const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-card">
				<h1>Hi, I'm Patrick</h1>
				<p>
					I'm a nerd based out of Richmond, VA.
					<br />I love building apps and websites for people to use. Let's build
					something!
				</p>
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
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
