import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>BitsOfCodejourney</h1>
          <h2 className={styles.imgDesc}>
            Empower My Ambitions Through Innovative Code
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Crafting Code Chronicles</h1>
          <p className={styles.desc}>
            Step into the captivating world of coding through the lens of my
            dedicated journey. With each line of code, I'm on a mission to fuse
            innovation with development, translating ideas into impactful
            digital solutions. This section is a testament to my relentless
            pursuit of honing my skills and sharing insights gathered along the
            way.
            <br />
            <br />
            Together, we'll embark on a narrative-driven exploration of web
            development, unveiling the layers of creativity, challenges, and
            breakthroughs that define this exhilarating path. From the triumphs
            to the trials, "Crafting Code Chronicles" aims to encapsulate the
            essence of my coding odyssey, serving as an inspiration for fellow
            enthusiasts, learners, and creators in the ever-evolving tech
            landscape.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Shaping Digital Horizons</h1>
          <p className={styles.desc}>
            Welcome to the realm where the pixels meet imagination, and web
            development is a canvas for endless innovation. In "Shaping Digital
            Horizons," I invite you to witness my creative vision unfold. This
            section is a collection of insights and musings as I navigate
            through the vast landscape of coding, embracing its dynamic
            challenges with unwavering curiosity.
            <br />
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
