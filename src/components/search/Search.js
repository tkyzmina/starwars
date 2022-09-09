import React from "react";
import { TextField } from "@mui/material";
import { useGlobalContext } from "../../context";

function Search() {
  const { handleSearch, query } = useGlobalContext();
  return (
    <>
      <TextField
        sx={{ width: 1, mb: 2 }}
        type="search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        label="Search character"
      />
    </>
  );
}

export default Search;
