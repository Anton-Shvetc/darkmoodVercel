'use client';
import styles from './Cart.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/public/icons/arrow-cart.svg';
import imageUrl from '@/public/images/card-img.png';
import { useState, useEffect } from 'react';

const arrProduct = [
  {
    id: 1,
    name: 'Футболка DARKMOOD',
    price: 46.9,
    imageUrl: imageUrl,
    size: 'XS',
  },
  {
    id: 2,
    name: 'Футболка DARKMOOD',
    price: 40.99,
    imageUrl: imageUrl,
    size: 'S',
  },
  {
    id: 3,
    name: 'Футболка DARKMOOD',
    price: 49.8,
    imageUrl: imageUrl,
    size: 'M',
  },
];

const dataSize = ['XS', 'S', 'M', 'L', 'XL'];

export default function Cart({ isCartOpen, handleCloseCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [price, setPrice] = useState(0);
  const [valueDiscount, setValueDiscount] = useState(0);
  const [typeDiscount, setTypeDiscount] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function applyDiscount(price, type, value) {
    if (type === 'percent') {
      const discountedPrice = price * (1 - value / 100);
      return parseFloat(discountedPrice.toFixed(2));
    } else if (type === 'fixed') {
      const discountedPrice = price - value;
      return parseFloat(discountedPrice.toFixed(2));
    } else {
      return price;
    }
  }

  useEffect(() => {
    if (arrProduct.length > 0) {
      const total = arrProduct.reduce((accumulator, product) => {
        return accumulator + product.price;
      }, 0);
      setPrice(applyDiscount(total, typeDiscount, valueDiscount));
    } else {
      return;
    }
  }, [arrProduct, valueDiscount]);

  const handleApplyDiscount = () => {
    if (promoCode === 'DISCOUNT10') {
      setValueDiscount(10);
      setTypeDiscount('percent');
      console.log('Скидка 10%');
    } else if (promoCode === 'DISCOUNT20') {
      setValueDiscount(20);
      setTypeDiscount('fixed');
      console.log('Скидка 20 USD');
    } else {
      setValueDiscount(0);
      setTypeDiscount('');
      console.log('Отменить скидку');
    }
  };

  const handleCheckout = () => {
    handleCloseCart();
    //сумма заказа и товары
    //перенаправить на стр заказа
  };

  return (
    <>
      <span
        onClick={() => handleCloseCart()}
        className={`${styles.blur} ${isCartOpen ? styles.blur_opened : ''}`}
      />

      <div
        onMouseLeave={() => handleCloseCart()}
        className={`${styles.cart} ${isCartOpen ? styles.open : ''}`}>
        <div onClick={() => handleCloseCart()} className={styles.cart__exit}>
          <Image
            className={styles.cart__icon}
            src={Arrow}
            width="32px"
            height="32"
            alt="Arrow icon exit from cart"
            priority={true}
          />
          <span>ПРОДОЛЖИТЬ ПОКУПКИ</span>
        </div>

        <div className={styles.cart__header}>
          <div />
          <h2>Мои покупки</h2>
          <div />
        </div>

        <ul className={styles.cart__list}>
          {arrProduct.map((product) => (
            // <li key={product.id}>{product.name}</li>
            <li key={product.id}>
              <div className={styles.product__title}>
                <h3>{product.name}</h3>
                <button>{`${product.price} USD`}</button>
              </div>

              <div className={styles.product__content}>
                <div className={styles.product__image}>
                  <Image
                    src={imageUrl}
                    width="100px"
                    height="100px"
                    alt="Product image"
                    priority={true}
                  />
                </div>
                <div className={styles.product__info}>
                  <p>Размер:</p>
                  <ul className={styles.product__size}>
                    {dataSize.map((size, i) => (
                      <li
                        key={i}
                        className={
                          product.size === size ? styles.product__active : ''
                        }>
                        {size}
                      </li>
                    ))}
                  </ul>
                  <p>Количество:</p>
                  <div className={styles.product__counter}>
                    <span>-</span>
                    <div className={styles.count}>
                      <span>1</span>
                    </div>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className={styles.cart__footer}>
          <li className={styles.cart__box}>
            <h3>Промокод</h3>
            <div className={styles['cart__promo-code']}>
              <input
                type="text"
                // value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              {/* {errors.promoCode && (
            <span className={{ color: red }}>Промокод недействителен</span>
          )} */}
              <button
                disabled={isButtonDisabled}
                onClick={() => handleApplyDiscount()}>
                ПРИМЕНИТЬ
              </button>
            </div>
          </li>

          <li className={styles.cart__order}>
            <div className={styles.cart__info}>
              <h3>итого</h3>
              <p>{`${price} USD`}</p>
            </div>

            <Link href="/order">
              <button onClick={() => handleCheckout()}>Оформить заказ</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
