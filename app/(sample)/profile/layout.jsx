"use client";
import styles from "./profile.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();
  const [cookie, setCookie] = useState(false);
  const router = useRouter();

  const onClick = () => {
    if (window.confirm("Вы действительно хотите выйти из аккаунта?")) {
      deleteCookie("user");
      localStorage.setItem("user", null);
      router.push("/authorization");
    }
  };
  useEffect(() => {
    getCookie("user")
      ? setCookie(getCookie("user"))
      : router.push("/authorization");
  }, [cookie]);

  return (
    cookie && (
      <div className={styles.profile}>
        <div
          className={`${styles.profile__content} ${
            pathname === "/profile/user"
              ? styles["profile__user-padding"]
              : styles["profile__orders-padding"]
          }`}
        >
          <h1>Мой аккаунт</h1>
          <ul className={styles.profile__checkbox}>
            <li className={pathname === "/profile/user" ? styles.active : ""}>
              <Link href={"/profile/user"}>Личные данные</Link>
            </li>
            <li className={pathname === "/profile/orders" ? styles.active : ""}>
              <Link href={"/profile/orders"}>Мои заказы</Link>
            </li>
          </ul>
          {children}
          <button onClick={() => onClick()} className={styles.profile__logout}>
            Выйти с аккаунта
          </button>
        </div>
      </div>
    )
  );
}
