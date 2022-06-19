import React from 'react';

import './Hero.css';

const Hero = () => {
	return (
		<div className="Hero container text-white col-xxl-8 px-4">
			<div className="hero-card">
				<h1 className="display-5 fw-bold lh-1 mb-3">Hi, I'm Patrick</h1>
				<p className="lead">
					I'm a nerd based out of Richmond, VA.
					<br />I love building apps and websites for people to use. Let's build
					something!
				</p>
				<div className="d-grid gap-2 d-md-flex justify-content-md-start">
					<button
						type="button"
						className="btn btn-outline-light btn-lg px-4 me-md-2"
					>
						Resume
					</button>
					<button
						type="button"
						className="btn btn-outline-light btn-lg px-4 me-md-2"
					>
						Projects
					</button>
					<button
						type="button"
						className="btn btn-outline-light btn-lg px-4 me-md-2"
					>
						Contact
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
