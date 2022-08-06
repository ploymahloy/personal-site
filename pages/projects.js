import Image from 'next/image';
import Default from '../layouts/Default';

import styles from '../styles/Projects.module.css';

export default function Projects() {
	return (
		<Default>
			<span className={styles.left}>
				<Image
					src="/../public/favicon.png"
					alt=""
					height="250"
					width="550"
					objectFit="cover"
        />
        <div>
				<p className={styles.description}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
					corporis corrupti maxime autem aperiam ex nam laboriosam enim
					consequuntur, voluptas quaerat accusamus necessitatibus dolore ab
					similique veritatis, tempora provident fugiat?
          </p>
          <p className={styles.buttons}>
					<button className={styles.link_button}>
						<a href="#" className={styles.link}>
              Demo
						</a>
					</button>
					<button className={styles.link_button}>
						<a href="#" className={styles.link}>
              Code
						</a>
          </button>
          </p>
        </div>
			</span>
		</Default>
	);
}
