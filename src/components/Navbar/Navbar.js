import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import Toggle from "../Toggle/Toggle";
import { useTranslation } from "react-i18next";

const Navbar = ({ language, setLanguage }) => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Toggle
        onClick={toggleTheme}
        theme={theme}
        language={language}
        setLanguage={setLanguage}
      />

      <div className={styles.navbar}>
        <Link to={"/"}>
          <p className={styles.logo}>{t("logo")}</p>
        </Link>
        <nav className={`${styles.nav} ${toggle ? "" : styles.hidden}`}>
          <a href="/" onClick={() => setToggle(false)}>
            {t("about")}
          </a>
          <a href="#projects" onClick={() => setToggle(false)}>
            {t("projects")}
          </a>
          <a href="#skills" onClick={() => setToggle(false)}>
            {t("skills")}
          </a>
          <a href="/" className="btng" onClick={() => setToggle(false)}>
            <span></span>
            {t("contact")}
          </a>
        </nav>
        <button
          className={`${styles.menu} ${toggle ? styles.open : ""} ${
            i18n.language === "ar" ? styles.ar : styles.en
          }`}
          onClick={() => setToggle(!toggle)}
        ></button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
