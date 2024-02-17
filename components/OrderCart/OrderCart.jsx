"use client";
import styles from "./OrderCart.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import imageUrl from "@/public/images/card-img.png";

export const OrderCart = () => {
  const [arrProduct, setArrProduct] = useState([]);
  useEffect(() => {
    setArrProduct(
      localStorage?.getItem("cart") && typeof window !== "undefined"
        ? JSON.parse(localStorage?.getItem("cart"))
        : []
    );
  }, []);

  const handleDeleteProduct = (id) => {
    const newCartArray = arrProduct.filter((cart) => cart.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCartArray));
    setArrProduct(newCartArray);
  };


  return (
    <div className={styles.order__container}>
      <ul className={styles.order__list}>
        {arrProduct.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <div className={styles.product__content}>
              <div className={styles.product__image}>
                <Image
                  src={`https://darkmode-serve.ru${product.imageUrl}`}
                  width={100}
                  height={100}
                  alt="Product image"
                  priority={true}
                />
              </div>
              <div className={styles.product__info}>
                <p>
                  Размер: <span>{product.size}</span>
                </p>
                <p>
                  Количество: <span>{product.count}</span>
                </p>

                <button>{`${product.price} USD`}</button>
              </div>
              <button
                onClick={() => {
                  handleDeleteProduct(product.id);
                }}
              >
                Удалить из корзины
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
