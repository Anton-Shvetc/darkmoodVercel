import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.root}>
      <h2>footer</h2>
      <div>
        <ul>
          <li>FAQ</li>
          <li>ВАШ ЗАКАЗ</li>
          <li>КАТАЛОГ</li>
        </ul>

        <div>
          <img />
          <img />
        </div>

        <ul>
          <li>©&nbsp;2023, DARKMOOD.com</li>
          <li>Public offering</li>
        </ul>
      </div>
    </footer>
  );
};
