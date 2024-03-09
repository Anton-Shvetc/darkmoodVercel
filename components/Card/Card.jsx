'use client';
import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import arrowIcon from '@/public/icons/arrow-up.svg';
import { Ubuntu } from 'next/font/google';

const ubuntuFont = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export const Card = ({ id, attributes }) => {
  const imageUrl = attributes.images.data ? 'https://darkmode-serve.ru' + attributes.images.data[0].attributes.url : "";
  return (
    <>
      <div className={classNames(`${ubuntuFont.variable}`, `${styles.card}`)}>
        <Link href={`/catalog/${id}`} className={styles.card__moreLink}>
          <div className={styles.card__moreBtn}>
            <span>Подробнее</span>
            <Image
              src={arrowIcon}
              width={21}
              height={21}
              alt="arrow"
              priority={true}
            />
          </div>

          <div className={styles.card__price}>{attributes.price} RUB</div>
          <div className={styles.card__img}>
            <Image
              src={imageUrl}
              width={420}
              height={200}
              alt={attributes.title}
              priority={true}
            />
          </div>
        </Link>
        <Link href={`/catalog/${id}`} className={styles.card__button}>
          {attributes.title}
        </Link>
      </div>
    </>
  );
};
