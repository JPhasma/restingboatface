import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/LogListElement.module.css';

function LogListElement({ log }) {
  return (
    <div className={styles.log_list_element}>
      <div className={styles.img}>IMAGE</div>

      <h4>{log.attributes.title}</h4>
      <span>
        {new Date(log.attributes.date).toLocaleDateString('en-UK')} at{' '}
        {log.time}
      </span>
      <Link href={`/logs/${log.attributes.slug}`}>
        <a className='btn'>More Info</a>
      </Link>
    </div>
  );
}

export default LogListElement;
