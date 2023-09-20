import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload
      };

    case FILTER:
      const allCharactersFilter = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharactersFilter,
      };

    case ORDER:
      const allCharactersOrder = [...state.allCharacters];
      allCharactersOrder.sort((a, b) => (payload === "A") ? a.id - b.id : b.id - a.id);
      return {
        ...state,
        myFavorites: allCharactersOrder,
      };

    default:
      return state;
  }
};

export default reducer;

