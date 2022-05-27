import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Toggle onClick={toggleTheme} theme={theme} />

      <div className={styles.navbar}>
        <Link to={"/"}>
          <p className={styles.logo}>H_Aljuraysi</p>
        </Link>
        <nav className={`${styles.nav} ${toggle ? "" : styles.hidden}`}>
          <a href="/" onClick={() => setToggle(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setToggle(false)}>
            Projects
          </a>
          <a href="#skills" onClick={() => setToggle(false)}>
            Skills
          </a>
          <a href="/" className="btng" onClick={() => setToggle(false)}>
            <span></span>
            Contact
          </a>
        </nav>
        <button
          className={`${styles.menu} ${toggle ? styles.open : ""}`}
          onClick={() => setToggle(!toggle)}
        ></button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
