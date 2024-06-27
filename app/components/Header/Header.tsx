import { poppins } from '@/app/fonts';
import Checked from '@mui/icons-material/CheckCircleOutlineRounded';
import NextArrow from '@mui/icons-material/NavigateNextSharp';

const Header = () => {
  return (
    <header className="px-6">
      <div className="">
        <h4 className="text-[1.4rem] font-bold text-center ">Plan your trip now</h4>
        <h1
          className={`${poppins.className} text-[3.2rem] font-bold leading-[1.2] mt-3 mb-6 text-center`}
        >
          Save <span className="text-primary">big </span> with our car rental
        </h1>
        <p className="text-secondary text-center leading-[1.6] mb-10">
          Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options
          and much more.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 w-fit mx-auto ">
        <a href="/" className="px-20 py-5 font-bold button-primary flex items-center gap-2">
          Book Ride <Checked />
        </a>
        <a
          href="/"
          className="px-8 py-5 font-bold bg-blackish text-white  
          flex items-center gap-1.5 border-2 border-blackish rounded-[3px] hover:bg-transparent hover:text-blackish transition-colors
          self-stretch "
        >
          Learn More <NextArrow />
        </a>
      </div>
    </header>
  );
};

export default Header;
