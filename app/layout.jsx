// import { Header } from '@/components/Header/Header';
import './globals.css';
// import { Footer } from '@/components/Footer/Footer';
import Head from './head';
import { Ubuntu } from 'next/font/google';
// import { Layout } from '@/components/Layout/Layout';

export const metadata = {
  title: 'Darkmode',
  description: 'Darkmode shop',
};

export const ubuntuFont = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head />
      <body className={ubuntuFont.variable}>{children}</body>
    </html>
  );
}
