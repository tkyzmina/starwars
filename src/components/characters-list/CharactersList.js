import React from "react";
import { List } from "@mui/material";
import Character from "../character/Character";

function CharactersList({ characters, onClick, activeListItem }) {
  const handleClick = (id) => {
    let selectedCharacter = characters.filter((item) => {
      return item.id === id;
    });

    onClick(selectedCharacter[0]);
  };

  return (
    <List>
      {characters.map((character) => {
        return (
          <Character
            character={character}
            key={character.id}
            onClickHandler={() => handleClick(character.id)}
            activeListItem={activeListItem}
          />
        );
      })}
    </List>
  );
}

export default CharactersList;
