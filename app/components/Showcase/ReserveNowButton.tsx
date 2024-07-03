import Link from 'next/link';
import { poppins } from '@/app/fonts';

const ReserveNowButton = () => {
  return (
    <Link
      href="#form"
      className={`${poppins.className} mt-3.5 text-center bg-primary p-2.5 text-white text-xl font-semibold transition-colors shadow-[6px_6px_0] shadow-secondary-lightest
      hover:bg-primary-darkest`}
    >
      Reserve Now
    </Link>
  );
};

export default ReserveNowButton;
