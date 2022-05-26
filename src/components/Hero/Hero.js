import { useEffect } from "react";
import useTheme from "../../hooks/useTheme";
import Toggle from "../Toggle/Toggle";
import { heroVariantsLeft, heroVariantsRight } from "./HeroVariants";
import styles from "./Hero.module.scss";
import SVG from "../SVG/SVG";
import { TwitterLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Toggle onClick={toggleTheme} theme={theme} />

      <div className={styles.container}>
        <motion.div
          className={styles.left}
          variants={heroVariantsLeft}
          initial="hidden"
          animate="visiable"
        >
          <h2 className={styles["hero-header"]}>
            <span>
              Hey! I Am <br></br>
            </span>{" "}
            HAMAD ALJURAYSI
          </h2>
          <p className={styles["hero-text"]}>
            Frontend Web Developer with high level of experience in web
            development, producting the quality work.
          </p>
          <a href="/" className={`btng ${styles.btn}`}>
            <span></span>
            Hire me
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
