import Link from 'next/link';
import Search from './Search';
import Navlist from './Navlist';
import Social from '../components/Social';

import styles from '@styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link href='/'>
        <a>
          <span id={styles.home_icon} className='fa-solid fa-sailboat'></span>
          <span id={styles.site_name}>Resting Boat Face</span>
        </a>
      </Link>
      <Search />
      <Social />
      <Navlist />
    </div>
  );
}

export default Header;
