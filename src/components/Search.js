import React from "react";
import { Box, TextField } from "@mui/material";

function Search({ handleInput, handleSubmit, inputValue, inputError }) {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <TextField
        error={inputError}
        sx={{ width: 1 }}
        type="search"
        value={inputValue}
        onChange={(e) => {
          handleInput(e);
        }}
        label="Search character"
      ></TextField>
    </Box>
  );
}

export default Search;
