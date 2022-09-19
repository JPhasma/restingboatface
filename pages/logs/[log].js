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
      {log.image && (
        <div>
          <Image
            src={log.image.formats.medium.url}
            width={960}
            height={600}
            alt={log.name}
          />
        </div>
      )}
      <h1>Log Entry: {log.name}</h1>
      <h5>{new Date(log.date).toLocaleDateString('en-UK')}</h5>
      <Link href='/logs'>
        <a className='btn'> Go Back</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
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
  const res = await fetch(`${API_URL}/events?slug=${log}`);
  const events = await res.json();

  return {
    props: {
      log: events[0],
    },
    revalidate: 1,
  };
}
