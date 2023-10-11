import Link from 'next/link';
import styles from './not-found.module.scss';
import Image from 'next/image';
import Logo from '../public/images/error-logo.svg';
import Arrow from '../public/icons/arrow.svg';

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h2>Страница не найдена</h2>

      <Image src={Logo} alt="Error Logo" className={styles.error__logo} />

      <Link href="/">
        <button>
          <Image className={styles.error__arrow} src={Arrow} alt="Arrow icon" />
          <p>Вернуться на главную страницу</p>
        </button>{' '}
      </Link>
    </div>
  );
}
