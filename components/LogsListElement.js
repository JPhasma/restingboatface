import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/LogListElement.module.css';

function LogListElement({ log }) {
  return (
    <div className={styles.log_list_element}>
      <div className={styles.img}>
        <Image
          src={
            log.attributes.banner
              ? log.attributes.banner.data.attributes.formats.thumbnail.url
              : '/images/event-default.png'
          }
          width={170}
          height={100}
          alt={log.name}
        />
      </div>

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
