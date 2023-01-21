import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = (id) => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(id));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardButtons}>
        {isFav ? (
          <button
            className={styles.favButton}
            onClick={() => handleFavorite(props.id)}
          >
            ❤️
          </button>
        ) : (
          <button
            className={styles.favButton}
            onClick={() => handleFavorite(props.id)}
          >
            🤍
          </button>
        )}
        <button className={styles.closeButton} onClick={props.onClose}>
          X
        </button>
      </div>
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
