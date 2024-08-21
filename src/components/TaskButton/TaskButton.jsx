import { TIPO_BOTAO } from "./constants";
import styles from "./TaskButton.module.css";

export function TaskButton(props) {
  const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps } = props;

  return (
    <button className={styles.TaskButton} tipo={tipo} {...outrasProps}>
      {texto}
    </button>
  );
}
