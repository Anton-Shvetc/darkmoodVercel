'use client';
import styles from './user.module.scss';
import { useState } from 'react';

const dataUser = [
  {
    name: 'ИМЯ',
  },
  {
    name: 'ФАМИЛИЯ',
  },
  {
    name: 'ОТЧЕСТВО',
  },
  {
    name: 'ТЕЛЕФОН',
  },
];

const dataAddress = [
  { name: 'СТРАНА' },
  { name: 'КРАЙ/ОБЛАСТЬ/РЕГИОН' },
  { name: 'ПОЧТОВЫЙ ИНДЕКС' },
  { name: 'ГОРОД' },
  { name: 'УЛИЦА, ДОМ, КВАРТИРА' },
];

export default function User() {
  const [isEditUser, setIsEditUser] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);

  return (
    <ul className={styles.user}>
      <li>
        <div className={styles['user__block-info']}>
          <h2>Персональные даные</h2>
          <span onClick={() => setIsEditUser(!isEditUser)}>Изменить</span>
        </div>

        <form>
          <ul>
            {dataUser.map((el, i) => (
              <li>
                <label key={i}>
                  <h3>{el.name}</h3>
                  <input
                    disabled={!isEditUser}
                    className={isEditUser ? styles.active : ''}
                  />
                </label>
              </li>
            ))}
          </ul>
          {isEditUser ? <button type="submit">Сохранить изменения</button> : ''}
        </form>
      </li>

      <li>
        <div className={styles['user__block-info']}>
          <h2>Адрес доставки</h2>
          <span onClick={() => setIsEditAddress(!isEditAddress)}>Изменить</span>
        </div>

        <form>
          <ul>
            {dataAddress.map((el, i) => (
              <li>
                <label key={i}>
                  <h3>{el.name}</h3>
                  <input
                    disabled={!isEditAddress}
                    className={isEditAddress ? styles.active : ''}
                  />
                </label>
              </li>
            ))}
          </ul>
          {isEditAddress ? (
            <button type="submit">Сохранить изменения</button>
          ) : (
            ''
          )}
        </form>
      </li>
    </ul>
  );
}
