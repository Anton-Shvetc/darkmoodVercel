import styles from './Burger.module.scss';

export function Burger({ handleBurgerClick }) {
  return (
    <div onClick={() => handleBurgerClick()} className={styles.burger}>
      <span />
      <span />
      <span />
    </div>
  );
}
