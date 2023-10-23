'use client';
import styles from './order.module.scss';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import imageUrl from '@/public/images/card-img.png';

const dataOrder = [
  {
    name: 'ИМЯ',
    nameInput: 'firstName',
    type: 'text',
    id: 'firstName',
    error: 'Имя - обязательное поле!',
  },
  {
    name: 'ФАМИЛИЯ',
    nameInput: 'lastName',
    type: 'text',
    id: 'lastName',
    error: 'Фамилия - обязательное поле!',
  },
  {
    name: 'ОТЧЕСТВО',
    nameInput: 'patronymic',
    type: 'text',
    id: 'patronymic',
    error: 'Отчество - обязательное поле!',
  },
  {
    name: 'ТЕЛЕФОН',
    nameInput: 'phone',
    type: 'tel',
    id: 'phone',
    error: 'Введите корректный номер телефона!',
    pattern: {
      pattern: /^\+?[0-9]{10,14}$/i,
      message: 'Некорректный формат телефона!',
    },
  },
  {
    name: 'EMAIL',
    nameInput: 'email',
    type: 'email',
    id: 'email',
    error: 'Введите корректный email телефона!',
    pattern: {
      pattern: /^\+?[0-9]{10,14}$/i,
      message: 'Некорректный email!',
    },
  },
  {
    name: 'СТРАНА',
    nameInput: 'country',
    type: 'text',
    id: 'country',
    error: 'Введите корректный номер телефона!',
  },
  {
    name: 'КРАЙ/ОБЛАСТЬ/РЕГИОН',
    nameInput: 'region',
    type: 'text',
    id: 'region',
    error: 'Введите корректный номер телефона!',
  },
  {
    name: 'ПОЧТОВЫЙ ИНДЕКС',
    nameInput: 'postalCode',
    type: 'text',
    id: 'postalCode',
    error: 'Введите корректный номер телефона!',
  },
  {
    name: 'ГОРОД',
    nameInput: 'city',
    type: 'text',
    id: 'city',
    error: 'Введите корректный номер телефона!',
  },
  {
    name: 'УЛИЦА, ДОМ, КВАРТИРА',
    nameInput: 'address',
    type: 'text',
    id: 'address',
    error: 'Введите корректный номер телефона!',
  },
  {
    name: 'ПРИМЕЧАНИЕ',
    nameInput: 'note',
    type: 'text',
    id: 'note',
    error: '6!',
  },
];

// const arrProduct = [
//   {
//     id: 1,
//     name: 'Футболка DARKMOOD',
//     price: 46.9,
//     imageUrl: imageUrl,
//   },
//   { id: 2, name: 'Футболка DARKMOOD', price: 40.99, imageUrl: imageUrl },
//   { id: 3, name: 'Футболка DARKMOOD', price: 49.8, imageUrl: imageUrl },
// ];

const arrProduct = [
  { id: 1, name: 'Футболка DARKMOOD', price: 46.9, imageUrl: imageUrl },
  { id: 2, name: 'Футболка DARKMOOD', price: 40.99, imageUrl: imageUrl },
  { id: 3, name: 'Футболка DARKMOOD', price: 49.8, imageUrl: imageUrl },
  { id: 4, name: 'Футболка DARKMOOD', price: 55.5, imageUrl: imageUrl },
  { id: 5, name: 'Футболка DARKMOOD', price: 39.99, imageUrl: imageUrl },
  { id: 6, name: 'Футболка DARKMOOD', price: 42.5, imageUrl: imageUrl },
  { id: 7, name: 'Футболка DARKMOOD', price: 51.75, imageUrl: imageUrl },
  { id: 8, name: 'Футболка DARKMOOD', price: 48.25, imageUrl: imageUrl },
  { id: 9, name: 'Футболка DARKMOOD', price: 47.6, imageUrl: imageUrl },
  { id: 10, name: 'Футболка DARKMOOD', price: 44.99, imageUrl: imageUrl },
  { id: 11, name: 'Футболка DARKMOOD', price: 53.25, imageUrl: imageUrl },
  { id: 12, name: 'Футболка DARKMOOD', price: 36.5, imageUrl: imageUrl },
  { id: 13, name: 'Футболка DARKMOOD', price: 41.9, imageUrl: imageUrl },
  { id: 14, name: 'Футболка DARKMOOD', price: 50.99, imageUrl: imageUrl },
  { id: 15, name: 'Футболка DARKMOOD', price: 52.8, imageUrl: imageUrl },
  { id: 16, name: 'Футболка DARKMOOD', price: 45.5, imageUrl: imageUrl },
  { id: 17, name: 'Футболка DARKMOOD', price: 38.99, imageUrl: imageUrl },
];

export default function Order() {
  const [previousData, setPreviousData] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
    watch,
    setValue,
    getValues,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('orderFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      arrInput.forEach((field) => {
        const { nameInput } = field;
        if (parsedData.hasOwnProperty(nameInput)) {
          setValue(nameInput, parsedData[nameInput]);
        }
      });
      setPreviousData(parsedData);
      clearErrors();
    } else {
      clearErrors();
      const formValues = getValues();
      Object.keys(formValues).forEach((fieldName) => {
        setValue(fieldName, '');
      });
      // setIsButtonDisabled(true);
    }
  }, [setValue]);

  useEffect(() => {
    const savedData = localStorage.getItem('orderFormData');
    if (savedData) {
      const isFormDirty = Object.keys(previousData).some((key) => {
        const previousValue = previousData[key];
        const currentValue = getValues()[key];
        return previousValue !== undefined && previousValue !== currentValue;
      });
      setIsButtonDisabled(!isValid || !isFormDirty);
    } else {
      setIsButtonDisabled(!isValid);
    }
    setIsButtonDisabled(!isValid);
  }, [watch()]);

  const onSubmit = (data) => {
    localStorage.setItem(nameData, JSON.stringify(data));
    setPreviousData(data);
    console.log('sub', data);
  };
  return (
    <div className={styles.order}>
      <h1>Оформление заказа</h1>
      <p>НОМЕР ЗАКАЗА: 95201</p>
      <div className={styles.order__content}>
        <ul className={styles.order__data}>
          <h2>Введите данные для доставки</h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {dataOrder.map((el) => (
              <li key={el.id}>
                <label>
                  <h3>{el.name}</h3>
                  <input
                    type={el.type}
                    id={el.id}
                    {...register(el.nameInput, {
                      required: el.error,
                      pattern: {
                        value: el.pattern?.pattern || undefined,
                        message: el.pattern?.message || '',
                      },
                    })}
                  />
                  {errors?.[el.nameInput] && (
                    <span>{errors[el.nameInput].message}</span>
                  )}
                </label>
              </li>
            ))}
            <button
              className={isButtonDisabled ? styles['not-valid'] : ''}
              disabled={isButtonDisabled}
              type="submit">
              Перейти к оплате
            </button>
          </form>
        </ul>

        <ul className={styles.order__products}>
          <h2>Ваш заказ</h2>
          <ul className={styles.order__list}>
            {arrProduct.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}
