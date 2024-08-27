import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { TIPO_BOTAO } from "../../TaskButton/constants";
import { TaskButton } from "../../TaskButton/TaskButton";
import styles from "./TaskListItem.module.css";
import { TaskInput } from "../../TaskInput/TaskInput";
import { Loading } from "../../Loading/Loading";

export function TaskListItem(props) {
  const { id, nome } = props;

  const [estaEditando, setEstaEditando] = useState(false);

  const { removerTarefa, editarTarefa, loadingEditar, loadingDeletar } =
    useAppContext();

  const onBlurTarefa = (event) => {
    console.log("on blur");
    const nomeTarefa = event.currentTarget.value;
    console.log(nomeTarefa);
    editarTarefa(id, nomeTarefa);
    setEstaEditando(false);
  };

  const loadingEstaEditando = loadingEditar == id;
  const loadingEstaDeletando = loadingDeletar == id;

  return (
    <li className={styles.TaskListItem}>
      {(loadingEstaEditando || estaEditando) && (
        <TaskInput onBlur={onBlurTarefa} autoFocus defaultValue={nome} />
      )}

      {!loadingEstaEditando && !estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}

      {loadingEstaEditando && <Loading />}

      <TaskButton
        texto={loadingEstaDeletando ? <Loading /> : "-"}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
}
