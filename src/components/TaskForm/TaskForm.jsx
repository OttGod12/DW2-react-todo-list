import styles from "./TaskForm.module.css";
import { TaskButton } from "../TaskButton/TaskButton";
import { TaskInput } from "../TaskInput/TaskInput";
import { useState } from "react";
import { useAppContext } from "../../hooks";

export function TaskForm() {
  const { adicionarTarefa } = useAppContext();
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
      <TaskButton texto="+" />
    </form>
  );
}
