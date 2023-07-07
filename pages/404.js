import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@components/Layout';
import Link from 'next/link';
import styles from '@styles/404.module.scss';

function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h3>Avast Matey!</h3>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h2>Page Not Found</h2>
        <Link href='/'>Head back to safe home harbour</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
