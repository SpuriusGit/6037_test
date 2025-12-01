import './globals.css';

import { Kaisei_Tokumin, Poppins } from 'next/font/google';

const kaisei = Kaisei_Tokumin({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-kaisei',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Booking App',
  description: 'Test task',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kaisei.variable} ${poppins.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  );
}
