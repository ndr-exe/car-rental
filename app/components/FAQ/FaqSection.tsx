import { poppins } from '@/app/fonts';
import Faqs from './Faqs';

const FaqSection = () => {
  return (
    <div className="py-24 FaqSectionBg ">
      <section className="container px-6">
        <div className={`${poppins.className} text-center mb-16 max-w-[50rem] mx-auto `}>
          <h5 className="text-[1.38rem] font-bold ">FAQ</h5>
          <h2 className="text-[2.63rem] font-bold leading-normal mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary leading-normal">
            Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers
            to Common Concerns and Inquiries.
          </p>
        </div>
        <Faqs />
      </section>
    </div>
  );
};

export default FaqSection;
