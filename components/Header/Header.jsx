'use client';
import styles from './Header.module.scss';
import Image from 'next/image';
import User from '../../public/icons/user.svg';
import Cart from '../../public/icons/cart.svg';
import Logo from '../../public/icons/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { Navigation } from '@/components/Navigation/Navigation';
import { Burger } from '../Burger/Burger';
import { useState } from 'react';

export const Header = () => {
  const pathname = usePathname();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const arrMenu = [
    {
      name: 'FAQ',
      link: '/questions',
    },
    {
      name: 'ВАШ ЗАКАЗ',
      link: '/order',
    },
    {
      name: 'КАТАЛОГ',
      link: '/catalog',
    },
  ];

  return (
    <header
      className={`${styles.header} ${isBurgerMenuOpen ? styles.opened : ''}`}>
      <ul className={styles.header__menu}>
        {arrMenu.map((el, i) => (
          <li key={i} className={`${styles.link} ${styles.header__el_of}`}>
            <Link
              href={el.link}
              className={` ${
                pathname === el.link ? styles.header__link_active : ''
              }`}>
              {el.name}
            </Link>
          </li>
        ))}

        <Link href="/">
          <Image
            className={styles.header__logo}
            src={Logo}
            width="104px"
            height="100px"
            alt="Logo icon"
          />
        </Link>
      </ul>

      <ul className={styles.header__menu}>
        <li className={styles.link}>
          <Link
            href="/profile"
            className={` ${
              pathname === '/profile' ? styles.header__icon_active : ''
            }`}>
            <Image
              className={styles.header__icon}
              src={User}
              width="24px"
              height="auto"
              alt="User icon"
              priority={true}
            />
          </Link>
        </li>
        <li className={styles.link}>
          <Link
            href="/cart"
            className={` ${
              pathname === '/cart' ? styles.header__icon_active : ''
            }`}>
            <Image
              className={styles.header__icon}
              src={Cart}
              width="24px"
              height="auto"
              alt="Cart icon"
              priority={true}
            />
          </Link>
        </li>

        <Burger
          isBurgerMenuOpen={isBurgerMenuOpen}
          handleBurgerClick={handleBurgerClick}
        />
        <span className={styles.blur} />

        <nav className={styles.menu}>
          {arrMenu.map((el, i) => (
            <li className={styles.el} key={i}>
              <Link
                href={el.link}
                className={` ${
                  pathname === el.link ? styles.header__link_active : ''
                }`}>
                {el.name}
              </Link>
            </li>
          ))}

          <li>USD</li>
          <li>РУС</li>
        </nav>

        <li className={`${styles.header__el_of} ${styles.link}`}>USD</li>
        <li className={`${styles.header__el_of} ${styles.link}`}>РУС</li>
      </ul>
    </header>
  );
};
