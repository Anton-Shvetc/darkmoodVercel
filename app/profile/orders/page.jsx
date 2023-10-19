'use client';
import styles from './orders.module.scss';
import Image from 'next/image';
import Plus from '../../../public/icons/plus.svg';
import Minus from '../../../public/icons/minus.svg';
import Product from '../../../public/images/card-img.png';
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

export default function Orders() {
  const [isQuestionOpen, setIsQuestionOpen] = useState([]);

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
    <ul className={styles.orders}>
      {arrQuestions.map((el, i) => (
        <li key={i} className={styles.orders__order}>
          <div className={styles['orders__head-order']}>
            <h2
              className={
                isQuestionOpen.includes(i)
                  ? styles.orders__title_active
                  : styles.orders__title_inactive
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
                  priority={true}
                />
              ) : (
                <Image
                  src={Plus}
                  width="24px"
                  height="24"
                  alt="Plus icon"
                  priority={true}
                />
              )}
            </button>
          </div>

          <span
            className={`
						${isQuestionOpen.includes(i) ? styles.orders__text_active : ''} ${
              styles['orders__more-info']
            }
					`}>
            <h3>{el.title}</h3>

            <div className={styles['orders__order-card']}>
              <div className={styles.orders__image}>
                <Image
                  src={el.image}
                  alt="Product image"
                  width="100px"
                  height="100px"
                  priority={true}
                />
              </div>

              <ul className={styles['orders__order-info']}>
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
  );
}
