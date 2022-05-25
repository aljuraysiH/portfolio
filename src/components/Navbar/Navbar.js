import styles from "./Navbar.module.scss";
import { Link, Outlet, NavLink } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to={"/"}>
          <p className={styles.logo}>H_Aljuraysi</p>
        </Link>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/about"}
          >
            About
          </NavLink>
          <a href="#projects">Projects</a>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/skills"}
          >
            Skills
          </NavLink>
          <a href="/" className="btng">
            <span></span>
            Contact
          </a>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
