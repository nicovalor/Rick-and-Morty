import { ADD_FAVFORITE, DELETE_FAVORITE } from "./reducer";

export const addFavorite = (character) => {
  return { type: ADD_FAVFORITE, payload: character };
};

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};
