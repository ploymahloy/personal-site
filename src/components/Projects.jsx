import React from 'react';

import Card from './Card';
import './Projects.css';

import basiclopedia from '../assets/basiclopedia.png';
import cli_calc from '../assets/cli_calc.png';
import client_directory from '../assets/client_directory.png';
import fbc from '../assets/fbc.png';
import mortgage_calc from '../assets/mortgage_calc.png';
import note_taker from '../assets/note_taker.png';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const Projects = () => {
	return (
		<div className="container">
			<h1 className="display-5 text-white fw-bold lh-1 mb-3">Projects</h1>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
				<Card
          img={fbc}
          imgClass={false}
          title="Construction Work Orders"
          description={lorem}
					// description="Internal software for construction companies to track work orders. Powered by React and Bootstrap."
				/>
				<Card
          img={basiclopedia}
          imgClass={false}
          title="Dictionary"
          description={lorem}
					// description="React Typescript project populated with Free Dictionary API data queried based on user input."
				/>
				<Card
          img={cli_calc}
          imgClass={false}
          title="CLI Calculator"
          description={lorem}
					// description="CLI calculator built with readlineSync in Typescript."
				/>
				<Card
          img={note_taker}
          imgClass={false}
          title="Note Taker"
          description={lorem}
					// description="A CRUD app that can be used to write, save, and delete notes. This app uses a NodeJS/Express backend and save and retrieve note data."
				/>
				<Card
          img={client_directory}
          imgClass={false}
          title="Client Directory"
          description={lorem}
				/>
        <Card
          img={mortgage_calc}
          imgClass={true}
          title="Mortgage Calculator"
          description={lorem}
				/>
			</div>
		</div>
	);
}

export default Projects;
