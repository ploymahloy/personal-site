import styles from '../styles/ProjectCard.module.scss';

export default function Project(props) {
	const { appSummary, appTitle, linkDemo, linkSource, techStack } = props;

	return (
		<div className={styles.row}>
			<div className={styles.project_summary_wrapper}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend_project}>{appTitle}</legend>
					<p className={styles.project_summary}>
						{appSummary}
						<br />
						<br />
						The technologies used for this project are:{' '}
						<p className={styles.project_summary_bold}>{techStack}</p>
					</p>
					<div className={styles.button_wrapper}>
						<a
							className={styles.button}
							href={linkDemo}
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>
						<a
							className={styles.button}
							href={linkSource}
							target="_blank"
							rel="noreferrer"
						>
							Source
						</a>
					</div>
				</fieldset>
			</div>
		</div>
	);
}
