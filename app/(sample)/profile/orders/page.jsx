"use client";
import styles from "./orders.module.scss";
import Image from "next/image";
import Plus from "@/public/icons/plus.svg";
import Minus from "@/public/icons/minus.svg";
// import Product from "@/public/images/card-img.png";
import { useEffect, useState } from "react";



export default function Orders() {
  const userInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const userId = userInfo ? userInfo?.id : null;

  const [isQuestionOpen, setIsQuestionOpen] = useState([]);

  const [ordersHistoryData, setOrdersHistoryData] = useState(null);

  const getOrdersHistory = async () => {
    const response = await fetch(
      "https://darkmode-serve.ru/api/ordershistories",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer 63e74db5f842896da84149d352ea13c224cb240781490ff12f574a960df9a33894190bc96d5a5fc11483876cf43cc0d682900d178466dec4afdda24df86930916d7c4eaeb620c766ff2eb4889158991490aa90b598e940ca6cd11d50d21179f6c0c3096510f83eb9d867abbaf3d97693c477735fb250af26014c044494064979",

          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    const userOrdersHistory = json.data.filter(
      (order) => order.attributes.userId === userId
    );

    setOrdersHistoryData(userOrdersHistory);
  };

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

  useEffect(() => {
    getOrdersHistory();
  }, []);

  return (
    <ul className={styles.orders}>
      {ordersHistoryData &&
        ordersHistoryData.map((el, i) => (
          <li key={el.id} className={styles.orders__order}>
            <div className={styles["orders__head-order"]}>
              <h2
                className={
                  isQuestionOpen.includes(i)
                    ? styles.orders__title_active
                    : styles.orders__title_inactive
                }
              >
                {`Заказ № ${el?.id}`}
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
						${isQuestionOpen.includes(i) ? styles.orders__text_active : ""} ${
                styles["orders__more-info"]
              }
					`}
            >
              {el.attributes.cards.map((card) => {
                return (
                  <>
                    <h3>{card.title}</h3>
                    <div className={styles["orders__order-card"]}>
                      <div className={styles.orders__image}>
                        <Image
                          src={`https://darkmode-serve.ru${card.imageUrl}`}
                          alt="Product image"
                          width={100}
                          height={100}
                          priority={true}
                        />
                      </div>

                      <ul className={styles["orders__order-info"]}>
                        <li>
                          <p>
                            Размер: <span>{card.size}</span>
                          </p>
                          <p>
                            Количество: <span>{card.count}</span>
                          </p>
                        </li>
                        {/* <li>
          <p>
            Способ доставки: <span>{card.delivery}</span>
          </p>
        </li> */}
                        <li>
                          <p>
                            Дата доставки:{" "}
                            <span>{el.attributes.deliveryDate}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Дата заказа:{" "}
                            <span>{el.attributes.publishedAt}</span>
                          </p>
                        </li>
                        <li>
                          <button>{`${card.price} RUB`}</button>
                        </li>
                      </ul>
                    </div>
                  </>
                );
              })}
            </span>
          </li>
        ))}
    </ul>
  );
}
