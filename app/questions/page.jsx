'use client';
import Image from 'next/image';
import Plus from '../../public/icons/plus.svg';
import Minus from '../../public/icons/minus.svg';
import styles from './questions.module.scss';
import { useState } from 'react';

const arrQuestions = [
  {
    title: 'Зачем все это?',
    text: 'Вызывающе, дорого, престижно — это понятия, которыми руководствуются рабы моды. Наша продукция является жестом неуважения к людям гламурного разума.',
  },
  {
    title: 'Почему так дорого?',
    text: 'Вызывающе, дорого, престижно — это понятия, которыми руководствуются рабы моды. Наша продукция является жестом неуважения к людям гламурного разума.',
  },
  {
    title: 'Что именно отличает ваш товар от других?',
    text: 'Вызывающе, дорого, престижно — это понятия, которыми руководствуются рабы моды. Наша продукция является жестом неуважения к людям гламурного разума.',
  },
  {
    title: 'Как заказать?',
    text: 'Вызывающе, дорого, престижно — это понятия, которыми руководствуются рабы моды. Наша продукция является жестом неуважения к людям гламурного разума.',
  },
  {
    title: 'Как оплатить?',
    text: 'Вызывающе, дорого, престижно — это понятия, которыми руководствуются рабы моды. Наша продукция является жестом неуважения к людям гламурного разума.',
  },
  {
    title: 'Как узнать трек номер',
    text: 'Вызывающе, дорого, престижно — это понятия, которыми руководствуются рабы моды. Наша продукция является жестом неуважения к людям гламурного разума.',
  },
];

export default function Questions() {
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
    <div className={styles.questions}>
      <ul>
        {arrQuestions.map((el, i) => (
          <li key={i}>
            <div className={styles.questions__block}>
              <h2
                className={
                  isQuestionOpen.includes(i)
                    ? styles.questions__title_active
                    : styles.questions__title_inactive
                }>
                {el.title}
              </h2>
              <span
                className={
                  isQuestionOpen.includes(i)
                    ? styles.questions__text_active
                    : ''
                }>
                {el.text}
              </span>
            </div>
            <button onClick={() => handleClick(i)}>
              {isQuestionOpen.includes(i) ? (
                <Image src={Minus} width="24px" height="24" alt="Minus icon" />
              ) : (
                <Image src={Plus} width="24px" height="24" alt="Plus icon" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
