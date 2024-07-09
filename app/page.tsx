import Header from './components/Header/Header';
import BookingFormWrapper from './components/BookingForm/BookingFormWrapper';
import StepsSection from './components/Steps/StepsSection';
import ShowcaseSection from './components/Showcase/ShowcaseSection';
import FeaturesSection from './components/Features/FeaturesSection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import FaqSection from './components/FAQ/FaqSection';

export default function Home() {
  return (
    <main className="">
      <Header />
      <BookingFormWrapper />
      <StepsSection />
      <ShowcaseSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
