import { Cards } from "@/components/Cards/Cards";
import styles from "./catalog.module.scss";
// import imageUrl from "@/public/images/card-img.png";

export default function Catalog() {


  return (
    <section className={styles.container  }>
      <Cards/>
    </section>
  );
}
