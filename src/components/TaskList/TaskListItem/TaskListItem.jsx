import { TIPO_BOTAO } from "../../TaskButton/constants";
import { TaskButton } from "../../TaskButton/TaskButton";
import styles from "./TaskListItem.module.css";

export function TaskListItem(props) {
  const { nome } = props;
  return (
    <li className={styles.TaskListItem}>
      {nome}
      <TaskButton texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
    </li>
  );
}
