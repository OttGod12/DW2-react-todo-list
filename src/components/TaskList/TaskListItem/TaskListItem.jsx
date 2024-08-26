import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { TIPO_BOTAO } from "../../TaskButton/constants";
import { TaskButton } from "../../TaskButton/TaskButton";
import styles from "./TaskListItem.module.css";
import { TaskInput } from "../../TaskInput/TaskInput";

export function TaskListItem(props) {
  const { id, nome } = props;

  const [estaEditando, setEstaEditando] = useState(false);

  const { removerTarefa, editarTarefa } = useAppContext();

  return (
    <li className={styles.TaskListItem}>
      {estaEditando && (
        <TaskInput
          onBlur={() => setEstaEditando(false)}
          onChange={(event) => editarTarefa(id, event.currentTarget.value)}
          autoFocus
          value={nome}
        />
      )}

      {!estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}
      <TaskButton
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
}
