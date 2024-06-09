"use client";
import { useState, useEffect } from "react";
import styles from "./UserProfile.module.scss";
import Form from "@/components/Form/Form";
import { redirect } from "next/navigation";

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
  const userId = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))?.id
    : null;

  const getUserInfo = async () => {
    if (!userId) {
      redirect("/authorization");
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_HOST}/api/users/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("Ошибка получения данных пользователя");
        return
      }

      const answer = await response.json();
      console.log(answer)
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
            setIsEdit={setIsEditUser}
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
            setIsEdit={setIsEditAddress}
          />
        )}
      </li>
    </ul>
  );
};
