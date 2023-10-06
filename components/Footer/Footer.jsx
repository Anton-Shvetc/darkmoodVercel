'use client';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Inst from '../../public/inst.svg';
import Logo1 from '../../public/icons/logo-footer-max.svg';
import Logo2 from '../../public/icons/logo.svg';
import Visa from '../../public/visa.svg';
import Mastercard from '../../public/mastercard.png';
import Privat from '../../public/privat.png';
import Wayforpay from '../../public/wayforpay.png';
// import { RobotoSlabFont } from '@/app/layout';
import classNames from 'classnames';
import Link from 'next/link';
import { Roboto_Slab } from 'next/font/google';
import { useState, useEffect } from 'react';

export const RobotoSlabFont = Roboto_Slab({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});

export const Footer = () => {
  const [logo, setLogo] = useState(window.innerWidth > 800 ? Logo1 : Logo2);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 800) {
        setLogo(Logo1);
      } else {
        setLogo(Logo2);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer
      className={classNames(`${RobotoSlabFont.variable}`, `${styles.footer}`)}>
      <div className={styles.footer__top}>
        <div className={styles.footer__left}>
          <ul className={styles.footer__links}>
            <li>
              <Link href="/questions">FAQ</Link>
            </li>
            <li>
              <Link href="/order">ВАШ ЗАКАЗ</Link>
            </li>
            <li>
              <Link href="/catalog">КАТАЛОГ</Link>
            </li>
          </ul>

          <ul className={styles.footer__images}>
            <li>
              <Image src={logo} width="48px" height="48px" alt="Logo icon" />
            </li>
            <li className={styles.footer__el_of}>
              <Link href="#">
                <Image src={Inst} width="48px" height="48px" alt="Inst icon" />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer__right}>
          <ul>
            <li>
              <h3>e-mail:</h3>

              <Link href="mailto: support@jolybell.com">
                <p> support@jolybell.com</p>
              </Link>
            </li>
            <li>
              <h3>service hours:</h3>
              <p>Mon.-Fri.: 9 am - 9 pm</p>
            </li>
          </ul>
          <ul className={styles.footer__pay}>
            <li>
              <h3>We accept:</h3>
              <div className={styles.footer__box}>
                <Image alt="Visa icon" src={Visa} width="52px" height="17px" />
                <Image
                  alt="Wayforpay icon"
                  src={Wayforpay}
                  width="85px"
                  height="17px"
                />
              </div>
            </li>
            <li className={styles.footer__box}>
              <Image
                alt="Mastercard icon"
                src={Mastercard}
                width="47.5px"
                height="40px"
              />
              <Image
                alt="Privat icon"
                src={Privat}
                width="40px"
                height="40px"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <ul className={styles.footer__offering}>
          <li>©&nbsp;2023, DARKMOOD.com</li>
          <li>
            <Link href="#">Public offering</Link>
          </li>
        </ul>
        <p className={styles.footer__el_of}>
          Delivery in Ukraine is carried out by the delivery service: Nova
          Poshta. <br />
          We deliver worldwide by delivery service: Ukr Poshta, Nova Poshta.
        </p>
      </div>
    </footer>
  );
};
