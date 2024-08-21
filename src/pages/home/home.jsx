import { TaskForm } from "../../components/TaskForm/TaskForm";
import { TaskList } from "../../components/TaskList/TaskList";

import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.Home}>
      <TaskForm />
      <TaskList />
    </div>
  );
}
