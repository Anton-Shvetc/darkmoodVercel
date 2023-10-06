'use client';
import styles from './Header.module.scss';
import Image from 'next/image';
import User from '../../public/icons/user.svg';
import Cart from '../../public/icons/cart.svg';
import Logo from '../../public/icons/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Burger from '../Burger/Burger';

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <ul>
        <li className={styles.header__el_of}>
          <Link
            href="/questions"
            className={` ${
              pathname === '/questions' ? styles.header__link_active : ''
            }`}>
            FAQ
          </Link>
        </li>
        <li className={styles.header__el_of}>
          <Link
            href="/order"
            className={` ${
              pathname === '/order' ? styles.header__link_active : ''
            }`}>
            ВАШ ЗАКАЗ
          </Link>
        </li>
        <li className={styles.header__el_of}>
          <Link
            href="/catalog"
            className={` ${
              pathname === '/catalog' ? styles.header__link_active : ''
            }`}>
            КАТАЛОГ
          </Link>
        </li>
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

      <ul>
        <li>
          <Link
            href="/profile"
            className={` ${
              pathname === '/profile' ? styles.header__icon_active : ''
            }`}>
            <Image
              className={styles.header__icon}
              src={User}
              width="24px"
              height="24px"
              alt="User icon"
            />
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className={` ${
              pathname === '/cart' ? styles.header__icon_active : ''
            }`}>
            <Image
              className={styles.header__icon}
              src={Cart}
              width="24px"
              height="24px"
              alt="Cart icon"
            />
          </Link>
        </li>
        <li className={styles.burger}>
          <Burger />
        </li>
        <li className={styles.header__el_of}>USD</li>
        <li className={styles.header__el_of}>РУС</li>
      </ul>
    </header>
  );
};
