import appConstants from "../../constants/appConstants";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <h2>{appConstants.HEADER}</h2>
    </header>
  );
}
