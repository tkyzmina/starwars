import React from "react";
import { TextField } from "@mui/material";
import Notification from "../notification/Notification";

function Search({ onChange, inputValue, currentCharacters, characters }) {
  const handleSearch = (e) => {
    const filteredArray = characters.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );

    onChange(e.target.value, filteredArray);
  };

  return (
    <>
      <TextField
        sx={{ width: 1, mb: 2 }}
        type="search"
        value={inputValue}
        onChange={(e) => handleSearch(e)}
        label="Search character"
      />
      {!currentCharacters.length && (
        <Notification text="No character found." type="warning" />
      )}
    </>
  );
}

export default Search;
