'use client';
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';
import { Preloader } from '@/components/Preloader/Preloader';
import styles from './layout.module.scss';

export default function SampleLayout({ children }) {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const referrer = document.referrer;
    const url = window.location.hostname;

    if (!referrer || new URL(referrer).hostname !== url) {
      setShowPreloader(true);
    } else {
      setShowPreloader(false);
    }
  }, []);

  useEffect(() => {
    if (showPreloader) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  return (
    <div className={pathname === '/' ? 'theme' : ''}>
      <div className={styles.wrapper}>
        {showPreloader && <Preloader />}
        <div className={showPreloader ? '' : styles.anim}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}