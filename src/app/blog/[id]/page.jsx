import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  console.log(params);
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17873040/pexels-photo-17873040/free-photo-of-decepcion.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Dexter</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          eveniet debitis, velit quia ex illum. Sint, repellat, quaerat culpa
          voluptas id voluptatem qui, minus vitae tempora labore similique ea
          provident? Quam porro exercitationem obcaecati maxime, ad aliquid quia
          neque tenetur fugiat reprehenderit ex quae molestiae cum.
          <br />
          <br />
          Accusamus odit commodi incidunt ullam? Optio, tempore non possimus
          aperiam accusantium vel officiis quod, expedita at nihil illum
          voluptatum porro, natus quia autem recusandae? Dignissimos fugiat
          earum doloremque illum, sed, maiores id natus accusantium ducimus
          dolorum nisi consequuntur, maxime magni obcaecati perspiciatis nulla
          assumenda. Soluta est dolorum quo illum obcaecati, architecto facere
          pariatur, labore quia aliquam aut officia modi voluptatibus placeat
          temporibus. Neque hic ipsum sed rem, harum asperiores quidem dolor
          autem architecto saepe velit ipsam repellat. Laborum iste corrupti
          dolorem eos, hic at, odit obcaecati placeat esse praesentium repellat
          similique natus repellendus quo quas alias cum. Quisquam harum quis,
          voluptatum odit quo sed deserunt atque fugit corporis exercitationem
          labore animi iusto dolorem enim id assumenda obcaecati.
          <br />
          <br />
          Exercitationem officiis tempora eveniet unde qui numquam sit corrupti
          in quo nemo eligendi et, a cupiditate, nobis, minima expedita quasi
          officia animi possimus! Praesentium enim voluptatum cumque magni
          exercitationem repudiandae sed iste, neque eligendi eum numquam modi.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
