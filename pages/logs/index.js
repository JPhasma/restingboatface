import Image from 'next/image';
import Layout from '@components/Layout';
import { API_URL } from '@config/index';
import styles from '@styles/Layout.module.css';

import LogEntry from '@components/LogEntry';

export default function Home({ events }) {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Logs</h1>

        <div className={styles.grid}>
          {events.length === 0 && <h1>No Logs to be seen...</h1>}
          {events.map((log) => (
            <LogEntry key={log.id} log={log} />
          ))}
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
    props: { events },
    revalidate: 1,
  };
}
