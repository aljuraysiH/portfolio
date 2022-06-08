import { useEffect } from "react";
import styles from "./Skills.module.scss";
import { HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon } from "../SVG/Icons";
import AOS from "aos";

const About = ({ id }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id={id}>
      <h2 data-aos="fade-up" data-aos-duration="500" className={styles.header}>
        Skills
      </h2>
      <div className={styles["icons-container"]}>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          className={styles.card}
        >
          <span>HTML</span>
          <HtmlIcon />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="1000"
          className={styles.card}
        >
          <span>CSS</span>
          <CssIcon />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="1500"
          className={styles.card}
        >
          <span>JavaScript</span>
          <JavaScriptIcon />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="2000"
          className={styles.card}
        >
          <span>React</span>
          <ReactIcon />
        </div>
      </div>
    </div>
  );
};

export default About;
