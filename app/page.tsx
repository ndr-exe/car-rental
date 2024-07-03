import Header from './components/Header/Header';
import BookingFormWrapper from './components/BookingForm/BookingFormWrapper';
import StepsSection from './components/Steps/StepsSection';
import ShowcaseSection from './components/Showcase/ShowcaseSection';

export default function Home() {
  return (
    <main className="">
      <Header />
      <BookingFormWrapper />
      <StepsSection />
      <ShowcaseSection />
    </main>
  );
}
