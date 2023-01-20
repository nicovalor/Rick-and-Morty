import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.linkContainer}>
          <Link className={styles.links} to="/home">
            Home
          </Link>
          <Link className={styles.links} to="/about">
            About
          </Link>
        </div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </>
  );
}
