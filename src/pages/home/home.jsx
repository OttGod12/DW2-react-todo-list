import { TaskForm, TaskList } from "../../components";
import { useAppContext } from "../../hooks";

import styles from "./Home.module.css";

export function Home() {
  const { tarefas, setTarefas } = useAppContext();

  return (
    <div className={styles.Home}>
      <TaskForm />
      <TaskList />
    </div>
  );
}
