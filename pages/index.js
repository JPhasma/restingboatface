import Image from 'next/image';
import Layout from '@components/Layout';

import styles from '@styles/Layout.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Willkommen, Bienvenue, Welcome...
          <br />
          to Resting Boat Face
        </h1>
        <h3>
          <em>Ahoy, Ahoy!</em>
        </h3>

        <div className={styles.grid}>
          <p>
            A personal log of learning to sail in 2022+ and buying our first
            boat and the adventures we had and times and places we sailed
          </p>
          <p>
            Follow me on instagram -
            <a href={'https://www.instagram.com/restingboatface/'}>
              @RestingBoatFace
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
