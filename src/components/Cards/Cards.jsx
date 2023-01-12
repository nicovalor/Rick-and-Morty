import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.container}>
      {characters.map((char) => (
        <Card
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => props.onClose(char.id)}
        />
      ))}
    </div>
  );
}
