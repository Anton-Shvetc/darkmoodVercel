"use client";
import styles from "./Form.module.scss";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

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
    mode: "onChange",
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
        setValue(fieldName, "");
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

  const savePersonalData = async (userData) => {
    const userInfo = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : "";
    const userId = userInfo ? userInfo?.id : "";

    try {
      const response = await fetch(
        `https://darkmode-serve.ru/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer 63e74db5f842896da84149d352ea13c224cb240781490ff12f574a960df9a33894190bc96d5a5fc11483876cf43cc0d682900d178466dec4afdda24df86930916d7c4eaeb620c766ff2eb4889158991490aa90b598e940ca6cd11d50d21179f6c0c3096510f83eb9d867abbaf3d97693c477735fb250af26014c044494064979",

            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (data) => {
    localStorage.setItem(nameData, JSON.stringify(data));
    setPreviousData(data);
    // console.log("sub", data);
    savePersonalData(data);
    // {
    //   "data": {
    //     "firstName": "222222"
    //     "lastName": "222222"
    //     "patronymic": "222222"
    //     "phone": "222222"
    //   }
    // }
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
                className={isEdit ? styles.active : ""}
                type={el.type}
                id={el.id}
                {...register(el.nameInput, {
                  // required: el.error,
                  // pattern: {
                  //   value: el.pattern?.pattern || undefined,
                  //   message: el.pattern?.message || "",
                  // },
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
          // className={isButtonDisabled ? styles["not-valid"] : ""}
          // disabled={isButtonDisabled}
          type="submit"
        >
          Сохранить изменения
        </button>
      ) : (
        ""
      )}
    </form>
  );
}
