import { useAppContext } from "../../hooks";

import { TaskListItem } from "./TaskListItem";

import styles from "./TaskList.module.css";

export function TaskList() {
  const { tarefas } = useAppContext();

  return (
    <ul className={styles.TaskList}>
      {!tarefas.length && <p>Não há tarefas cadastradas...</p>}
      {tarefas.map((item) => (
        <TaskListItem key={item.id} id={item.id} nome={item.nome} />
      ))}
    </ul>
  );
}
