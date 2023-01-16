import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <>
      <div className={styles.nav}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </>
  );
}
