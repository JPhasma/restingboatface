import styles from '@styles/AhoyAhoy.module.scss';

function AhoyAhoy() {
  return (
    <div className={styles.ahoyahoy}>
      <h1 className={styles.title}>
        Willkommen, Bienvenue, Welcome...
        <br />
        to Resting Boat Face
      </h1>
      <h3>
        <em>Ahoy, Ahoy!</em>
      </h3>
      <div className={styles.grid}>
        <p>
          A personal log of learning to sail in 2022+ and buying our first boat
          and the adventures we had and times and places we sailed.
        </p>
        <p>We begin in our adopted home country of Cymru (Wales)</p>
        <p>
          Follow me on instagram -
          <a href={'https://www.instagram.com/restingboatface/'}>
            @RestingBoatFace
          </a>
        </p>
      </div>
    </div>
  );
}

export default AhoyAhoy;
