import { useEffect } from "react";
import styles from "./Skills.module.scss";
import { HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon } from "../SVG/Icons";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const About = ({ id }) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id={id} data-aos="fade-up" data-aos-duration="1500">
      <h2 className={styles.header}>{t("skills")}</h2>
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
