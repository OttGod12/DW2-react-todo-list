import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header(props) {
  return (
    <div className={styles.Header}>
      <Link to="/">
        <h1>
          <span>TODO </span>list
        </h1>
      </Link>
      <Link to="/sobre-nos">Sobre Nós</Link>
    </div>
  );
}
