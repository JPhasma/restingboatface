import Image from 'next/image';
import Layout from '@components/Layout';
import { API_URL } from '@config/index';

import styles from '@styles/Layout.module.css';
import Link from 'next/link';
import MainSail from '@components/MainSail';

import LogListElement from '@components/LogsListElement';

export default function Home({ logs, mainsail }) {
  return (
    <Layout>
      {/* {router.pathname === '/' && <MainSail data={mainsail} />} */}
      <MainSail data={mainsail} />
      <main className={styles.main}>
        <h1>
          Willkommen, Bienvenue, Welcome...
          <br />
          to Resting Boat Face
        </h1>
        <h3>
          <em>Ahoy, Ahoy!</em>
        </h3>

        <div>
          <p>
            A personal log of learning to sail in 2022+ and buying our first
            boat and the adventures we had and times and places we sailed.
          </p>
          <p>We begin in our adopted home country of Cymru (Wales)</p>
          <p>
            Follow me on instagram -
            <a href={'https://www.instagram.com/restingboatface/'}>
              @RestingBoatFace
            </a>
          </p>
        </div>
        <div>
          {logs.length === 0 && <h1>No Logs to be seen...</h1>}
          {logs.map((log) => (
            <LogListElement key={log.id} log={log} />
          ))}
          {logs.length > 0 && (
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
  const res = await fetch(`${API_URL}/api/logs?populate=*`);
  const logs = await res.json();

  const mainsailres = await fetch(
    `https://mystrapi-restingboatface.herokuapp.com/api/main-sails?populate=*`
  );
  const mainsail = await mainsailres.json();

  return {
    props: { logs: logs.data, mainsail: mainsail.data },
    revalidate: 1,
  };
}
