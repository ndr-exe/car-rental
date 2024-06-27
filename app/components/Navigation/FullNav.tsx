import Link from 'next/link';

const FullNav = () => {
  const navLinks = [
    {
      linkToDisplay: 'Home',
      linkTo: '#',
    },
    {
      linkToDisplay: 'About',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Vehichle Models',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Testimonials',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Our Team',
      linkTo: '#',
    },
    {
      linkToDisplay: 'Contact',
      linkTo: '#',
    },
  ];

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-5 font-medium">
        {navLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link href={link.linkTo} className="hover:text-primary transition-colors">
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
