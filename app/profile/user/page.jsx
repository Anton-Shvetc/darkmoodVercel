'use client';
import styles from './user.module.scss';
import { useState } from 'react';
import { useForm, handleSubmit } from 'react-hook-form';

const dataUser = [
  {
    name: 'ИМЯ',
    nameInput: 'name',
    type: 'text',
  },
  {
    name: 'ФАМИЛИЯ',
    nameInput: 'LastName',
    type: 'text',
  },
  {
    name: 'ОТЧЕСТВО',
    nameInput: 'LastName',
    type: 'text',
  },
  {
    name: 'ТЕЛЕФОН',
    nameInput: 'phone',
    type: 'number',
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  // useEffect(() => {
  //   const sub = watch((value, { name, type }) => {
  //     console.log(value, name, type);
  //   });
  //   return () => sub.unsubscribe();
  // }, [watch]);

  return (
    <ul className={styles.user}>
      <li>
        <div className={styles['user__block-info']}>
          <h2>Персональные даные</h2>
          <span onClick={() => setIsEditUser(!isEditUser)}>Изменить</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ul>
            {dataUser.map((el, i) => (
              <li key={i}>
                <label>
                  <h3>{el.name}</h3>
                  <input
                    disabled={!isEditUser}
                    className={isEditUser ? styles.active : ''}
                    type="text"
                    // value="+7"
                    {...register('name', {
                      required: 'Name is required field',
                    })}
                  />
                  {errors?.name && (
                    <div style={{ color: 'red' }}>{errors.name.message}</div>
                  )}
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
              <li key={i}>
                <label>
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
