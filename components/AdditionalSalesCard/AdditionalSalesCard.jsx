import styles from "./AdditionalSalesCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export const AdditionalSalesCard = ({ data }) => {
  const imageUrl =
    process.env.NEXT_PUBLIC_DB_HOST + data.attributes.images.data[0].attributes.url;

  return (
    <Link href={`/catalog/${data.id}`} className={styles.additionalSalesCard}>
      <Image
        className={styles.additionalSalesCard__image}
        src={imageUrl}
        width={207}
        height={244}
        alt="image"
      />
      <p className={styles.additionalSalesCard__price}>
        {data.attributes.price} RUB
      </p>
      <h6 className={styles.additionalSalesCard__title}>
        {data.attributes.title}
      </h6>
    </Link>
  );
};
