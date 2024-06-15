"use client"
import { useEffect } from 'react';
import styles from './home.module.scss';
import {useSearchParams} from "next/navigation"

export default function Home() {

    const searchParams = useSearchParams();
    const getGoogleAuth = async () => {
      const code = searchParams.get("code");

      console.log(code);
      if (code) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DB_HOST}/strapi-google-auth/user-profile`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
              "Content-Type": "application/json",
            },
            data: { code: code },
          }
        );
        if (response) {
          const answer = await response.json();
          console.log(response);
        }
      }
    };

    useEffect(() => {
      getGoogleAuth()
    }, [])

  return (
    <div className={styles.root}>
      <h1>Откройте дверь в мир темной элегантности </h1>
      <p>
        Одежда, вдохновленная готической эстетикой и сдержанной элегантностью,
        для тех, кто ищет нечто особенное
      </p>
      <span></span>
    </div>
  );
}
