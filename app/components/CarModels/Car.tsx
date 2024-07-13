import Image from 'next/image';
import { poppins } from '@/app/fonts';

const Car = ({ car }: { car: CarDetails }) => {
  return (
    <li className="border border-secondary-light rounded-md overflow-hidden max-w-[22rem]">
      <div>
        <Image src={car.image} alt={car.fullTitle} className="bg-[#f6f6f6]" />
      </div>
      <div className={`${poppins.className} px-6 py-5`}>
        <div className={` flex justify-between items-center`}>
          <div>
            <p className={` text-2xl font-bold`}>{`${car.model}`}</p>
            <p>RATING</p>
          </div>

          <p>
            <span className="text-[1.75rem] font-bold block">${car.rent}</span>
            <span>per day</span>
          </p>
        </div>
        <ul className="mb-9">
          <li>mark: {car.mark}</li>
          <li>year: {car.year}</li>
          <li>transmission: {car.transmission}</li>
          <li>fuel: {car.fuel}</li>
          <li>ac: {car.ac}</li>
        </ul>
        <button className="button-primary font-bold py-[1.13rem] text-lg w-4/5 mx-auto block">
          Book Ride
        </button>
      </div>
    </li>
  );
};

export default Car;
