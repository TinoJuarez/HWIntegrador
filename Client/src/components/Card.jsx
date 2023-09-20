import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/action";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  gender,
  image,
  species,
  origin,
  onClose,
  myFavorites,
  removeFav,
  addFav,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };

  useEffect(() => {
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

  return (
    <div className={styles.divCard}>
      <button
        className={styles.favoriteButton}
        onClick={handleFavorite}
        role="img"
        aria-label="favorite"
      >
        {isFav ? "❤️" : "🤍"}
      </button>
      <div className={styles.divCard2}>
        <Link to={`/detail/${id}`}>
          <h3 className={styles.h3Card}>{name}</h3>
        </Link>
        <button
          className={styles.closeButton}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
        <img className={styles.imgCard} src={image} alt="Character" />
      </div>
      <div className={styles.divCard3}>
        <h3 className={styles.h2Card}>{status}</h3>
        <h3 className={styles.h2Card}>{species}</h3>
        <h3 className={styles.h2Card}>{gender}</h3>
      </div>
      <div className={styles.divCard4}>
        <h3 className={styles.h2Card}>{origin}</h3>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  addFav: (character) => dispatch(addFav(character)),
  removeFav: (id) => dispatch(removeFav(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
