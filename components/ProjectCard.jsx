import styles from '../styles/ProjectCard.module.scss';

export default function Project(props) {
  const { appSummary, appTitle, linkDemo, linkSource, techStack} = props;

	return (
		<div className={styles.row}>
			<div className={styles.project_summary_wrapper}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend_project}>{appTitle}</legend>
					<p className={styles.project_summary}>
						{appSummary}{' '}
						<p className={styles.project_summary_bold}>{techStack}</p>
					</p>
					<div className={styles.button_wrapper}>
						<button className={styles.button}>
							<a href={linkDemo} target="_blank">
								Demo
							</a>
						</button>
						<button className={styles.button}>
							<a href={linkSource} target="_blank">
								Source
							</a>
						</button>
					</div>
				</fieldset>
			</div>
		</div>
	);
}
