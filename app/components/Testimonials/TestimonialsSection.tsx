import { poppins } from '@/app/fonts';
import Testimonials from './Testimonials';

const TestimonialsSection = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="container py-28">
        <section className="w-full px-6">
          <div className="max-w-[44rem] mx-auto text-center mb-12">
            <h4 className="text-[1.38rem] font-medium">Reviewed by People</h4>
            <h2 className={`${poppins.className} font-bold text-[2.65rem] mb-3.5`}>
              Client&apos;s Testimonials
            </h2>
            <p className="text-secondary leading-snug ">
              Discover the positive impact we&apos;ve made on the our clients by reading through
              their testimonials. Our clients have experienced our service and results, and
              they&apos;re eager to share their positive experiences with you.
            </p>
          </div>
          <Testimonials />
        </section>
      </div>
    </div>
  );
};

export default TestimonialsSection;
