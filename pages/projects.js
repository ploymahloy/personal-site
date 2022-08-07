import Head from 'next/head';
import Image from 'next/image';
import Default from '../layouts/Default';

import styles from '../styles/Projects.module.css';

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Default>
				<div className={styles.wrapper}></div>
			</Default>
		</>
	);
}