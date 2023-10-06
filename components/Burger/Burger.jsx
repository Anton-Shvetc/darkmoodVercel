import styles from './Burger.module.scss';

function Burger({ handleBurgerClick }) {
  return (
    <div onClick={() => handleBurgerClick()} className={styles.burger}>
      <span />
      <span />
      <span />
    </div>
  );
}

export default Burger;
