import styles from "./TaskInput.module.css";

export function TaskInput(props) {
  return <input type="text" className={styles.TaksInput} {...props} />;
}
