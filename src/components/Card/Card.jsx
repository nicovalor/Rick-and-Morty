import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={props.onClose}>
        X
      </button>
      <h2 className={styles.name}>{props.name}</h2>
      <h2 className={styles.species}>{props.species}</h2>
      <h2 className={styles.gender}>{props.gender}</h2>
      <img className={styles.image} src={props.image} alt="" />
    </div>
  );
}
