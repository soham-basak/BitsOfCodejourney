"use client";

import { useContext } from "react";
import styles from "./darkMode.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkMode = () => {
  const { toggleMode, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
