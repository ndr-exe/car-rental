'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FullNav = ({ navLinks }: { navLinks: NavLinks }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-5 font-medium">
        {navLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link
                href={link.linkTo}
                className={`hover:text-primary transition-colors ${
                  pathname === link.linkTo && 'text-primary'
                }`}
              >
                {link.linkToDisplay}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FullNav;
