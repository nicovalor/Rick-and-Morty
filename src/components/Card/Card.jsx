import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={props.onClose}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.name}>{props.name}</h2>
      </Link>
      <h2 className={styles.species}>{props.species}</h2>
      <h2 className={styles.gender}>{props.gender}</h2>
      <img className={styles.image} src={props.image} alt="" />
    </div>
  );
}
