'use client';
import { cars } from '@/lib/cars';
import SelectCarButton from './SelectCarButton';
import { useState } from 'react';
import Image from 'next/image';
import CarDetailsTable from './CarDetailsTable';

const Showcase = () => {
  const [selectedCar, setSelectedCar] = useState(() => cars[0]);
  return (
    <div className="flex flex-col gap-12 med:flex-row  med:flex-wrap med:gap-x-6 med:justify-between lg:flex-nowrap lg:items-start lg:gap-5 xl:gap-20 2xl:gap-24">
      <ul className="flex flex-col gap-2 med:basis-full lg:basis-1/3">
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
      <div className="w-full max-w-[550px] mx-auto aspect-[15/9] relative mt-14  med:basis-[calc(100%-31%-24px)] lg:flex-grow">
        <Image
          src={selectedCar.showcaseImg}
          alt={selectedCar.fullTitle}
          fill
          sizes="550px"
          className="object-contain "
          quality={100}
        />
      </div>
      <CarDetailsTable carDetails={selectedCar} />
    </div>
  );
};

export default Showcase;
