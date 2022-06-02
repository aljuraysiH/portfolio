import { heroVariantsLeft, heroVariantsRight } from "./HeroVariants";
import styles from "./Hero.module.scss";
import SVG from "../SVG/SVG";
import { TwitterLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <>
      <div
        className={`${i18n.language === "en" ? styles.container : styles.ar}`}
      >
        <motion.div
          className={styles.left}
          variants={heroVariantsLeft}
          initial="hidden"
          animate="visiable"
        >
          <h2 className={styles["hero-header"]}>
            <span>
              {t("welcome")} <br></br>
            </span>
            {t("name")}
          </h2>
          <p className={styles["hero-text"]}>{t("info")}</p>
          <a href="/" className={`btng ${styles.btn}`}>
            <span></span>
            {/* Hire me */}
            {t("hire_me")}
          </a>
          <div className={styles.socials}>
            <a
              href="https://github.com/aljuraysiH"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubLogo weight="regular" className={styles.social} />
            </a>
            <a
              href="https://www.linkedin.com/in/hamad-aljuraysi/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedinLogo weight="regular" className={styles.social} />
            </a>
            <a
              href="https://twitter.com/HamadDev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <TwitterLogo weight="regular" className={styles.social} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className={styles["img-container"]}
          variants={heroVariantsRight}
          initial="hidden"
          animate="visiable"
        >
          <SVG />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
