"use client";
import "./globals.css";
import Head from "./head";
import { Ubuntu } from "next/font/google";

import { SnackbarProvider } from "notistack";

// export const metadata = {
//   title: "Darkmood",
//   description: "Darkmood shop",
// };

export const ubuntuFont = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head />
      <body className={ubuntuFont.variable}>
        <SnackbarProvider
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {children}
        </SnackbarProvider>
      </body>
    </html>
  );
}
