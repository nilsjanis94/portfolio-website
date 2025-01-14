import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Providers } from './providers';

const geist = Geist({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Nils Janis Wolters - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={geist.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
