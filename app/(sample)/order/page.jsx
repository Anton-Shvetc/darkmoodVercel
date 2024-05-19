"use client";
import styles from "./order.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import imageUrl from "@/public/images/card-img.png";
import MasterCard from "@/public/icons/pay/master-card.svg";
import ApplePay from "@/public/icons/pay/apple-pay.svg";
import Mir from "@/public/icons/pay/mir.svg";
import GooglePay from "@/public/icons/pay/google-pay.svg";
import PayPal from "@/public/icons/pay/pay-pal.svg";
import Visa from "@/public/icons/pay/visa.svg";
import Arrow from "@/public/icons/arrow-white.svg";
import { OrderCart } from "@/components/OrderCart/OrderCart";
import { send } from "emailjs-com";

const dataOrder = [
  {
    name: "ИМЯ",
    nameInput: "firstName",
    type: "text",
    id: "firstName",
    error: "Пустое поле",
  },
  {
    name: "ФАМИЛИЯ",
    nameInput: "lastName",
    type: "text",
    id: "lastName",
    error: "Пустое поле",
  },
  {
    name: "ОТЧЕСТВО",
    nameInput: "patronymic",
    type: "text",
    id: "patronymic",
    error: "Пустое поле",
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
  {
    name: "EMAIL",
    nameInput: "email",
    type: "email",
    id: "email",
    error: "Пустое поле",
    // pattern: {
    //   pattern:
    //     /^a-zA-Z0-9.!#$%&' \* +\/=?^\_`{|}~-+@a-zA-Z0-9?(?:\.a-zA-Z0-9?) * $/,
    //   message: "Некорректный email!",
    // },
  },
  {
    name: "ДОСТАВКА",
    nameInput: "delivery",
    type: "select",
    id: "delivery",
    error: "Пустое поле",
  },
  {
    name: "СТРАНА",
    nameInput: "country",
    type: "text",
    id: "country",
    error: "Пустое поле",
  },
  {
    name: "КРАЙ/ОБЛАСТЬ/РЕГИОН",
    nameInput: "region",
    type: "text",
    id: "region",
    error: "Пустое поле",
  },
  {
    name: "ПОЧТОВЫЙ ИНДЕКС",
    nameInput: "postalCode",
    type: "text",
    id: "postalCode",
    error: "Пустое поле",
  },
  {
    name: "ГОРОД",
    nameInput: "city",
    type: "text",
    id: "city",
    error: "Пустое поле",
  },
  {
    name: "УЛИЦА, ДОМ, КВАРТИРА",
    nameInput: "address",
    type: "text",
    id: "address",
    error: "Пустое поле",
  },
  {
    name: "ПРИМЕЧАНИЕ",
    nameInput: "note",
    type: "text",
    id: "note",
    // error: "6!",
  },
];

const dataPay = [MasterCard, ApplePay, Mir, GooglePay, PayPal, Visa];

export default function Order() {
  // const userInfo = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : "";
  // const userId = userInfo ? userInfo?.id : null;
  const [userInfo, setUserInfo] = useState();
  const [userId, setUserId] = useState();

  const [previousData, setPreviousData] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPay, setIsPay] = useState(true);

  const [orderNumber, setOrderNumber] = useState(null);

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isSelectPay, setIsSelectPay] = useState(null);

  const [arrProduct, setArrProduct] = useState([]);
  useEffect(() => {
    setArrProduct(
      localStorage?.getItem("cart") && typeof window !== "undefined"
        ? JSON.parse(localStorage?.getItem("cart"))
        : []
    );
  }, []);

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
    const userInfo = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : "";
    setUserInfo(userInfo);

    const userId = userInfo ? userInfo?.id : null;

    setUserId(userId);
  }, []);
  useEffect(() => {
    const savedData = localStorage.getItem("orderFormData");
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
  }, [setValue]);

  useEffect(() => {
    const savedData = localStorage.getItem("orderFormData");
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

  const saveOrder = async (orderData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_HOST}/api/ordershistories`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,

            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: orderData,
          }),
        }
      );

      if (response.ok) {
        const answer = await response.json();

        send(
          "service_kreiu93",
          "template_jfeo6sd",
          orderData,
          "j7vKR9I-jXejDzD8-"
        )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((err) => {
            console.log("FAILED...", err);
          });

        setOrderNumber(answer.data.id);
        setIsOrderComplete(true);
        localStorage.removeItem("cart");
      } else {
        throw new Error("Ошибка оформления заказа");
      }
    } catch (err) {
      alert(err);
    }
  };

  const onSubmit = (data) => {
    const cartData = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    const orderData = { ...[], data };
    orderData.data.cards = cartData;
    orderData.data.userId = userId;
    orderData.data.isPay = false;

    // Отправка данных в бд
    saveOrder(data);
  };

  if (arrProduct.length === 0) {
    return (
      <div className={styles.order}>
        <h1 className={styles.order__title}>Оформление заказа</h1>
        <h2>Корзина пуста</h2>
      </div>
    );
  }

  return (
    <div className={styles.order}>
      <h1 className={styles.order__title}>Оформление заказа</h1>
      {/* <p>НОМЕР ЗАКАЗА: 95201</p> */}

      {isOrderComplete ? (
        <div className={styles.order__content}>
          <div>
            <p>Заказ успешно оформлен </p>
            <p>Номер заказа {orderNumber}</p>
          </div>
        </div>
      ) : (
        <div className={styles.order__content}>
          {!isPay ? (
            <section className={styles.pay}>
              <h2>Система оплаты</h2>

              <div>
                <p>Безналичные</p>
                <ul>
                  {dataPay.map((el, i) => (
                    <li
                      onClick={() => setIsSelectPay(i)}
                      key={i}
                      className={isSelectPay === i ? styles.active : ""}
                    >
                      <Image
                        width="91px"
                        height="auto"
                        alt="Pay icon"
                        src={el}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.pay__buttons}>
                <button
                  onClick={() => setIsPay(false)}
                  className={styles.pay__back}
                  href={"/"}
                >
                  Назад
                </button>

                <button className={styles.pay__button}>
                  Оплатить{" "}
                  <Image
                    width="32px"
                    height="32px"
                    src={Arrow}
                    alt="Arrow icon"
                  />
                </button>
              </div>
            </section>
          ) : (
            <ul className={styles.order__data}>
              <h2>Введите данные для доставки</h2>

              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {dataOrder.map((el) => {
                  return el.type === "select" ? (
                    <li>
                      <label>
                        {" "}
                        <h3>{el.name}</h3>
                        <select
                          id="delivery"
                          className={styles.form__select}
                          {...register("delivery")}
                        >
                          <option value="cdek">сдек</option>
                          <option value="boxberry">boxberry</option>
                          <option value="russianpost">почта россии</option>
                        </select>
                      </label>
                    </li>
                  ) : (
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
                              message: el.pattern?.message || "",
                            },
                          })}
                        />
                        {errors?.[el.nameInput] && (
                          <span>{errors[el.nameInput].message}</span>
                        )}
                      </label>
                    </li>
                  );
                })}

                <button
                  className={isButtonDisabled ? styles["not-valid"] : ""}
                  disabled={isButtonDisabled}
                  type="submit"
                >
                  Оформить
                </button>
              </form>
            </ul>
          )}

          <section className={styles.order__products}>
            <h2>Ваш заказ</h2>
            <OrderCart />
          </section>
        </div>
      )}
    </div>
  );
}
