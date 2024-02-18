import styles from "./AdditionalSalesCard.module.scss";
import Image from "next/image";
export const AdditionalSalesCard = ({ data }) => {
  const imageUrl =
    "https://darkmode-serve.ru" + data.attributes.images.data[0].attributes.url;

  return (
    <div className={styles.additionalSalesCard}>
      <Image
        className={styles.additionalSalesCard__image}
        src={imageUrl}
        width={207}
        height={244}
        alt="image"
      />
      <p className={styles.additionalSalesCard__price}>
        {data.attributes.price} USD
      </p>
      <h6 className={styles.additionalSalesCard__title}>
        {data.attributes.title}
      </h6>
    </div>
  );
};
