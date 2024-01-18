import styles from "./AdditionalSalesCard.module.scss";
import Image from "next/image";
export const AdditionalSalesCard = ({ data }) => {
  return (
    <div className={styles.additionalSalesCard}>
      <Image src={data.image.imageUrl} width={207} height={244} alt="image" />
      <p className={styles.additionalSalesCard__price}>{data.price}</p>
      <h6 className={styles.additionalSalesCard__title}>{data.title}</h6>
    </div>
  );
};
