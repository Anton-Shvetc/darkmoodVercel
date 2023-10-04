import styles from './Footer.module.scss';
import Image from 'next/image';
import Inst from '../../public/inst.svg';
import Logo from '../../public/logo-footer.svg';

import Visa from '../../public/visa.svg';
import Mastercard from '../../public/mastercard.png';
import Privat from '../../public/privat.png';
import Wayforpay from '../../public/wayforpay.png';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.left}>
        <ul className={styles.link}>
          <li>FAQ</li>
          <li>ВАШ ЗАКАЗ</li>
          <li>КАТАЛОГ</li>
        </ul>

        <div className={styles.images}>
          <Image src={Inst} width="48px" height="48px" alt="Inst icon" />
          <Image src={Logo} width="48px" height="48px" alt="Logo icon" />
        </div>

        <ul className={styles.list}>
          <li>©&nbsp;2023, DARKMOOD.com</li>
          <li>Public offering</li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.info}>
          <ul>
            <li>
              <h3>e-mail:</h3>
              <p>support@jolybell.com</p>
            </li>
            <li>
              <h3>service hours:</h3>
              <p>Mon.-Fri.: 9 am - 9 pm</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>We accept:</h3>
              <div className={styles.box}>
                <Image alt="Visa icon" src={Visa} width="52px" height="17px" />
                <Image
                  alt="Wayforpay icon"
                  src={Wayforpay}
                  width="85px"
                  height="17px"
                />
              </div>
            </li>
            <li className={styles.box}>
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
        <p>
          Delivery in Ukraine is carried out by the delivery service: Nova
          Poshta. <br />
          We deliver worldwide by delivery service: Ukr Poshta, Nova Poshta.
        </p>
      </div>
    </footer>
  );
};
