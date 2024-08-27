import styles from "./TaskForm.module.css";

import { TaskButton, TaskInput, Loading } from "../../components";
import { useState } from "react";
import { useAppContext } from "../../hooks";

export function TaskForm() {
  const { adicionarTarefa, loadingCriar } = useAppContext();
  const [nomeTarefa, setNomeTarefa] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!nomeTarefa) return;

    adicionarTarefa(nomeTarefa);
    setNomeTarefa("");
  };

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  return (
    <form className={styles.TaskForm} onSubmit={handleFormSubmit}>
      <TaskInput value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <TaskButton texto={loadingCriar ? <Loading /> : "+"} />
    </form>
  );
}
