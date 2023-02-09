import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export function Card({ name, gender, onClose, species, image, id }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, gender, onClose, species, image, id }));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardButtons}>
        {isFav ? (
          <button
            className={styles.favButton}
            onClick={() => handleFavorite(id)}
          >
            ❤️
          </button>
        ) : (
          <button
            className={styles.favButton}
            onClick={() => handleFavorite(id)}
          >
            🤍
          </button>
        )}
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <h2 className={styles.species}>{species}</h2>
      <h2 className={styles.gender}>{gender}</h2>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
}

export default Card;
