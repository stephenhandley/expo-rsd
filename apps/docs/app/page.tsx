"use client";

import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>DOCS</h1>
        <Button onClick={() => alert("alert from docs next app")}>
          Open alert
        </Button>
      </main>
    </div>
  );
}
