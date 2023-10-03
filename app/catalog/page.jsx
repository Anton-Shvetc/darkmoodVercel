import { Cards } from "@/components/Cards/Cards";
import styles from "./catalog.module.scss";

export default function Catalog() {
  return (
    <section className={styles.container}>
      <Cards />
    </section>
  );
}
