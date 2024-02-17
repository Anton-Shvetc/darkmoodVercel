"use client";
import styles from "./ProductCard.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { usePathname } from "next/navigation";

import imageUrl from "@/public/images/main-card-img.png";
export const ProductCard = () => {
  const pathname = usePathname();
  const idPath = pathname.replace("/catalog/", "");

  const { handleSubmit, register, setValue } = useForm();
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState("M");

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  const onSubmit = (formData) => {
    let cartArray = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : false;
    let existingItem = cartArray
      ? cartArray.find((item) => item.id == idPath)
      : false;

    if (existingItem && existingItem !== undefined) {
      cartArray = cartArray.filter((cart) => {
        return cart.id != idPath;
      });

      cartArray.push({
        ...formData,
        id: +idPath,
        title: data.attributes.title,
        imageUrl: data.attributes.images.data[0].attributes.url,
      });
    } else {
      cartArray
        ? cartArray.push({
            ...formData,
            id: +idPath,
            title: data.attributes.title,
            imageUrl: data.attributes.images.data[0].attributes.url,
          })
        : (cartArray = [
            {
              ...formData,
              id: +idPath,
              title: data.attributes.title,
              imageUrl: data.attributes.images.data[0].attributes.url,
            },
          ]);
    }

    localStorage.setItem("cart", JSON.stringify(cartArray));
  };

  // const handleInputChange = (e) => {
  //   const inputValue = e.target.value < 10 ? e.target.value : 10;
  //   setCount(inputValue);
  //   setValue("count", inputValue);
  // };

  const getCardsData = async () => {
    const response = await fetch(
      `https://darkmode-serve.ru/api/catalogs/${idPath}?populate=images`,
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
    setData(json.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCardsData();
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

  if (!isLoading && data.length <= 0) {
    return <>Загрузка страницы</>;
  }

  return !isLoading && data ? (
    <div className={styles.box}>
      <h1 className={styles.title}>{data.attributes.title}</h1>

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
            {data.attributes.images.data.map((item, index) => (
              <div key={index} className={styles.swipItem}>
                <div className={styles.imgBox}>
                  <img
                    src={`https://darkmode-serve.ru${item.attributes.url}`}
                    alt="slides"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.description}>
          <div className={styles.price}>{data.attributes.price}</div>
          <div className={styles.subTitle}>{dataCard.subTitle}</div>
          <div className={styles.description__text}>{dataCard.description}</div>
          <div className={styles.structure}>
            <p>{data.attributes.fabrics}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__box}>
              <p className={styles.label}>Выберите размер:</p>

              <ul className={styles.sizes}>
                {data.attributes.sizes.map((size) => {
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
  ) : (
    <>Загрузка страницы</>
  );
};
