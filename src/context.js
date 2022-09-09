import React, { useContext, useEffect, useReducer } from "react";

import reducer from "./reducer";
import {
  SET_LOADING,
  SET_CHARACTERS,
  CHOOSE_CHARACTER,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from "./actions";
import { BASE_URL } from "./services/api";
import { characterMapper } from "./mappers/characterMapper";
import { getId } from "./services/utils";

const initialState = {
  isLoading: true,
  characters: [],
  character: {},
  query: "",
  page: 1,
  nbPages: 0,
  activeListItem: "",
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

  const showCharacterInfo = (character) => {
    dispatch({
      type: CHOOSE_CHARACTER,
      payload: character,
    });
  };

  const handleSearch = (query) => {
    dispatch({
      type: HANDLE_SEARCH,
      payload: query,
      page: 0,
    });
  };

  const handlePage = (value) => {
    dispatch({
      type: HANDLE_PAGE,
      payload: value,
    });
  };

  useEffect(() => {
    fetchCharacters(`${BASE_URL}?search=${state.query}`);
  }, [state.query]);

  useEffect(() => {
    fetchCharacters(`${BASE_URL}?page=${state.page}`);
  }, [state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, showCharacterInfo, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
