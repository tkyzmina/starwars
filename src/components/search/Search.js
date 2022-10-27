import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@mui/material";

import { charactersActions } from "../../store/characters-slice";
import { fetchCharacters } from "../../store/characters-actions";

import { BASE_URL } from "../../services/api";

function Search() {
  const stateQuery = useSelector((state) => state.characters.query);

  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(charactersActions.setSearchQuery({ query }));
  };

  useEffect(() => {
    dispatch(fetchCharacters(`${BASE_URL}?search=${stateQuery}`));
  }, [stateQuery, dispatch]);

  return (
    <>
      <TextField
        sx={{ width: 1, mb: 2 }}
        type="search"
        value={stateQuery}
        onChange={(e) => handleSearch(e.target.value)}
        label="Search character"
      />
    </>
  );
}

export default Search;
