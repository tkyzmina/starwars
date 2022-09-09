import React, { useContext, useEffect, useReducer } from "react";

import reducer from "./reducer";
import { SET_LOADING, SET_CHARACTERS } from "./actions";
import { BASE_URL } from "./services/api";
import { characterMapper } from "./mappers/characterMapper";
import { getId } from "./services/utils";

const initialState = {
  isLoading: true,
  characters: [],
  query: "a",
  page: 1,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCharacters = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      const characters = data.results
        .map((item) => characterMapper(item))
        .map((item) => {
          return { ...item, id: getId(item.url) };
        });
      const nbPages = Math.ceil(data.count / 10);
      dispatch({
        type: SET_CHARACTERS,
        payload: { characters: characters, nbPages: nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters(`${BASE_URL}=${state.query}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
