import TestimonialsSection from '@/app/components/Testimonials/TestimonialsSection';
import { Metadata } from 'next';
import { pageDescriptions } from '@/lib/pageDescriptions';

export const metadata: Metadata = {
  title: 'Car Rental | Testimonials',
  description: pageDescriptions.testimonials,
};

const TestimonialPage = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-24 bg-[#f8f8f8] ">
      <TestimonialsSection />
    </div>
  );
};

export default TestimonialPage;
