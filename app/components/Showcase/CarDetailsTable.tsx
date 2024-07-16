import { poppins } from '@/app/fonts';
import ScrollToBookingFormButton from '../Header/ScrollToBookingFormButton';

const CarDetailsTable = ({ carDetails }: { carDetails: CarDetails }) => {
  return (
    <div
      className={`${poppins.className} w-[15.5rem] text-sm mx-auto flex flex-col med:basis-[31%] med:self-end med:mx-0 lg:basis-1/3 lg:self-start`}
    >
      <p className="bg-primary flex items-center h-max py-3.5 px-5 gap-3.5">
        <span className="text-white text-[28px] font-bold">${carDetails.rent}</span>
        <span className="text-white text-[18px]"> / rent per day</span>
      </p>

      <table className="table-fixed border-collapse w-full text-center">
        <tbody className="">
          <tr className="border-2 border-t-0 border-secondary">
            <th className="border-r-2 border-secondary py-2.5 px-1.5 font-normal">Model</th>
            <td className="py-2.5 px-1.5">{carDetails.model}</td>
          </tr>
          <tr className="border-2 border-secondary">
            <th className="border-r-2 border-secondary py-2.5 px-1.5 font-normal">Mark</th>
            <td className="py-2.5 px-1.5">{carDetails.mark}</td>
          </tr>
          <tr className="border-2 border-secondary">
            <th className="border-r-2 border-secondary py-2.5 px-1.5 font-normal">Year</th>
            <td className="py-2.5 px-1.5">{carDetails.year}</td>
          </tr>
          <tr className="border-2 border-secondary">
            <th className="border-r-2 border-secondary py-2.5 px-1.5 font-normal">Doors</th>
            <td className="py-2.5 px-1.5">{carDetails.doors}</td>
          </tr>
          <tr className="border-2 border-secondary">
            <th className="border-r-2 border-secondary py-2.5 px-1.5 font-normal">AC</th>
            <td className="py-2.5 px-1.5">{carDetails.ac ? 'Yes' : 'No'}</td>
          </tr>
          <tr className="border-2 border-secondary">
            <th className="border-r-2 border-secondary py-2.5 px-1.5 font-normal">Transmition</th>
            <td className="py-2.5 px-1.5">{carDetails.transmission}</td>
          </tr>
          <tr className="border-2 border-secondary">
            <th className="border-r-2 border-secondary py-2.5 px-1.5 font-normal">Fuel</th>
            <td className="py-2.5 px-1.5">{carDetails.fuel}</td>
          </tr>
        </tbody>
      </table>
      <ScrollToBookingFormButton>
        <span
          className={`${poppins.className} block mt-3.5 text-center bg-primary p-2.5 text-white text-xl font-semibold transition-colors shadow-[6px_6px_0] shadow-secondary-lightest
      hover:bg-primary-darkest`}
        >
          Reserve Now
        </span>
      </ScrollToBookingFormButton>
    </div>
  );
};

export default CarDetailsTable;
