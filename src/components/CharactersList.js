import React from "react";
import { List } from "@mui/material";
import Character from "./Character";

function CharactersList({ characters, click, activeListItem }) {
  return (
    <List>
      {characters.map((character) => {
        return (
          <Character
            character={character}
            key={character.id}
            click={click}
            activeListItem={activeListItem}
          />
        );
      })}
    </List>
  );
}

export default CharactersList;
