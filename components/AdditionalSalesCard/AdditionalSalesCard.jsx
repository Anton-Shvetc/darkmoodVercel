import Link from "next/link";
import styles from "./AdditionalSalesCard.module.scss";
import Image from "next/image";

export const AdditionalSalesCard = ({ data }) => {
  const imageUrl =
    data && data.attributes.images.data
      ? process.env.NEXT_PUBLIC_DB_HOST +
        data.attributes.images.data[0].attributes.url
      : null;

  return (
    <Link href={`/catalog/${data.id}`} className={styles.additionalSalesCard}>
      <div className={styles.additionalSalesCard__image}>
        {imageUrl && (
          <Image src={imageUrl} width={207} height={244} alt="image" />
        )}
      </div>
      <p className={styles.additionalSalesCard__price}>
        {data.attributes.price} RUB
      </p>
      <h6 className={styles.additionalSalesCard__title}>
        {data.attributes.title}
      </h6>
    </Link>
  );
};
