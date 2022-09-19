import Image from 'next/image';
import Layout from '@components/Layout';
import { API_URL } from '@config/index';
import styles from '@styles/Layout.module.css';
import Link from 'next/link';

import LogListElement from '@components/LogsListElement';

export default function Home({ events }) {
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
        <div>
          {events.length === 0 && <h1>No Logs to be seen...</h1>}
          {events.map((log) => (
            <LogListElement key={log.id} log={log} />
          ))}
          {events.length > 0 && (
            <Link href='/logs'>
              <a className='btn'>More Logs</a>
            </Link>
          )}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  // console.log(events); //LOGS ON SERVER, NOT IN BROWSER FOR getServerSideProps
  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
