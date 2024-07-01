'use client';
import { rubik } from '@/app/fonts';
import CarIcon from '@mui/icons-material/TimeToLeave';
import LocationTag from '@mui/icons-material/Room';
import DateFirst from '@mui/icons-material/TodayRounded';
import DateSecond from '@mui/icons-material/EventRounded';
import { useEffect, useRef, useState } from 'react';
import FormMessage from './FormMessage';
import BookingModal from './BookingModal';

const cars = {
  audi: 'Audi A1 S-Line',
  vwGolf: 'VW Golf 6',
  toyota: 'Toyota Camry',
  bmw: 'BMW 320 ModernLine',
  mercedes: 'Mercedes-Benz GLK',
  vwPassat: 'VW Passat CC',
};

const cities = ['Tbilisi', 'Rustavi', 'Kutaisi', 'Batumi', 'Zugdidi', 'Sokhumi'];

const BookingForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [fieldsAreMissing, setFieldsAreMissing] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dateRef = useRef<string | null>(null);
  const [formState, setFormState] = useState(() => {
    return {
      car: '',
      pickUpCity: '',
      dropOffCity: '',
      pickUpDate: '',
      dropOffDate: '',
    };
  });

  useEffect(() => {
    const date = new Date().toISOString().slice(0, 10);
    console.log(date);
    dateRef.current = date;
  }, []);

  const handleSubmit = () => {
    showConfirmMessage && setShowConfirmMessage(false);
    if (!formRef.current!.checkValidity()) setFieldsAreMissing(true);
    else {
      setFieldsAreMissing(false);
      setIsModalOpen(true);
    }
  };

  const handleModalFormSuccess = () => {
    setIsModalOpen(false);
    setShowConfirmMessage(true);
  };

  return (
    <>
      {/* Error Message */}
      {fieldsAreMissing && (
        <FormMessage
          closeMessage={() => setFieldsAreMissing(false)}
          message="All fields required!"
          messageType="error"
        />
      )}

      {/* Success Message */}
      {showConfirmMessage && (
        <FormMessage
          closeMessage={() => setShowConfirmMessage(false)}
          message="Check your email to confirm an order."
          messageType="success"
        />
      )}

      <form
        ref={formRef}
        action=""
        className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:pb-3.5 "
      >
        {/* Car type */}
        <div className="flex flex-col gap-3">
          <label htmlFor="car" className="font-semibold flex items-center gap-1">
            <CarIcon className="text-3xl" />
            <span>
              Select Your Car Type <span className="text-primary text-lg">*</span>
            </span>
          </label>
          <select
            value={formState.car}
            onChange={e =>
              setFormState(prev => {
                return { ...prev, car: e.target.value };
              })
            }
            required
            name="car"
            id="car"
            className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
          >
            <option value="">Select your car Type</option>
            <option value={cars.audi}>Audi A1 S-Line</option>
            <option value={cars.vwGolf}>VW Golf 6</option>
            <option value={cars.toyota}>Toyota Camry</option>
            <option value={cars.bmw}>BMW 320 ModernLine</option>
            <option value={cars.mercedes}>Mercedes-Benz GLK</option>
            <option value={cars.vwPassat}>VW Passat CC</option>
          </select>
        </div>

        {/* Pick up Location */}
        <div className="flex flex-col gap-3">
          <label htmlFor="pickUpCity" className="font-semibold flex items-center gap-1">
            <LocationTag className="text-3xl " />
            <span>
              Pick-up <span className="text-primary text-lg">*</span>
            </span>
          </label>
          <select
            value={formState.pickUpCity}
            onChange={e =>
              setFormState(prev => {
                return { ...prev, pickUpCity: e.target.value };
              })
            }
            required
            name="pickUpCity"
            id="pickUpCity"
            className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
          >
            <option value="">Select pick up location</option>
            <option value={cities[0]}>Tbilisi</option>
            <option value={cities[1]}>Rustavi</option>
            <option value={cities[2]}>Kutaisi</option>
            <option value={cities[3]}>Batumi</option>
            <option value={cities[4]}>Zugdidi</option>
            <option value={cities[5]}>Sokhumi</option>
          </select>
        </div>

        {/* Drop off Location */}
        <div className="flex flex-col gap-3">
          <label htmlFor="dropOffCity" className="font-semibold flex items-center gap-1">
            <LocationTag className="text-3xl" />
            <span>
              Drop-off <span className="text-primary text-lg">*</span>
            </span>
          </label>
          <select
            value={formState.dropOffCity}
            onChange={e =>
              setFormState(prev => {
                return { ...prev, dropOffCity: e.target.value };
              })
            }
            required
            name="dropOffCity"
            id="dropOffCity"
            className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
          >
            <option value="">Select pick up location</option>
            <option value={cities[0]}>Tbilisi</option>
            <option value={cities[1]}>Rustavi</option>
            <option value={cities[2]}>Kutaisi</option>
            <option value={cities[3]}>Batumi</option>
            <option value={cities[4]}>Zugdidi</option>
            <option value={cities[5]}>Sokhumi</option>
          </select>
        </div>

        {/* Pick up Date */}
        <div className="flex flex-col gap-3">
          <label htmlFor="pickUpDate" className="font-semibold flex items-center gap-1">
            <DateFirst className="text-2xl" />
            <span>
              Pick-up <span className="text-primary text-lg">*</span>
            </span>
          </label>
          <input
            min={dateRef.current!}
            value={formState.pickUpDate}
            onChange={e =>
              setFormState(prev => {
                return { ...prev, pickUpDate: e.target.value };
              })
            }
            required
            type="date"
            name="pickUpDate"
            id="pickUpDate"
            className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
          />
        </div>

        {/* Drop off Date */}
        <div className="flex flex-col gap-3">
          <label htmlFor="dropOffDate" className="font-semibold flex items-center gap-1">
            <DateSecond className="text-2xl " />
            <span>
              Drop-of <span className="text-primary text-lg">*</span>
            </span>
          </label>
          <input
            value={formState.dropOffDate}
            onChange={e =>
              setFormState(prev => {
                return { ...prev, dropOffDate: e.target.value };
              })
            }
            required
            min={formState.pickUpDate}
            type="date"
            name="dropOffDate"
            id="dropOffDate"
            className="px-3.5 py-3 border border-[#ccd7e6] rounded-[3px] text-[15px] text-formInput font-normal outline-none"
          />
        </div>

        <button
          className={`${rubik.className} !rounded-none button-primary text-lg font-medium py-[13px] sm:self-end `}
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Search
        </button>
      </form>

      {/* Reservation Modal */}
      {isModalOpen && (
        <BookingModal
          isModalOpen={isModalOpen}
          handleModalClose={() => setIsModalOpen(false)}
          handleModalFormSuccess={handleModalFormSuccess}
          reservationDetails={formState as ReservationDetails}
        />
      )}
    </>
  );
};

export default BookingForm;
