import React from 'react';

import classes from './Card.module.css';

export default function Card({ color, link, text }) {
	return (
		<div className="project-card">
			<a
        href={link}
        alt=""
				className={`${classes.card_link} display-5 text-white mb-3 p-5`}
        style={{ backgroundColor: `${color}` }}
			>
				{text}
			</a>
		</div>
	);
}
