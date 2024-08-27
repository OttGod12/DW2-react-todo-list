import { useAppContext } from "../../hooks";

import { TaskListItem } from "./TaskListItem";

import styles from "./TaskList.module.css";
import { Loading } from "../Loading/Loading";

export function TaskList() {
  const { tarefas, loadingCarregar } = useAppContext();

  return (
    <ul className={styles.TaskList}>
      {loadingCarregar && (
        <p>
          Carregando...
          <Loading />
        </p>
      )}

      {!loadingCarregar && !tarefas.length && (
        <p>Não há tarefas cadastradas...</p>
      )}
      {tarefas.map((item) => (
        <TaskListItem key={item.id} id={item.id} nome={item.nome} />
      ))}
    </ul>
  );
}
