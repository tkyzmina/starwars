import React, { useRef } from "react";
import { TextField } from "@mui/material";
import Notification from "../notification/Notification";

function Search({ onChange, inputValue, currentCharacters, characters }) {
  const searchValue = useRef("");
  const handleSearch = (e) => {
    const filteredArray = characters.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );

    onChange(e.target.value, filteredArray);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <>
      <TextField
        sx={{ width: 1, mb: 2 }}
        type="search"
        value={inputValue}
        onChange={(e) => handleSearch(e)}
        label="Search character"
        ref={searchValue}
        inputRef={(input) => {
          if (input != null) {
            input.focus();
          }
        }}
      />
      {currentCharacters.length === 0 && (
        <Notification text="No character found." type="warning" />
      )}
    </>
  );
}

export default Search;
