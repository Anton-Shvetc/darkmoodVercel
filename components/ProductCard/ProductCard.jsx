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

useEffect(() => {
  const fetchData = async () => {
    const bearer_token =
      "c2e565482d2a21dfe2571318a30d2a50385cee24ae278a97a53f43d2e8ca6acb6340cfab1af90b2c56caa0b50b320274ec0fc607b3fa73007a6fe4f42c03d9e0ac36e10a3938033e87b004a6771e23c7b0ab17758d6761270092abba7f5b9d49213362e7566fb7e5e7231241d5bc71a7dc13e5ff9d582f302f7ca58f1b90b2b5";
    const bearer = "Bearer " + bearer_token;

    fetch("https://1e14-185-67-246-119.ngrok-free.app/api/testdatas", {
        //  fetch("http://darkmode-serve.ru:443/api/testdatas", {
           method: "GET",
           headers: {
             Authorization: bearer,
             "Content-Type": "application/json",
           },
         })
           .then((response) => {
             if (!response.ok) {
               throw new Error("Network response was not ok");
             }
             return response.json();
           })
           .then((data) => {
             console.log(data);
           })
           .catch((error) => {
             console.error(
               "There has been a problem with your fetch operation:",
               error
             );
           });
  };

  fetchData();
}, []);
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

                <button className={styles.button} type="submit">
                  Добавить в корзину
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
