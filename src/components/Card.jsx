import React from 'react';

import classes from './Card.module.css';

export default function Card({ color, link, text }) {
	return (
		<div className="project-card">
			<a
        href={link}
        alt=""
<<<<<<< HEAD
				className={`${classes.card_link} display-5 text-white mb-3 p-5`}
=======
				className="project-card-link"
>>>>>>> 3a47de4b992633dfbd15f950d263c03b967b037f
        style={{ backgroundColor: `${color}` }}
			>
				{text}
			</a>
		</div>
	);
}
