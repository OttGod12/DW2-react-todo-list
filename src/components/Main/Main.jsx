import styles from "./Main.module.css";

export function Main(props) {
  const { children } = props;

  return <div className={styles.Main}>{children}</div>;
}
