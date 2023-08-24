import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TestBlog</h1>
          <p className={styles.desc}>TestDesc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
