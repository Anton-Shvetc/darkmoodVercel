import { useForm } from "react-hook-form";
import styles from "./AuthForms.module.scss";
import googleIcon from "@/public/icons/google.svg";
import Image from "next/image";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
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
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_HOST}/api/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ identifier, password }),
        }
      );

      if (!response.ok) {
        if (response.status === 400) {
          enqueueSnackbar("Неверный логин или пароль", {
            variant: "error",
          });
          return;
        }
        enqueueSnackbar("Произошла какая-то ошибка", {
          variant: "error",
        });
        return;
      }

      let result = await response.json();
      if (result.user) {
        const jwt = result.jwt;
        const userData = result.user;
        localStorage.setItem("user", JSON.stringify(userData));
        setCookie("user", jwt);

        enqueueSnackbar("Авторизация прошла успешно", {
          variant: "success",
        });
        router.push("/profile/user");
      }
      if (result.error) {
        enqueueSnackbar(result.error.message, {
          variant: "error",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleAuth = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_HOST}/strapi-google-auth/init`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    if (response) {
      const answer = await response.json();
      console.log(answer);
      window.location.replace(answer.url);
    }
    //4%2F0ATx3LY7-1JdCe3WdUZ8-3nbw8_-PKkmmjGgpC5xGeZ6F6tjqR9cOhoktUrrhKAi0Hbr57g&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent
  };

  return (
    <>
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
          <div className={styles.form__custom_checkbox}>
            <input
              className={styles.custom_checkbox}
              type="checkbox"
              id="comp"
              name="comp"
              value="value"
            />
            <label for="comp">Чужой компьютер</label>
          </div>
          <div> Забыли пароль?</div>
        </div>

        <button className={styles.button} type="submit">
          Войти
        </button>
      </form>
      <button
        className={`${styles.button} ${styles.button_transparent}`}
        type="button"
        // href="#"
        onClick={handleGoogleAuth}
      >
        <span>
          <Image src={googleIcon} width={0} height={0} alt="google" />
        </span>
        Войти через Google
      </button>
    </>
  );
};
