import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/photos'>
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
