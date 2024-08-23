import styles from "./TaskList.module.css";
import { TaskListItem } from "./TaskListItem";

export function TaskList(props) {
  const tarefas = [
    { id: 1, nome: "Item 1" },
    { id: 2, nome: "Item 2" },
    { id: 3, nome: "Item 3" },
    { id: 4, nome: "Item 4" },
  ];

  return (
    <ul className={styles.TaskList}>
      {tarefas.map((item) => (
        <TaskListItem key={item.id} nome={item.nome} />
      ))}
    </ul>
  );
}
