"use client";
import { useForm } from "react-hook-form";
import styles from "./AuthForms.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const identifier = data.email;
      const password = data.password;

      console.log(identifier, password);
      let response = await fetch(
        "https://squid-app-ensv5.ondigitalocean.app/api/auth/local",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ identifier, password }),
        }
      );
      let result = await response.json();

      if (result.user) {
        alert("Авторизация прошла успешно");
      }
      if (result.errors) {
        alert(result.error.message);
      }
    } catch (err) {
      console.log(err);
    }
    // reset({ email: "", password: ""});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button className={styles.button} type="submit">
        Войти
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
