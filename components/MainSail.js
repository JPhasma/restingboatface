import Image from 'next/image';
import styles from '@styles/MainSail.module.css';

function MainSail(mainsail) {
  const sails = mainsail.data;
  console.log('mainsail', sails);
  return (
    <div className={styles.mainsail}>
      <h3>MainSail</h3>

      {sails.map((sail) => {
        return (
          <div key={sail.id}>
            <div>
              <h3>POW {sail.attributes.title}</h3>
              <h4>POW {sail.attributes.subtitle}</h4>
              <h5>POW {sail.attributes.url}</h5>
              <h6>POW {sail.attributes.boost}</h6>
            </div>
            <div>
              <Image
                src={sail.attributes.image.data.attributes.formats.small.url}
                alt={sail.attributes.title}
                width={
                  sail.attributes.image.data.attributes.formats.small.height
                }
                height={
                  sail.attributes.image.data.attributes.formats.small.height
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainSail;
