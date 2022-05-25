import { useEffect } from "react";

import "aos/dist/aos.css";
import styles from "./Card.module.scss";
import AOS from "aos";

const Card = ({ img, name, description, link = "" }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className={styles.flipCard}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className={styles.card}>
        <div className={styles["card-front"]}>
          <img src={img} alt="img" />
        </div>
        <div className={styles["card-back"]}>
          <h4>{name}</h4>
          <p>{description}</p>
          <a
            href={link}
            className={styles.btn}
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
            <span></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
