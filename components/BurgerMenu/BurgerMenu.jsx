'use client';
import styles from './BurgerMenu.module.scss';
import Link from 'next/link';
import { Burger } from '@/components/Burger/Burger';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export const BurgerMenu = ({ arrMenu }) => {
  const pathname = usePathname();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isBurgerMenuOpen]);

  return (
    <>
      <Burger
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleBurgerClick={handleBurgerClick}
      />
      <span
        onClick={handleBurgerClick}
        className={`${styles.blur} ${
          isBurgerMenuOpen ? styles.blur_opened : ""
        }`}
      />
      <ul
        className={`${styles.menu} ${
          isBurgerMenuOpen ? styles.menu_opened : ""
        }`}
      >
        {arrMenu.map((el, i) => (
          <li className={styles.menu__el} key={i}>
            <Link
              href={el.link}
              className={` ${
                pathname === el.link ? styles.menu__el_active : ""
              }`}
            >
              {el.name}
            </Link>
          </li>
        ))}

        {/* <li className={styles.menu__el}>RUB</li>
        <li className={styles.menu__el}>РУС</li> */}
      </ul>
    </>
  );
};
