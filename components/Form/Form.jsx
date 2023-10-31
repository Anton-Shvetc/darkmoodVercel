'use client';
import styles from './Form.module.scss';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ arrInput, nameData, isEdit }) {
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
    const savedData = localStorage.getItem(nameData);
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
  }, [setValue, isEdit]);

  useEffect(() => {
    const savedData = localStorage.getItem(nameData);
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
  }, [watch()]);

  const onSubmit = (data) => {
    localStorage.setItem(nameData, JSON.stringify(data));
    setPreviousData(data);
    console.log('sub', data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {arrInput.map((el, i) => (
          <li key={el.id}>
            <label>
              <h3>{el.name}</h3>
              <input
                disabled={!isEdit}
                className={isEdit ? styles.active : ''}
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
      </ul>

      {isEdit ? (
        <button
          className={isButtonDisabled ? styles['not-valid'] : ''}
          disabled={isButtonDisabled}
          type="submit">
          Сохранить изменения
        </button>
      ) : (
        ''
      )}
    </form>
  );
}