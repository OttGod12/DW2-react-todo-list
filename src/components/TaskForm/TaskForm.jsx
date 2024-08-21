import styles from "./TaskForm.module.css";
import { TaskButton } from "../TaskButton/TaskButton";
import { TaskInput } from "../TaskInput/TaskInput";

export function TaskForm() {
  return (
    <form className={styles.TaskForm}>
      <TaskInput />
      <TaskButton texto="+" />
    </form>
  );
}
