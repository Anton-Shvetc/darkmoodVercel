'use client';
import '../globals.css';
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';
import { Preloader } from '@/components/Preloader/Preloader';
import Loading from '../loading';

export default function SampleLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(true);
  useEffect(() => {
    const referrer = document.referrer
    const url = window.location.hostname
    if (!referrer) {
      setOpen(true)
      setBackground(false)
    } else {
      const referrerUrl = new URL(referrer)
      if (url != referrerUrl.hostname) {
        setOpen(true)
        setBackground(false)
      } else {
        setOpen(false)
        setBackground(false)
      }
    }
  }, [])

  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    }
  }, [open])
  return (
    <div className={pathname === '/' ? 'theme' : ''}>
      {background ?
        <Loading /> :
        open ?
          <Preloader />
          :
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
      }
    </div>
  );
}
