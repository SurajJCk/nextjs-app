import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19343942/pexels-photo-19343942/free-photo-of-the-vatican-is-a-beautiful-place-to-visit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01-01-2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sit
          laborum sequi assumenda corrupti. Eveniet accusantium illo commodi
          itaque vel minus fugit molestiae. Assumenda molestiae doloribus
          eveniet possimus, libero ducimus.
        </p>
        <Link href="/blog/post" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
