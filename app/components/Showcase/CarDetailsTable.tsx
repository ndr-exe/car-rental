import { poppins } from '@/app/fonts';
import ReserveNowButton from './ReserveNowButton';

const CarDetailsTable = ({ carDetails }: { carDetails: CarDetails }) => {
  return (
    <div className={`${poppins.className} w-[15.5rem] text-sm mx-auto flex flex-col `}>
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
      <ReserveNowButton />
    </div>
  );
};

export default CarDetailsTable;
