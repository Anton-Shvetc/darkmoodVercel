"use client";
import { useForm } from "react-hook-form";
import styles from "./AuthForms.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      let response = await fetch(
        "https://squid-app-ensv5.ondigitalocean.app/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );

      let result = await response.json();

      if (result.user) {
        alert("Регистрация прошла успешно");
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
        Войти через Google
      </button>
    </form>
  );
};
