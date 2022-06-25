import React from 'react';

import './Card.css';

export default function Card({ color, link, text }) {
	return (
		<div className="project-card">
			<a
        href={link}
        alt=""
				className="project-card-link"
        style={{ backgroundColor: `${color}` }}
			>
				{text}
			</a>
		</div>
	);
}
