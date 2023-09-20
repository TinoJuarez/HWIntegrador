import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../redux/action";
import Card from "./Card";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const renderFavoriteCards = () => {
    return myFavorites.map(({ id, name, status, species, gender, origin, image }) => (
      <Card
        key={id}
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin}
        image={image}
      />
    ));
  };

  return (
    <div>
      <select onChange={handleOrder} name="order" id="order">
        <option value="Ninguno">Ninguno</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} name="filter" id="filter">
        <option value="Ninguno">Ninguno</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {renderFavoriteCards()}
    </div>
  );
};

export default Favorites;
