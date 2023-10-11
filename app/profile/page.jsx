'use client';
import Image from 'next/image';
import Plus from '../../public/icons/plus.svg';
import Minus from '../../public/icons/minus.svg';
import Product from '../../public/images/card-img.png';
import styles from './profile.module.scss';
import { useState } from 'react';

const arrQuestions = [
  {
    number: 95201,
    image: Product,
    size: 'M',
    quantity: 1,
    delivery: 'Доставка курьером',
    date: '12 сентября',
    title: 'Футболка DARKMOOD',
    price: '26.25',
  },
  {
    number: 95202,
    image: Product,
    size: 'L',
    quantity: 2,
    delivery: 'Самовывоз',
    date: '19 сентября',
    title: 'Футболка DARKMOOD',
    price: '35.99',
  },
  {
    number: 95203,
    image: Product,
    size: 'M',
    quantity: 2,
    delivery: 'Самовывоз',
    date: '10 октября',
    title: 'Футболка DARKMOOD',
    price: '65.50',
  },
  {
    number: 95204,
    image: Product,
    size: 'S',
    quantity: 3,
    delivery: 'Доставка почтой',
    date: '25 сентября',
    title: 'Футболка DARKMOOD',
    price: '49.99',
  },
  {
    number: 95205,
    image: Product,
    size: 'XL',
    quantity: 1,
    delivery: 'Доставка курьером',
    date: '3 октября',
    title: 'Футболка DARKMOOD',
    price: '89.00',
  },
];

export default function Profile() {
  const [isActive, setIsActive] = useState(0);
  const [isQuestionOpen, setIsQuestionOpen] = useState([]);

  const onClick = () => {
    console.log('logout');
  };
  const handleClick = (i) => {
    if (isQuestionOpen.includes(i)) {
      const index = isQuestionOpen.indexOf(i);
      const newArray = [...isQuestionOpen];
      newArray.splice(index, 1);
      setIsQuestionOpen(newArray);
    } else {
      setIsQuestionOpen([...isQuestionOpen, i]);
    }
  };
  return (
    <div className={styles.profile}>
      <div className={styles.profile__content}>
        <h1>Мой аккаунт</h1>
        <ul className={styles.profile__checkbox}>
          <li
            onClick={() => setIsActive(0)}
            className={isActive === 0 ? styles.active : ''}>
            Личные данные
          </li>
          <li
            onClick={() => setIsActive(1)}
            className={isActive === 1 ? styles.active : ''}>
            Мои заказы
          </li>
        </ul>

        <ul className={styles.profile__orders}>
          {arrQuestions.map((el, i) => (
            <li key={i} className={styles.profile__order}>
              <div className={styles['profile__head-order']}>
                <h2
                  className={
                    isQuestionOpen.includes(i)
                      ? styles.profile__title_active
                      : styles.profile__title_inactive
                  }>
                  {`Заказ № ${el.number}`}
                </h2>
                <button onClick={() => handleClick(i)}>
                  {isQuestionOpen.includes(i) ? (
                    <Image
                      src={Minus}
                      width="24px"
                      height="24"
                      alt="Minus icon"
                    />
                  ) : (
                    <Image
                      src={Plus}
                      width="24px"
                      height="24"
                      alt="Plus icon"
                    />
                  )}
                </button>
              </div>

              <span
                className={`
                  ${
                    isQuestionOpen.includes(i)
                      ? styles.profile__text_active
                      : ''
                  } ${styles['profile__more-info']}
                `}>
                <h3>{el.title}</h3>

                <div className={styles['profile__order-card']}>
                  <div className={styles.profile__image}>
                    <Image
                      src={el.image}
                      alt="Product image"
                      width="100px"
                      height="100px"
                    />
                  </div>

                  <ul className={styles['profile__order-info']}>
                    <li>
                      <p>
                        Размер: <span>{el.size}</span>
                      </p>
                      <p>
                        Количество: <span>{el.quantity}</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Способ доставки: <span>{el.delivery}</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Дата доставки: <span>{el.date}</span>
                      </p>
                    </li>
                    <li>
                      <button>{`${el.price} USD`}</button>
                    </li>
                  </ul>
                </div>
              </span>
            </li>
          ))}
        </ul>
        <button onClick={() => onClick()} className={styles.profile__logout}>
          Выйти с аккаунта
        </button>
      </div>
    </div>
  );
}
