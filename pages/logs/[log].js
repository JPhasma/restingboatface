import Layout from '@components/Layout';
import Link from 'next/link';
import { API_URL } from '@config/index';
import Image from 'next/image';

export default function LogEntry({ log }) {
  return (
    <Layout>
      <Link href='/logs'>Return to Logs</Link>
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
      <Link href='/logs'>Go Back</Link>
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

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/logs`);
//   const logs = await res.json();

//   const paths = logs.map((log) => ({
//     params: { log: log.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { log } }) {
//   const res = await fetch(`${API_URL}/logs?slug=${log}`);
//   const logs = await res.json();

//   return {
//     props: {
//       log: logs[0],
//     },
//     revalidate: 1,
//   };
// }
