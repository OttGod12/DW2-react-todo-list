import styles from "./TaskButton.module.css";

export function TaskButton(props) {
  const { texto, tipo = "primario", ...outrasProps } = props;

  return (
    <button className="styles.TaskButton" tipo={tipo} {...outrasProps}>
      {texto}
    </button>
  );
}
