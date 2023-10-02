import styles from "./Card.module.scss"
export const Card = ({name, price}) => {
	return (
    <>
      <div className={styles.card} >
        Карточка {name}
      </div>
    </>
  );
}