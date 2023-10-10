'use client';
import styles from './BurgerMenu.module.scss';
import Link from 'next/link';
import { Burger } from '@/components/Burger/Burger';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const BurgerMenu = ({ arrMenu }) => {
  const pathname = usePathname();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <>
      <Burger
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleBurgerClick={handleBurgerClick}
      />
      <span
        className={`${styles.blur} ${
          isBurgerMenuOpen ? styles.blur_opened : ''
        }`}
      />
      <ul
        className={`${styles.menu} ${
          isBurgerMenuOpen ? styles.menu_opened : ''
        }`}>
        {arrMenu.map((el, i) => (
          <li className={styles.menu__el} key={i}>
            <Link
              href={el.link}
              className={` ${
                pathname === el.link ? styles.menu__el_active : ''
              }`}>
              {el.name}
            </Link>
          </li>
        ))}

        <li className={styles.menu__el}>USD</li>
        <li className={styles.menu__el}>РУС</li>
      </ul>
    </>
  );
};
