import Image from 'next/image';
import Logo from '@/public/Navigation/logo.png';
import MobileNav from './MobileNav';
import FullNav from '../FullNav';
import UserOptions from './UserOptions';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="flex justify-between items-center px-5 py-7">
      <Link href="/">
        <Image src={Logo} alt="Car Rental Logo" width={145} height={52} />
      </Link>
      <MobileNav />
      <FullNav />
      <UserOptions />
    </div>
  );
};

export default Navigation;
