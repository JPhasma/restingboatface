import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/LogListElement.module.scss';

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
          width={340}
          height={200}
          sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
          alt={log.name}
        />
      </div>

      <h4>{log.attributes.title}</h4>
      <h5>
        {new Date(log.attributes.date).toLocaleDateString('en-UK')}
        {/* at{' '}
        {log.time} */}
      </h5>
      <p>{log.attributes.ahoy}</p>
      {/* <Link href={`/logs/${log.attributes.slug}` className='btn'}>
      More Info
      </Link> */}
    </div>
  );
}

export default LogListElement;
