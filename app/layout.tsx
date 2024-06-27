import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation/Navigation';

const rubik = Rubik({ subsets: ['latin'], style: 'normal', weight: ['400', '500', '600'] });

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
      <body className={rubik.className}>
        <div className="max-w-screen-xl mx-auto">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
