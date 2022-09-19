import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@components/Layout';
import { API_URL } from '@config/index';
import styles from '@styles/Layout.module.css';

import LogListElement from '@components/LogsListElement';

export default function SearchPage({ logs }) {
  const router = useRouter();
  return (
    <Layout title='Search Results'>
      <main className={styles.main}>
        <Link href='/logs'>
          <a className='btn'>Back to Logs</a>
        </Link>
        <h3>Search results for - {router.query.term}</h3>

        <div className={styles.grid}>
          {logs.length === 0 && <h1>No results for your search</h1>}
          {logs.map((log) => (
            <LogListElement key={log.id} log={log} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        {
          title_contains: term,
        },
        {
          ahoy_contains: term,
        },
      ],
    },
  });

  const res = await fetch(`${API_URL}/logs?${query}`);
  const logs = await res.json();
  // console.log(logs); //LOGS ON SERVER, NOT IN BROWSER FOR getServerSideProps
  return {
    props: { logs },
  };
}
