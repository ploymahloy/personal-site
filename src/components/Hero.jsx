import React from 'react';

import './Hero.css';
import profile from '../assets/profile.png';

const Hero = () => {
	return (
		<div className="Hero container text-secondary col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img
						src={profile}
						className="d-block mx-lg-auto w-75 rounded bg-secondary"
						alt="..."
						loading="lazy"
					/>
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 text-white fw-bold lh-1 mb-3">
						Hi, I'm Patrick
					</h1>
					<p className="lead">
						I'm a nerd based out of Richmond, VA. I love building apps and
						websites for people to use. Let's build something!
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<button
							type="button"
							className="btn btn-primary btn-lg px-4 me-md-2"
						>
							Resume
						</button>
						<button
							type="button"
							className="btn btn-primary btn-lg px-4 me-md-2"
						>
							Projects
						</button>
						<button
							type="button"
							className="btn btn-primary btn-lg px-4 me-md-2"
						>
							Contact
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
