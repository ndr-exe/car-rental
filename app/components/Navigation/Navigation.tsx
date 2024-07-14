import Image from 'next/image';
import Logo from '@/public/Navigation/logo.png';
import MobileNav from './MobileNav';
import FullNav from './FullNav';
import UserOptions from './UserOptions';
import Link from 'next/link';

const navLinks = [
  {
    linkToDisplay: 'Home',
    linkTo: '/',
  },
  {
    linkToDisplay: 'About',
    linkTo: '/about',
  },
  {
    linkToDisplay: 'Vehichle Models',
    linkTo: '/cars',
  },
  {
    linkToDisplay: 'Testimonials',
    linkTo: '/testimonials',
  },
  {
    linkToDisplay: 'Our Team',
    linkTo: '/team',
  },
  {
    linkToDisplay: 'Contact',
    linkTo: '/contact',
  },
];

const Navigation = () => {
  return (
    <div className="flex justify-between items-center w-full px-5 py-7 absolute z-50 top-0  max-w-[calc(1280px+50px)] left-1/2 -translate-x-1/2">
      <Link href="/">
        <Image src={Logo} alt="Car Rental Logo" width={145} height={52} priority />
      </Link>
      <MobileNav navLinks={navLinks} />
      <FullNav navLinks={navLinks} />
      <UserOptions />
    </div>
  );
};

export default Navigation;
