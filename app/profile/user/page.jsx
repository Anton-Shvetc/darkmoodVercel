import styles from './user.module.scss';

export default function User() {
  return (
    <div className={styles.user}>
      <div>
        <h2>Персональные даные</h2>
        <ul>
          <li>ИМЯ</li>
          <li>ФАМИЛИЯ</li>
          <li>ОТЧЕСТВО</li>
          <li>ТЕЛЕФОН</li>
        </ul>
      </div>

      <div>
        <h2>Адрес доставки</h2>
        <ul>
          <li>СТРАНА</li>
          <li>КРАЙ/ОБЛАСТЬ/РЕГИОН</li>
          <li>ПОЧТОВЫЙ ИНДЕКС</li>
          <li>ГОРОД</li>
          <li>УЛИЦА, ДОМ, КВАРТИРА</li>
        </ul>
      </div>
    </div>
  );
}
