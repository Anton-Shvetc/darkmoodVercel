"use client";
import styles from "./ProductCard.module.scss";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import imageUrl from "@/public/images/main-card-img.png";
export const ProductCard = () => {
  const pathname = usePathname();
  const idPath = pathname.replace("/catalog/", "");

  const { handleSubmit, register, setValue } = useForm();
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

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
        price: data.attributes.price,
        imageUrl: data.attributes.images.data[0].attributes.url,
      });
    } else {
      cartArray
        ? cartArray.push({
            ...formData,
            id: +idPath,
            title: data.attributes.title,
            price: data.attributes.price,
            imageUrl: data.attributes.images.data[0].attributes.url,
          })
        : (cartArray = [
            {
              ...formData,
              id: +idPath,
              title: data.attributes.title,
              price: data.attributes.price,
              imageUrl: data.attributes.images.data[0].attributes.url,
            },
          ]);
    }

    localStorage.setItem("cart", JSON.stringify(cartArray));
    // setOpenSuccessModal(true);
    alert("Товар успешно добавлен")
    // window.location.reload();
  };

  // const handleInputChange = (e) => {
  //   const inputValue = e.target.value < 10 ? e.target.value : 10;
  //   setCount(inputValue);
  //   setValue("count", inputValue);
  // };

  const getCardsData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_HOST}/api/catalogs/${idPath}?populate=images`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
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

  useEffect(() => {
    if (openSuccessModal) {
      setTimeout(() => {
        setOpenSuccessModal(false);
      }, 4000);
    }
  }, [openSuccessModal]);

  // const dataCard = {
  //   id: 1,
  //   title: "Футболка Darkmood",
  //   price: "49.99 USD",
  //   subTitle: "Тонкая. Легкая. Черная.",
  //   description: [
  //     "Футболка линейки DARKMOOD - первая единица контрбрендовой линии одежды. Потрясающие качество в совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые фирмы.",
  //   ],
  //   fabrics: ["Ткань сорта пенье"],
  //   structure: ["95% cotton", "5% spandex"],
  //   sizes: ["S", "M", "L", "XL", "XXL"],
  //   quantity: 10,
  //   details: ["Плотность 170 г/м²"],
  //   images: [imageUrl, imageUrl, imageUrl],
  // };

  if (!isLoading && data.length <= 0) {
    return <>Загрузка страницы</>;
  }

  const items =
    !isLoading &&
    data &&
    data.attributes.images.data.map((item, index) => (
      <div key={index} className={styles.swipItem}>
        <div className={styles.imgBox}>
          <img
            className={styles.slider__slide}
            src={process.env.NEXT_PUBLIC_DB_HOST + item.attributes.url}
            alt="slides"
          />
        </div>
      </div>
    ));

  return !isLoading && data ? (
    <div className={styles.box}>
      <h1 className={styles.title}>{data.attributes.title}</h1>

      <div className={styles.info}>
        <div className={styles.slider}>
          {/* <Carousel
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
          </Carousel> */}
          {!isLoading && (
            <AliceCarousel
              mouseTracking
              disableDotsControls={true}
              infinite={true}
              items={items}
              renderPrevButton={({ isDisabled }) => {
                if (!isDisabled) {
                  return (
                    <p
                      style={{
                        fontSize: "34px",
                        left: "0px",
                        border: "1px solid #ffffff",
                        borderRadius: "100%",
                      }}
                      className="p-1 absolute left-0 top-40"
                    >
                      <MdArrowBack />
                    </p>
                  );
                }
              }}
              renderNextButton={({ isDisabled }) => {
                if (!isDisabled) {
                  return (
                    <p
                      style={{
                        fontSize: "34px",
                        right: "0px",
                        border: "1px solid #ffffff",
                        borderRadius: "100%",
                      }}
                      className="p-1 absolute right-0 top-40"
                    >
                      <MdArrowForward />
                    </p>
                  );
                }
              }}
            />
          )}
        </div>
        <div className={styles.description}>
          <div className={styles.price}>{data.attributes.price} RUB</div>
          <div className={styles.subTitle}>{data.subTitle}</div>
          <div className={styles.description__text}>{data.description}</div>
          <div className={styles.structure}>
            <p>{data.attributes.fabrics}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__box}>
              <p className={styles.label}>Выберите размер:</p>

              <ul className={styles.sizes}>
                {data.attributes.sizes.map((size, index) => {
                  const isActive = index === activeSize;

                  return (
                    <li
                      className={isActive ? styles.size_active : styles.size}
                      key={size}
                      {...register("size", { value: data.attributes.sizes[0] })}
                      onClick={() => {
                        setActiveSize(index);
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
                  <div
                    {...register("count", { value: count })}
                    className={styles.count}
                  >
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

                <div style={{ height: "75px" }}>
                  <button className={styles.button} type="submit">
                    Добавить в корзину
                  </button>
                  {/* {openSuccessModal && <p>Товар успешно добавлен</p>} */}
                </div>
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
