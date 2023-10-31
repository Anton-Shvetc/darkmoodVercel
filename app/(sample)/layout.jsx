'use client';
import '../globals.css';
import React from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';

export default function SampleLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className={pathname === '/' ? 'theme' : ''}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
