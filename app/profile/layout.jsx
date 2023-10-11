'use client';
import styles from './profile.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ProfileLayout({ children }) {
  const pathname = usePathname();

  const onClick = () => {
    console.log('logout');
  };

  return (
    <div className={styles.profile}>
      <div
        className={`${styles.profile__content} ${
          pathname === '/profile/user'
            ? styles['profile__user-padding']
            : styles['profile__orders-padding']
        }`}>
        <h1>Мой аккаунт</h1>
        <ul className={styles.profile__checkbox}>
          <li className={pathname === '/profile/user' ? styles.active : ''}>
            <Link href={'/profile/user'}>Личные данные</Link>
          </li>
          <li className={pathname === '/profile/orders' ? styles.active : ''}>
            <Link href={'/profile/orders'}>Мои заказы</Link>
          </li>
        </ul>
        {children}
        <button onClick={() => onClick()} className={styles.profile__logout}>
          Выйти с аккаунта
        </button>
      </div>
    </div>
  );
}
