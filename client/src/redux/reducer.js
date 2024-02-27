import { GET_VIDEOGAMES, GET_BY_ID, GET_CLEAN, SEARCH_NAME, GET_GENRES } from "./actionsType";

const initialState = {
  videogames: [],
  getById: [],
  cleanSearch: [],
  genres: [],
  createVideogame: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        getById: action.payload,
      };

    case SEARCH_NAME: {
      return {
        ...state,
        videogames: action.payload,
      };
    }
    case GET_CLEAN: {
      return {
        ...state,
        cleanSearch: [],
      };
    }
    

    default:
      return { ...state };
  }
};

export default reducer;
