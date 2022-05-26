import { useEffect } from "react";
import styles from "./Skills.module.scss";
import { HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon } from "../SVG/Icons";
import AOS from "aos";

const About = ({ id }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id={id} data-aos="fade-up" data-aos-duration="2500">
      <h2 className={styles.header}>Skills</h2>
      <div className={styles["icons-container"]}>
        <div className={styles.card}>
          <span>HTML</span>
          <HtmlIcon />
        </div>
        <div className={styles.card}>
          <span>CSS</span>
          <CssIcon />
        </div>
        <div className={styles.card}>
          <span>JavaScript</span>
          <JavaScriptIcon />
        </div>
        <div className={styles.card}>
          <span>React</span>
          <ReactIcon />
        </div>
      </div>
    </div>
  );
};

export default About;
