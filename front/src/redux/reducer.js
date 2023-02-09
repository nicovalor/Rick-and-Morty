export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

const initialState = { myFavorites: [] };

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: [...state.myFavorites, payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };
    case FILTER:
      const allCharsFiltered = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
}
