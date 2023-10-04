import styles from './Header.module.scss';
import Image from 'next/image';
import User from '../../public/user.svg';
import Cart from '../../public/cart.svg';
import Logo from '../../public/logo.svg';

export const Header = () => {
  return (
    <header className={styles.root}>
      <ul>
        <li>FAQ</li>
        <li>ВАШ ЗАКАЗ</li>
        <li>КАТАЛОГ</li>
      </ul>
      <Image
        className={styles.logo}
        src={Logo}
        width="104px"
        height="100px"
        alt="Logo icon"
      />

      <ul>
        <li>
          <Image src={User} width="24px" height="24px" alt="User icon" />
        </li>
        <li>
          <Image src={Cart} width="24px" height="24px" alt="Cart icon" />
        </li>
        <li>USD</li>
        <li>РУС</li>
      </ul>
    </header>
  );
};
