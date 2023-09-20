import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"; 
import axios from "axios";

const baseURL = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
  return async (dispatch) => {
    try { 
      const { data } = await axios.post(baseURL, character);
      if (!data.length) throw new Error('No se agregó a favoritos');

      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error('Error adding to favorites:', error.message);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `${baseURL}/${id}`;
      const { data } = await axios.delete(endpoint);

      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error('Error removing from favorites:', error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

