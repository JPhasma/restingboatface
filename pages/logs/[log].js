import Layout from '@components/Layout';
import Link from 'next/link';
import { API_URL } from '@config/index';
import Image from 'next/image';

export default function LogEntry({ log }) {
  return (
    <Layout>
      <Link href='/logs'>
        <a className='btn'>Return to Logs</a>
      </Link>
      {log.banner && (
        <div>
          <Image src={log.banner.url} width={960} height={600} alt={log.name} />
        </div>
      )}
      <h1>{log.title}</h1>
      <h5>{new Date(log.date).toLocaleDateString('en-UK')}</h5>
      <h3>Entry:</h3>
      <p>{log.ahoy}</p>
      <Link href='/logs'>
        <a className='btn'> Go Back</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/logs`);
  const logs = await res.json();

  const paths = logs.map((log) => ({
    params: { log: log.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { log } }) {
  const res = await fetch(`${API_URL}/logs?slug=${log}`);
  const events = await res.json();

  return {
    props: {
      log: events[0],
    },
    revalidate: 1,
  };
}
