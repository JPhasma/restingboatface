import Head from 'next/head';

import styles from '../styles/Layout.module.css';

function Layout({ title, robots, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='robots' content={robots} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>{children}</div>
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
