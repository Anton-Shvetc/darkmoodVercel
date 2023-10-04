import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
export const Card = ({ name, price, imageUrl }) => {
  return (
    <>
      <div className={styles.card}>
        <Link href="#" className={styles.card__moreLink}>
          <div className={styles.card__price}>
           
            {price} USD
          </div>
          <div className={styles.card__img}>
            <span>Подробнее</span>
            <Image src={imageUrl} width="100%" height="100%" alt={name} />
          </div>
        </Link>
        <button className={styles.card__button}>{name}</button>
      </div>
    </>
  );
};
