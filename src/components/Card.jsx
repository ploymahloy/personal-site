import React from 'react';

import './Card.css';

export default function Card({ description, title }) {
	return (
		<div className="col mb-4">
			<div className="card-body bg-white">
        {/* <img
					className="card-img-top border-bottom"
					src={img}
					alt=""
				/> */}
				<div className="card-body p-3">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					{/* <a href={liveLink} className="btn btn-outline-dark w-100 m-1">
						Live
					</a>
					<a href={githubLink} className="btn btn-outline-dark w-100 m-1">
						Source
					</a> */}
				</div>
			</div>
		</div>
	);
}
