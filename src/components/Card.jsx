import React from 'react';

import './Card.css';

export default function Card({ description, img, title }) {
	return (
		<div className="col mb-4">
			<div className="card-body border transparent">
        <img
					className="card-img-top border-bottom border-white"
					src={img}
					alt=""
				/>
				<div className="card-body text-white p-3">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<a href="" className="btn btn-outline-light w-100 m-1">
						Live
					</a>
					<a href="" className="btn btn-outline-light w-100 m-1">
						Github
					</a>
				</div>
			</div>
		</div>
	);
}
