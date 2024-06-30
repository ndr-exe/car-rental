import { poppins } from '@/app/fonts';
import BookingForm from './BookingForm';

const BookingFormWrapper = () => {
  return (
    <div className="header-transitional-bg ">
      <section className={`${poppins.className}  px-6  mx-auto container relative z-10 `}>
        <div className="bg-booking-form-bg bg-cover bg-center bg-white px-6 pt-10 pb-12 rounded-md shadow-lg flex flex-col xs:pl-14 xs:pr-11 xs:pb-12 xs:pt-10">
          <h2 className="text-2xl font-bold mb-7">Book a car</h2>
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default BookingFormWrapper;
