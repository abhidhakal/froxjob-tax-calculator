import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';

export const metadata = {
  title: 'Froxjob',
  description: 'Tax Calculator',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
