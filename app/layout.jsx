import { Header } from '@/components/Header/Header';
import './globals.css';
import { Footer } from '@/components/Footer/Footer';
import Head from './head';
import { Roboto_Slab } from 'next/font/google';
import { Ubuntu } from "next/font/google";

export const metadata = {
  title: 'Darkmode',
  description: 'Darkmode shop',
};

export const RobotoSlabFont = Roboto_Slab({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});
export const ubuntuFont = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
