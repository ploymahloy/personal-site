import React from 'react';

import './Card.css';

export default function Card({ color, link, text }) {
	return (
		<div className="col-md-6">
			<a
        href={link}
        alt=""
				className="Card display-5 img-card text-white text-decoration-none mb-3 p-5"
        style={{ backgroundColor: `${color}` }}
			>
				{text}
			</a>
		</div>
	);
}
