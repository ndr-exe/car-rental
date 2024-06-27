import type { Metadata } from 'next';
import { rubik } from '@/app/fonts';
import './globals.css';
import Navigation from './components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Car Rental Website',
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
        <div className="max-w-screen-xl mx-auto">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
