import type { Metadata } from 'next';
import '@fontsource/poppins';
import './globals.css';
import { Navbar, Footer } from '../components/elements';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: 'Jadoo',
  description: 'Travel the world with Jadoo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
