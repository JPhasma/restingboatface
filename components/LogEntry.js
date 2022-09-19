import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/LogEntry.module.css';

function LogEntry({ log }) {
  return (
    <div className={styles.log_entry}>
      <h3>Log Entry </h3>
      <h4>{log.name}</h4>
      <span>
        {log.date} at {log.time}
      </span>
      <Link href={`/logs/${log.slug}`}>
        <a className='btn'>More Info</a>
      </Link>
    </div>
  );
}

export default LogEntry;
