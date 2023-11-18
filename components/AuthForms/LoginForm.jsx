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

  const onSubmit = (data) => {
    console.log(data);
    reset({ email: "", password: "", confirmPassword: "" });
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
