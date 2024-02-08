import { useForm } from "react-hook-form";
import styles from "./AuthForms.module.scss";
import googleIcon from "@/public/icons/google.svg";
import Image from "next/image";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    // Установить время жизни куки при чеке - чужой компьютер
    // setCookie("user", jwt, { maxAge: 60 * 60 });



    const identifier = data.email;
    const password = data.password;
    try {
      let response = await fetch("https://darkmode-serve.ru/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ identifier, password }),
      });
      let result = await response.json();

      if (result.user) {
        const jwt = result.jwt;
        setCookie("user", jwt);
        alert("Авторизация прошла успешно");
        router.push("/profile/user");
      }
      if (result.error) {
        alert(result.error.message);
      }
    } catch (err) {
      console.log(err);
    }
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
      <div className={styles.form__optional}>
        <div>
          <label> Чужой компьютер</label>
        </div>
        <div> Забыли Пароль?</div>
      </div>

      <button className={styles.button} type="submit">
        Войти
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
