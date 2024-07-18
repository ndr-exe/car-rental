import type { Metadata } from 'next';
import { rubik } from '@/app/fonts';
import './globals.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Car Rental',
  description:
    'Discover the best car rental deals with our wide range of vehicles. Enjoy easy booking, competitive prices, and exceptional customer service. Rent a car today for your next adventure or business trip!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
