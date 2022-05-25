import styles from "./Toggle.module.scss";
const Toggle = ({ onClick, theme }) => {
  return (
    <div
      className={`${styles.toggle} ${theme === "dark" ? styles.night : ""}`}
      onClick={onClick}
    >
      <div className={styles.day}></div>
      <div>
        <div className={`${styles.shape} ${styles.sm}`}></div>
        <div className={`${styles.shape} ${styles.sm}`}></div>
        <div className={`${styles.shape} ${styles.md}`}></div>
        <div className={`${styles.shape} ${styles.lg}`}></div>
      </div>
    </div>
  );
};

export default Toggle;
