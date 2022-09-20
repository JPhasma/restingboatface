import Image from 'next/image';
import Layout from '@components/Layout';
import { API_URL } from '@config/index';
import styles from '@styles/Layout.module.css';

import LogListElement from '@components/LogsListElement';

export default function Logs({ logs }) {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Logs</h1>

        <div className={styles.grid}>
          {logs.length === 0 && <h1>No Logs to be seen...</h1>}
          {logs.map((log) => (
            <LogListElement key={log.id} log={log} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/logs?populate=*`);
  const logs = await res.json();

  return {
    props: { logs: logs.data },
    revalidate: 1,
  };
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/logs?populate=*`);
//   const logs = await res.json();

//   return {
//     props: {
//       logs: logs.data,
//     },
//   };
// }
