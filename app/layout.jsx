import { Header } from "@/components/Header/Header";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import Head from "./head";



export const metadata = {
  title: "Darkmode",
  description: "Darkmode shop",
};

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
