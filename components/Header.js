import Link from 'next/link';

function Header() {
  return (
    <div>
      <Link href='/'>
        <a>
          <h1>Resting Boat Face</h1>
        </a>
      </Link>
    </div>
  );
}

export default Header;
