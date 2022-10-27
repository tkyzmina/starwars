import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { charactersActions } from "../../store/characters-slice";

function Character({ character }) {
  const activeListItem = useSelector((state) => state.characters.activeListItem);
  const { name, id } = character;
  const dispatch = useDispatch();

  const showCharacterDetails = (character) => {
    dispatch(charactersActions.setSelectedCharacter({ character }));
  };

  return (
    <ListItem disablePadding selected={activeListItem === id}>
      <ListItemButton
        component="button"
        onClick={() => {
          showCharacterDetails(character);
        }}
      >
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default Character;
