"use client";
import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import arrowIcon from "@/public/icons/arrow-up.svg";
import { Ubuntu } from "next/font/google";

const ubuntuFont = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const Card = ({ name, price, imageUrl }) => {

  return (
    <>
      <div className={classNames(`${ubuntuFont.variable}`, `${styles.card}`)}>
        <Link
          href="#"
          onClick={() => {
            console.log("link");
          }}
          className={styles.card__moreLink}
        >
          <div className={styles.card__moreBtn}>
            <span>Подробнее</span>
            <Image src={arrowIcon} width={21} height={21} alt="arrow" />
          </div>

          <div className={styles.card__price}>{price} USD</div>
          <div className={styles.card__img}>
            <Image src={imageUrl} width="427px" height="100%" alt={name} />
          </div>
        </Link>
        <button
          onClick={() => {
            console.log("click");
          }}
          className={styles.card__button}
        >
          {name}
        </button>
      </div>
    </>
  );
};
