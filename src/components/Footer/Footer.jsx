import styles from "./Footer.module.css";

export function Footer(props) {
  const { autor } = props;
  const anoAtual = new Date().getFullYear();
  return (
    <div className={styles.Footer}>
      React - {anoAtual} - {autor}
    </div>
  );
}
