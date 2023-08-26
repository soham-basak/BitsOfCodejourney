"use client";

import { useSession } from "next-auth/react";
import styles from "./page.module.css";

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
