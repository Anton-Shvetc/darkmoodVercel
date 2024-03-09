"use client";
import { useForm } from "react-hook-form";
import styles from "./AuthForms.module.scss";
import googleIcon from "@/public/icons/google.svg";
import Image from "next/image";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
   

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_HOST}/api/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
          }),
        }
      );

      const result = await response.json();

      if (result.user) {
        alert("Регистрация прошла успешно");
        const jwt = result.jwt;
        setCookie("user", jwt);

        router.push("/profile/user");

      }
      if (result.errors) {
        alert(result.error.message);
      }
    } catch (err) {
      console.log(err);
    }
    reset({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label>Имя</label>
        <input
          type="text"
          {...register("username", {
            required: "Обязателеное поле",
            minLength: {
              value: 3,
              message: "Минимальная длина имени: 3 символова",
            },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          {...register("email", {
            required: "Email обязателен",
            pattern: { value: /^\S+@\S+$/i, message: "Некорректный email" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Пароль</label>
        <input
          type="password"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Минимальная длина пароля: 6 символов",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>Подтвердить пароль</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Подтвердите пароль",
            validate: (val) => {
              if (watch("password") != val) {
                return "Пароли должны совпадать";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <button className={styles.button} type="submit">
        Зарегистрироваться
      </button>
      <button
        className={`${styles.button} ${styles.button_transparent}`}
        type="button"
        href="#"
      >
        <span>
          <Image src={googleIcon} width={0} height={0} alt="google" />
        </span>
        Зарегистрироваться через Google
      </button>
    </form>
  );
};
