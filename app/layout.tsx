import type { Metadata } from 'next';
import { rubik } from '@/app/fonts';
import './globals.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Save big with our car rental',
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
