import { Cards } from "@/components/Cards/Cards";
import styles from "./catalog.module.scss";

export default function Catalog() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.box__title}>Футболки</h1>
        <Cards />
      </div>
    </section>
  );
}
