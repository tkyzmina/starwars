import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

function Character({ character, onClick, activeListItem }) {
  const { name, id } = character;
  return (
    <ListItem disablePadding selected={activeListItem === id}>
      <ListItemButton
        component="button"
        onClick={() => {
          onClick(id);
        }}
      >
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default Character;
