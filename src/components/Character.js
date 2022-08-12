import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

function Character({ name }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="div">
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default Character;
