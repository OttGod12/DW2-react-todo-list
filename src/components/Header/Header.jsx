import styles from "./Header.module.css";

export function Header(props) {
  return (
    <div className={styles.Header}>
      <h1>
        <span>TODO </span>list
      </h1>
    </div>
  );
}
