"use client";

import { Button } from "@repo/ui/button";
import { css } from "react-strict-dom";
import styles from "./page.module.css";

const moreStyles = css.create({
  button: {
    backgroundColor: 'red',
  }
});

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>WEB</h1>
        <Button onClick={() => alert("alert from web next app")} style={moreStyles.button}>
          Open alert
        </Button>
      </main>
    </div>
  );
}
