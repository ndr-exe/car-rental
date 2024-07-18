import Car from '@/app/components/CarModels/Car';
import { cars } from '@/lib/cars';
import { pageDescriptions } from '@/lib/pageDescriptions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Rental | Cars',
  description: pageDescriptions.cars,
};

const CarModelsPage = () => {
  return (
    <div className="container pb-40 pt-24 mx-auto md:pt-32 xl:pt-40">
      <ul className="grid gap-y-10 justify-center px-5 md:grid-cols-2 md:justify-items-center md:w-fit md:mx-auto md:gap-x-20 xl:grid-cols-3 xl:gap-y-12">
        {cars.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default CarModelsPage;
