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
      `${process.env.NEXT_PUBLIC_DB_HOST}/api/ordershistories`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
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
                          src={process.env.NEXT_PUBLIC_DB_HOST + card.imageUrl}
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
