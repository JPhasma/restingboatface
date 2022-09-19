import Link from 'next/link';
import styles from '@styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link href='/'>
        <a>
          <h1>Resting Boat Face</h1>
        </a>
      </Link>
    </div>
  );
}

export default Header;
