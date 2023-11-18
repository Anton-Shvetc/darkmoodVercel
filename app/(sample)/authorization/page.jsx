
'use client'
import styles from "./authorization.module.scss";
import {RegisterForm} from "@/components/AuthForms/RegisterForm"
import { LoginForm } from "@/components/AuthForms/LoginForm";
import { useState } from "react";

export default function Authorization() {

	const [activeTab, setActiveTab] = useState("login")
  return (
    <section className={styles.container}>
      <div className={styles.tabs}>
        <div
          onClick={() => {
            setActiveTab("login");
          }}
          className={
            activeTab === "login"
              ? `${styles.tab} ${styles.tab_active}`
              : styles.tab
          }
        >

          Войти
        </div>
        <div
          onClick={() => {
            setActiveTab("signin");
          }}
          className={
            activeTab === "signin"
              ? `${styles.tab} ${styles.tab_active}`
              : styles.tab
          }
        >
          Зарегистрироваться
        </div>
      </div>

      {activeTab === "login" ? (
        <>
          <h2 className={styles.title}>Войти</h2>
          <LoginForm />
        </>
      ) : (
        <>
          <h2 className={styles.title}>Регистрация</h2>
          <RegisterForm />
        </>
      )}
    </section>
  );
}
