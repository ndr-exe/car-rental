import Image from 'next/image';
import Header from './components/Header/Header';
import BookingForm from './components/BookingForm/BookingForm';

export default function Home() {
  return (
    <main className="">
      <Header />
      <BookingForm />
    </main>
  );
}
