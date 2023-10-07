'use client';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import { Burger } from '@/components/Burger/Burger';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navigation = () => {
  const pathname = usePathname();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  return (
    <>
      <Burger handleBurgerClick={handleBurgerClick} />
      {/* <span className={styles.blur} />
      <nav className={styles.menu}>
        <li>
          <Link
            href="/questions"
            className={` ${
              pathname === '/questions' ? styles.header__link_active : ''
            }`}>
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="/order"
            className={` ${
              pathname === '/order' ? styles.header__link_active : ''
            }`}>
            ВАШ ЗАКАЗ
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            className={` ${
              pathname === '/catalog' ? styles.header__link_active : ''
            }`}>
            КАТАЛОГ
          </Link>
        </li>
      </nav>

      <li className={styles.header__el_of}>USD</li>
      <li className={styles.header__el_of}>РУС</li> */}
    </>
  );
};
