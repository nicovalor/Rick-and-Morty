import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export function Card(props) {
  const { isFav, setIsFav } = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  // useEffect(() => {
  //   dispatch(addFavorite);
  //   dispatch(deleteFavorite);
  // }, []);
  const handleFavorite = () => {
    isFav && setIsFav(props.deleteFavorite(props.id));
    !isFav && setIsFav(props.addFavorite(props));
  };
  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
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

export default Card;
