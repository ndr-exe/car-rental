import { poppins } from '@/app/fonts';
import Checked from '@mui/icons-material/CheckCircleOutlineRounded';
import NextArrow from '@mui/icons-material/NavigateNextSharp';
import HeaderBackground from '@/public/Header/header-bg.png';
import MainCarImage from '@/public/Header/main-car.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <header className="px-6 h-[96svh] flex items-center relative">
        <div className="xs:max-w-[500px] mt-12 mx-auto med:mx-0 med:mr-auto">
          <div className="relative z-20">
            <h4 className="text-[1.4rem] font-bold text-center med:text-start ">
              Plan your trip now
            </h4>
            <h1
              className={`${poppins.className} text-[3.2rem] font-bold leading-[1.2] mt-3 mb-6 text-center med:text-start`}
            >
              Save <span className="text-primary">big </span> with our car rental
            </h1>
            <p className="text-secondary text-center leading-[1.6] mb-10 med:text-start">
              Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up
              options and much more.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 w-fit mx-auto xs:flex-row med:w-full med:justify-start ">
            <a
              href="/"
              className="px-20 py-5 font-bold button-primary flex items-center gap-2 border-2 border-primary xs:px-8 xs:py-5 "
            >
              Book Ride <Checked />
            </a>
            <a
              href="/"
              className="px-8 py-5 font-bold bg-blackish text-white  
          flex items-center gap-1.5 border-2 border-blackish rounded-[3px] hover:bg-transparent hover:text-blackish transition-colors
          self-stretch xs:px-8 xs:py-5 "
            >
              Learn More <NextArrow />
            </a>
          </div>
        </div>
        <Image
          src={MainCarImage}
          alt="red car"
          width={922}
          height={525}
          className="hidden med:block w-[65%] max-w-[832px] h-auto absolute right-0 bottom-[calc(50%-20px)] translate-y-1/2"
        />
      </header>
      <div className="w-[680px] h-[870px] absolute top-0 right-0 -z-20 hidden med:block bg-header-bg"></div>
    </div>
  );
};

export default Header;
