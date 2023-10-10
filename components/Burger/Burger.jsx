import styles from './Burger.module.scss';

export function Burger({ isBurgerMenuOpen, handleBurgerClick }) {
  return (
    <div
      onClick={() => handleBurgerClick()}
      className={`${styles.burger} ${isBurgerMenuOpen ? styles.opened : ''}`}>
      <span />
      <span />
      <span />
    </div>
  );
}
