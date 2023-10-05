// Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/portfolio">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
