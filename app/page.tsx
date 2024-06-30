import Image from 'next/image';
import Header from './components/Header/Header';
import BookingFormWrapper from './components/BookingForm/BookingFormWrapper';

export default function Home() {
  return (
    <main className="">
      <Header />
      <BookingFormWrapper />
      <section className="h-96 w-full"></section>
    </main>
  );
}
