"use client";
import styles from "./ProductCard.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
// import { usePathname } from "next/navigation";

import imageUrl from "@/public/images/card-img.png";

export const ProductCard = () => {
  // const pathname = usePathname();
  // const idPath = pathname.replace("/catalog/", "");

  const { handleSubmit, register, setValue } = useForm();
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState("M");

  const onSubmit = (data) => {
    // data.count = Number(data.count);
    console.log("Добавлено в корзину:", data);
  };

  // const handleInputChange = (e) => {
  //   const inputValue = e.target.value < 10 ? e.target.value : 10;
  //   setCount(inputValue);
  //   setValue("count", inputValue);
  // };
  const dataCard = {
    id: 1,
    title: "Футболка Darkmood",
    price: "49.99 USD",
    subTitle: "Тонкая. Легкая. Черная.",
    description: [
      "Футболка линейки DARKMOOD - первая единица контрбрендовой линии одежды. Потрясающие качество в совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые фирмы.",
    ],
    fabrics: ["Ткань сорта пенье"],
    structure: ["95% cotton", "5% spandex"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 10,
    details: ["Плотность 170 г/м²"],
    images: [imageUrl, imageUrl, imageUrl],
  };

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>{dataCard.title}</h1>

      <div className={styles.info}>
        <div className={styles.slider}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            className={styles.mySwiper}
          >
            {dataCard.images.map((item, index) => (
              <div key={index} className={styles.swipItem}>
                <div className={styles.imgBox}>
                  <img src={item.src} alt="slides" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.description}>
          <div className={styles.price}>{dataCard.price}</div>
          <div className={styles.subTitle}>{dataCard.subTitle}</div>
          <div className={styles.description__text}>{dataCard.description}</div>
          <div className={styles.structure}>
            <p>{dataCard.fabrics.join(", ")}</p>
            <p>Состав: {dataCard.structure.join(", ")}</p>
            <p>{dataCard.details.join(", ")}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__box}>
              <p className={styles.label}>Выберите размер:</p>

              <ul className={styles.sizes}>
                {dataCard.sizes.map((size) => {
                  const isActive =
                    size.toLowerCase() === activeSize.toLocaleLowerCase();

                  return (
                    <li
                      className={isActive ? styles.size_active : styles.size}
                      key={size}
                      {...register("size", { value: activeSize })}
                      onClick={() => {
                        setActiveSize(size);
                        setValue("size", size);
                      }}
                    >
                      {size}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.form__box}>
              <p className={styles.label}>Количество:</p>
              <div className={styles.quantity}>
                <div className={styles.counter}>
                  <div
                    className={styles.counter__button_minus}
                    onClick={() => {
                      setCount(count > 1 ? count - 1 : 1);
                      setValue("count", count > 1 ? count - 1 : 1);
                    }}
                  >
                    -
                  </div>
                  {/* <input
                    {...register("count", { value: count })}
                    type="number"
                    className={styles.count}
                    value={count}
                    onChange={handleInputChange}
                  /> */}
                  <div {...register("count")} className={styles.count}>
                    {count}
                  </div>
                  <div
                    className={styles.counter__button}
                    onClick={() => {
                      setCount(count < 10 ? count + 1 : 10);
                      setValue("count", count < 10 ? count + 1 : 10);
                    }}
                  >
                    +
                  </div>
                </div>

                <button className={styles.button} type="submit">Добавить в корзину</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
