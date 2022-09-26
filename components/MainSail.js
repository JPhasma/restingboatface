import Image from 'next/image';
import styles from '@styles/MainSail.module.css';

function MainSail(mainsail) {
  const sails = mainsail.data;
  console.log('mainsail', sails);
  return (
    <div className={styles.mainsail}>
      <h3>MainSail {sails[0].id}</h3>

      {sails.map((sail) => {
        return (
          <div key={sail.id}>
            <h3>POW {sail.attributes.title}</h3>
            <Image
              src={sail.attributes.image.data.attributes.formats.large.url}
              alt={sail.attributes.title}
              width={sail.attributes.image.data.attributes.formats.large.height}
              height={
                sail.attributes.image.data.attributes.formats.large.height
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default MainSail;
