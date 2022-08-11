import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

function Character({name}) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default Character;
