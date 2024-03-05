import axios from "axios";
import { GET_VIDEOGAMES, GET_BY_ID, GET_CLEAN, SEARCH_NAME, GET_GENRES } from "./actionsType";

export const getVideogames = (payload) => {
  const queryParameters = {};

  if (payload?.filterBy) {
    queryParameters.filterBy = payload?.filterBy;
  }
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3000/videogames", {
        params: queryParameters,
      });
      dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3000/genre");
      dispatch({ type: GET_GENRES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/videogames/${id}`);
      return dispatch({ type: GET_BY_ID, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getClean = () => {
  return { type: GET_CLEAN };
};

export const searchName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/videogames/name?name=${name}`);

      dispatch({ type: SEARCH_NAME, payload: data });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        dispatch({ type: SEARCH_NAME, payload: [] });
        alert("There's no videogame found with that name");
      } else {
        console.error("Error fetching videogames by name:", error);
      }
    }
  };
};

export const filterVideogames = (payload) => {
  console.log("payload", payload);
  return async (dispatch) => {
    const { orderAlphabetic, genreName, source } = payload;
    const queryParameters = {};

    if (orderAlphabetic) {
      queryParameters.orderAlphabetic = orderAlphabetic;
    }
    if (genreName) {
      queryParameters.genreName = genreName;
    }
    if (source) {
      queryParameters.source = source.includes("DB") ? "DB" : "API";
    }
    try {
      const { data } = await axios.get("http://localhost:3000/videogames", {
        params: queryParameters,
      });
      return dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createVideogame = (newVideogame) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3000/videogames", newVideogame);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
};
