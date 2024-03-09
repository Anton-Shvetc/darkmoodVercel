"use client";
import { useState, useEffect } from "react";
import styles from "./UserProfile.module.scss";

import { useForm, handleSubmit } from "react-hook-form";
import Form from "@/components/Form/Form";

const userId = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).id
  : null;
console.log(JSON.stringify(localStorage.getItem("user")));

const inputsUserData = [
  {
    name: "ИМЯ",
    nameInput: "firstName",
    type: "text",
    id: "firstName",
    error: "Имя - обязательное поле!",
  },
  {
    name: "ФАМИЛИЯ",
    nameInput: "lastName",
    type: "text",
    id: "lastName",
    error: "Фамилия - обязательное поле!",
  },
  {
    name: "ОТЧЕСТВО",
    nameInput: "patronymic",
    type: "text",
    id: "patronymic",
    error: "Отчество - обязательное поле!",
  },
  {
    name: "ТЕЛЕФОН",
    nameInput: "phone",
    type: "tel",
    id: "phone",
    error: "Введите корректный номер телефона!",
    pattern: {
      pattern: /^\+?[0-9]{10,14}$/i,
      message: "Некорректный формат телефона!",
    },
  },
];

const inputsAdressData = [
  {
    name: "СТРАНА",
    nameInput: "country",
    type: "text",
    id: "country",
    error: "Введите корректный номер телефона!",
  },
  {
    name: "КРАЙ/ОБЛАСТЬ/РЕГИОН",
    nameInput: "region",
    type: "text",
    id: "region",
    error: "Введите корректный номер телефона!",
  },
  {
    name: "ПОЧТОВЫЙ ИНДЕКС",
    nameInput: "postalCode",
    type: "text",
    id: "postalCode",
    error: "Введите корректный номер телефона!",
  },
  {
    name: "ГОРОД",
    nameInput: "city",
    type: "text",
    id: "city",
    error: "Введите корректный номер телефона!",
  },
  {
    name: "УЛИЦА, ДОМ, КВАРТИРА",
    nameInput: "address",
    type: "text",
    id: "address",
    error: "Введите корректный номер телефона!",
  },
];

export const UserProfile = () => {
  const [isEditUser, setIsEditUser] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [userData, setUserData] = useState();

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        `https://darkmode-serve.ru/api/users/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer 63e74db5f842896da84149d352ea13c224cb240781490ff12f574a960df9a33894190bc96d5a5fc11483876cf43cc0d682900d178466dec4afdda24df86930916d7c4eaeb620c766ff2eb4889158991490aa90b598e940ca6cd11d50d21179f6c0c3096510f83eb9d867abbaf3d97693c477735fb250af26014c044494064979",

            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("Ошибка получения данных пользователя");
      }

      const answer = await response.json();
      localStorage.setItem("userFormData", JSON.stringify(answer));

      setUserData(answer);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ul className={styles.user}>
      <li>
        <div className={styles["user__block-info"]}>
          <h2>Персональные даные</h2>
          <span onClick={() => setIsEditUser(!isEditUser)}>Изменить</span>
        </div>
        {userData && (
          <Form
            arrInput={inputsUserData}
            nameData={"userFormData"}
            isEdit={isEditUser}
          />
        )}
      </li>

      <li>
        <div className={styles["user__block-info"]}>
          <h2>Адрес доставки</h2>
          <span onClick={() => setIsEditAddress(!isEditAddress)}>Изменить</span>
        </div>

        {userData && (
          <Form
            arrInput={inputsAdressData}
            nameData={"userFormData"}
            isEdit={isEditAddress}
          />
        )}
      </li>
    </ul>
  );
};
