import { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
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
