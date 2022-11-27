import Link from 'next/link';
import Search from './Search';
import styles from '@styles/Header.module.css';
import { IconContext } from 'react-icons';
import {
  MdSailing,
  MdSentimentNeutral,
  MdSearch,
  MdOutlineMenu,
} from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';

function Header() {
  return (
    <div className={styles.header}>
      <IconContext.Provider
        value={{ className: 'react-icons', color: 'deepskyblue', size: '2rem' }}
      >
        <Link href='/'>
          <a>
            <h1>
              <MdSailing title='RestingBoatFace Home' /> Resting Boat Face
            </h1>
          </a>
        </Link>

        <Search />

        <MdSentimentNeutral title='RestingFace' />
        <Link href='https://www.instagram.com/restingboatface'>
          <a>
            <GrInstagram title='Instagram' />
          </a>
        </Link>
        <button>
          <MdOutlineMenu title='Menu' />
        </button>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
