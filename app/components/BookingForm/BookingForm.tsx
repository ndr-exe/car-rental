import { poppins } from '@/app/fonts';
import { rubik } from '@/app/fonts';
import CarIcon from '@mui/icons-material/TimeToLeave';
import LocationTag from '@mui/icons-material/Room';
import DateFirst from '@mui/icons-material/TodayRounded';
import DateSecond from '@mui/icons-material/EventRounded';

const BookingForm = () => {
  return (
    <section className={`${poppins.className}  px-6  mx-auto `}>
      <div className="bg-booking-form-bg bg-cover bg-center bg-white px-6 pt-10 pb-12 rounded-md shadow-lg flex flex-col xs:pl-12 xs:pr-11">
        <h2 className="text-2xl font-bold mb-7">Book a car</h2>
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label htmlFor="type" className="font-semibold flex items-center gap-1">
              <CarIcon className="text-3xl" />
              <span>
                Select Your Car Type <span className="text-primary text-lg">*</span>
              </span>
            </label>
            <select
              name="type"
              id="type"
              className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
            >
              <option>Select your car Type</option>
              <option>Audi A1 S-Line</option>
              <option>VW Golf 6</option>
              <option>Toyota Camry</option>
              <option>BMW 320 ModernLine</option>
              <option>Mercedes-Benz GLK</option>
              <option>VW Passat CC</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-semibold flex items-center gap-1">
              <LocationTag className="text-3xl " />
              <span>
                Pick-up <span className="text-primary text-lg">*</span>
              </span>
            </label>
            <select
              name=""
              id=""
              className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
            >
              <option value="">Select pick up location</option>
              <option value="">Tbilisi</option>
              <option value="">Rustavi</option>
              <option value="">Kutaisi</option>
              <option value="">Batumi</option>
              <option value="">Zugdidi</option>
              <option value="">Sokhumi</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-semibold flex items-center gap-1">
              <LocationTag className="text-3xl" />
              <span>
                Drop-off <span className="text-primary text-lg">*</span>
              </span>
            </label>
            <select
              name=""
              id=""
              className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
            >
              <option value="">Select drop off location</option>
              <option value="">Tbilisi</option>
              <option value="">Rustavi</option>
              <option value="">Kutaisi</option>
              <option value="">Batumi</option>
              <option value="">Zugdidi</option>
              <option value="">Sokhumi</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-semibold flex items-center gap-1">
              <DateFirst className="text-2xl" />
              <span>
                Pick-up <span className="text-primary text-lg">*</span>
              </span>
            </label>
            <input
              type="date"
              name=""
              id=""
              className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-semibold flex items-center gap-1">
              <DateSecond className="text-2xl " />
              <span>
                Drop-of <span className="text-primary text-lg">*</span>
              </span>
            </label>
            <input
              type="date"
              name=""
              id=""
              className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
            />
          </div>
          <button
            className={`${rubik.className} !rounded-none button-primary text-lg font-medium py-[13px]`}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
