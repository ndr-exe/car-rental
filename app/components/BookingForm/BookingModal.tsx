import { poppins } from '@/app/fonts';
import { rubik } from '@/app/fonts';
import Info from '@mui/icons-material/InfoOutlined';
import Modal from '@mui/material/Modal';
import Close from '@mui/icons-material/CloseRounded';
import Clock from '@mui/icons-material/WatchLaterSharp';
import LocationTag from '@mui/icons-material/Room';
import { getShowcaseCarImg } from '@/lib/selectShowcaseCarImg';
import Image from 'next/image';
import PersonalInfoFields from './PersonalInfoFields';

const BookingModal = ({
  isModalOpen,
  handleModalClose,
  handleModalFormSuccess,
  reservationDetails,
}: {
  isModalOpen: boolean;
  handleModalClose: () => void;
  handleModalFormSuccess: () => void;
  reservationDetails: ReservationDetails;
}) => {
  return (
    <div className="">
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <section
            className={`${poppins.className} w-screen h-screen md:h-[90vh] bg-white overflow-scroll max-w-[850px]`}
          >
            <div className="">
              <div className="flex justify-between items-center px-4 py-2.5 bg-primary text-white">
                <h2 className="text-2xl font-bold">COMPLETE RESERVATION</h2>
                <button className="font-bold text-xl flex items-center" onClick={handleModalClose}>
                  <Close className="font-bold" />
                </button>
              </div>
              <div className="px-8 py-5 flex flex-col gap-3.5 bg-primary-light">
                <h3 className="text-primary text-lg font-bold">
                  <Info className="mr-1" />
                  Upon completing this reservation enquiry, you will receive:
                </h3>
                <p className="text-blackish-light font-medium">
                  Your rental voucher to produce on arrival at the rental desk and a toll-free
                  customer support number.
                </p>
              </div>
            </div>
            <div className="p-7 sm:flex">
              <div className="flex flex-col items-center gap-8 w-max mx-auto">
                <h4 className="text-primary text-lg font-bold text-center mb-1">Location & Date</h4>
                <div className="self-stretch flex flex-col gap-0.5">
                  <h5 className="font-bold text-[0.9375rem]">
                    <Clock /> Pick-Up Date & Time
                  </h5>
                  <p className="text-blackish-light text-center">
                    {reservationDetails.pickUpDate}&nbsp;/&nbsp;
                    <input
                      type="time"
                      name=""
                      id=""
                      className="border border-primary px-0.5 rounded-md input:"
                    />
                  </p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-bold text-[0.9375rem]">
                    <Clock /> Drop-Off Date & Time
                  </h5>
                  <p className="text-blackish-light text-center">
                    {reservationDetails.dropOffDate}&nbsp;/&nbsp;
                    <input
                      type="time"
                      name=""
                      id=""
                      className="border border-primary px-0.5 rounded-md input:"
                    />
                  </p>
                </div>
                <div className="self-stretch flex flex-col gap-0.5">
                  <h5 className="font-bold text-[0.9375rem]">
                    <LocationTag />
                    Pick-Up Location
                  </h5>
                  <p className="text-blackish-light text-center">{reservationDetails.pickUpCity}</p>
                </div>
                <div className="self-stretch flex flex-col gap-0.5">
                  <h5 className="font-bold text-[0.9375rem]">
                    <LocationTag />
                    Drop-Off Location
                  </h5>
                  <p className="text-blackish-light text-center">
                    {reservationDetails.dropOffCity}
                  </p>
                </div>
              </div>
              <div className="mt-9 flex flex-col gap-7 sm:w-1/2">
                <h5 className="text-lg font-bold text-center">
                  Car -<span className="text-primary">{reservationDetails.car}</span>
                </h5>
                <div className=" ">
                  <Image
                    src={getShowcaseCarImg(reservationDetails.car)}
                    alt={reservationDetails.car}
                  />
                </div>
              </div>
            </div>
            <div className="px-8 py-8">
              <h3 className="text-primary text-lg font-bold mb-5">PERSONAL INFORMATION</h3>
              <form action="" className="flex flex-col gap-6 sm:inputGrid ">
                <PersonalInfoFields />
                <div className="flex flex-col gap-5 col-span-2">
                  <div className="flex gap-2.5 mt-4">
                    <input type="checkbox" name="notifyMe" id="notifyMe" />
                    <label htmlFor="notifyMe" className="text-[#565454]">
                      Please send me latest news and updates
                    </label>
                  </div>
                  <button
                    className={`${rubik.className} button-primary px-5 py-3.5 text-2xl font-bold w-fit mx-auto mt-2`}
                    onClick={e => {
                      e.preventDefault();
                      handleModalFormSuccess();
                    }}
                  >
                    Reserve Now
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default BookingModal;
