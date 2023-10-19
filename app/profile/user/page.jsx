'use client';
import styles from './user.module.scss';
import { useState, useEffect } from 'react';
import { useForm, handleSubmit } from 'react-hook-form';
import Form from '@/components/Form/Form';

const dataUser = [
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
];

const dataAddress = [
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
        <Form
          arrInput={dataUser}
          nameData={'userFormData'}
          isEdit={isEditUser}
        />
      </li>

      <li>
        <div className={styles['user__block-info']}>
          <h2>Адрес доставки</h2>
          <span onClick={() => setIsEditAddress(!isEditAddress)}>Изменить</span>
        </div>
        <Form
          arrInput={dataAddress}
          nameData={'addressFormData'}
          isEdit={isEditAddress}
        />
      </li>
    </ul>
  );
}
