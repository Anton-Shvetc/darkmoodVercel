'use client';
import styles from './Header.module.scss';
import Image from 'next/image';
import User from '../../public/icons/user.svg';
import CartIcon from '../../public/icons/cart.svg';
import Logo from '../../public/icons/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';

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

export const Header = () => {
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  };

  const handleCloseCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCartOpen]);

  return (
    <header className={`${styles.header} `}>
      <ul className={styles.header__menu}>
        {arrMenu.map((el, i) => (
          <li
            key={i}
            className={`${styles.header__link} ${styles.header__el_of}`}>
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
            priority={true}
          />
        </Link>
      </ul>

      <ul className={styles.header__menu}>
        <li className={styles.header__link}>
          <Link
            href="/profile/user"
            className={` ${
              pathname === '/profile/user' || pathname === '/profile/orders'
                ? styles.header__icon_active
                : ''
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
        <li
          className={styles.header__link}
          onClick={() => {window.location.replace("/order");}}
          // onClick={() => handleOpenCart()}
          // onMouseEnter={() => handleOpenCart()}
          >
          <Image
            className={styles.header__icon}
            src={CartIcon}
            width="24px"
            height="auto"
            alt="Cart icon"
            priority={true}
          />
        </li>

        {isCartOpen ? (
          <Cart handleCloseCart={handleCloseCart} isCartOpen={isCartOpen} />
        ) : (
          ''
        )}

        <BurgerMenu arrMenu={arrMenu} />

        <li className={`${styles.header__el_of} ${styles.header__link}`}>
          USD
        </li>
        <li className={`${styles.header__el_of} ${styles.header__link}`}>
          РУС
        </li>
      </ul>
    </header>
  );
};
