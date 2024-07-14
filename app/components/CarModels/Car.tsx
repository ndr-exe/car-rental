import Image from 'next/image';
import { poppins } from '@/app/fonts';
import CarIcon from '@mui/icons-material/TimeToLeave';
import GasStationIcon from '@mui/icons-material/LocalGasStation';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CalendarIcon from '@mui/icons-material/CalendarTodayRounded';
import Rating from './Rating';

const Car = ({ car }: { car: CarDetails }) => {
  return (
    <li className="border border-secondary-light rounded-md overflow-hidden max-w-[22rem]">
      <div>
        <Image src={car.image} alt={car.fullTitle} className="bg-[#f6f6f6]" />
      </div>
      <div className={`${poppins.className} px-6 py-5`}>
        <div className={` flex justify-between items-center mb-9`}>
          <div className="flex flex-col gap-0.5">
            <p className={` text-2xl font-bold`}>{`${car.shortTitle || car.fullTitle}`}</p>
            <Rating rating={car.rating} />
          </div>

          <p>
            <span className="text-[1.75rem] font-bold block">${car.rent}</span>
            <span>per day</span>
          </p>
        </div>
        <ul className="mb-12 grid gap-2 tracking-wide">
          <li className="text-[#777]">
            <CalendarIcon className="text-[#ff4c30ab]" /> year:&nbsp;
            <span className="font-semibold">{car.year}</span>
          </li>
          <li className="text-[#777]">
            <CarIcon className="text-[#ff4c30ab]" /> transmission:&nbsp;
            <span className="font-semibold">{car.transmission}</span>
          </li>
          <li className="text-[#777]">
            <GasStationIcon className="text-[#ff4c30ab]" /> fuel:&nbsp;
            <span className="font-semibold">{car.fuel}</span>
          </li>
          <li className="text-[#777]">
            <AcUnitIcon className="text-[#ff4c30ab]" /> A/C:&nbsp;
            {car.ac ? (
              <span className="font-semibold">Yes</span>
            ) : (
              <span className="font-semibold">No</span>
            )}
          </li>
        </ul>
        <button className="button-primary font-bold py-[1.13rem] text-lg w-4/5 mx-auto block">
          Book Ride
        </button>
      </div>
    </li>
  );
};

export default Car;
