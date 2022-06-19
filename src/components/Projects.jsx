import React from 'react';

import Card from './Card';

import basiclopedia from '../assets/basiclopedia.png';
import cli_calc from '../assets/cli_calc.png';
import fbc from '../assets/fbc.png';
import note_taker from '../assets/note_taker.png';

const Projects = () => {
	return (
		<div className="container">
			<h1 className="display-5 text-white fw-bold lh-1 mb-3">Projects</h1>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
				<Card
					img={fbc}
					title="Construction Work Orders"
					description="Internal software for construction companies to track work orders. Powered by React and Bootstrap."
				/>
				<Card
					img={basiclopedia}
					title="Dictionary"
					description="React Typescript project populated with Free Dictionary API data queried based on user input."
				/>
				<Card
					img={cli_calc}
					title="CLI Calculator"
					description="CLI calculator built with readlineSync in Typescript."
				/>
				<Card
					img={note_taker}
					title="Note Taker"
					description="A CRUD app that can be used to write, save, and delete notes. This app uses a NodeJS/Express backend and save and retrieve note data."
				/>
			</div>
		</div>
	);
}

export default Projects;
