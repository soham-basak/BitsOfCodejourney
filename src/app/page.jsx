import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Unveiling My Ongoing Coding Odyssey.</h1>
        <p className={styles.desc}>
          Embark on my coding journey—exploring web realms, mastering languages,
          and shaping digital destinies, one keystroke at a time.
        </p>
        <button className={styles.button}>See Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}
