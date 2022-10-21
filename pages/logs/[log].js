import Layout from '@components/Layout';
import Link from 'next/link';
import { API_URL } from '@config/index';
import Image from 'next/image';

export default function LogEntry({ log }) {
  return (
    <Layout>
      <h2>Latest</h2>
      <Link href='/logs'>
        <a className='btn'>Return to Logs</a>
      </Link>
      {log.attributes.banner && (
        <div>
          <Image
            src={log.attributes.banner.data.attributes.url}
            width={960}
            height={600}
            alt={log.name}
          />
        </div>
      )}
      <h1>{log.attributes.title}</h1>
      <h5>{new Date(log.attributes.date).toLocaleDateString('en-UK')}</h5>
      <h3>Entry:</h3>
      <p>{log.attributes.ahoy}</p>
      <Link href='/logs'>
        <a className='btn'> Go Back</a>
      </Link>
    </Layout>
  );
}

export async function getServerSideProps({ params: { log } }) {
  const res = await fetch(
    `${API_URL}/api/logs?populate=*&filters[slug][$eq]=${log}`
  );
  const logs = await res.json();

  return {
    props: {
      log: logs.data[0],
    },
  };
}
