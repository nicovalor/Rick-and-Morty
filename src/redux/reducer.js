export const ADD_FAVFORITE = "ADD_FAVFORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

const initialState = { myFavorites: [] };

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVFORITE:
      return { ...state, myFavorites: [...state.myFavorites, payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };
    default:
      return { ...state };
  }
}
