import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

import styles from '@styles/Layout.module.css';

function Layout({ title, robots, keywords, description, children }) {
  const router = useRouter();
  // console.log(router);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='robots' content={robots} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
          integrity='sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>

      <Header />

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;

Layout.defaultProps = {
  title: 'Resting Boat Face: Home',
  description: 'A personal log of learning to sail in 2022+',
  keywords: 'sailing, rya, learning',
  robots: 'NOINDEX, NOFOLLOW',
};
