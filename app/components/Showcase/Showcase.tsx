'use client';
import { cars } from '@/lib/cars';
import SelectCarButton from './SelectCarButton';
import { useState } from 'react';
import Image from 'next/image';
import CarDetailsTable from './CarDetailsTable';

const Showcase = () => {
  const [selectedCar, setSelectedCar] = useState(() => cars[0]);
  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-col gap-2">
        {cars.map((car, idx) => {
          return (
            <li key={car.id} className="">
              <SelectCarButton
                carModel={car.fullTitle}
                isActive={selectedCar.fullTitle === car.fullTitle}
                setCar={() => setSelectedCar(cars[idx])}
              />
            </li>
          );
        })}
      </ul>
      <div className="w-full aspect-[500/300] relative mt-14">
        <Image
          src={selectedCar.showcaseImg}
          alt={selectedCar.fullTitle}
          fill
          className="w-full h-auto "
        />
      </div>
      <CarDetailsTable carDetails={selectedCar} />
    </div>
  );
};

export default Showcase;
