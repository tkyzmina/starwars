import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

function Character({ character, click, activeListItem }) {
  const { name, url } = character;
  return (
    <ListItem disablePadding selected={activeListItem === url}>
      <ListItemButton
        component="button"
        onClick={() => {
          click(url);
        }}
      >
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default Character;
