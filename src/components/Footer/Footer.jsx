import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 BitsOfCodejourney. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={20}
          height={20}
          alt="BitsOfCodejourney FB"
          className={styles.icon}
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          alt="BitsOfCodejourney Insta"
          className={styles.icon}
        />
        <Image
          src="/3.png"
          width={20}
          height={20}
          alt="BitsOfCodejourney X"
          className={styles.icon}
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          alt="BitsOfCodejourney YT"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
