import React from "react";
import { List } from "@mui/material";
import Character from "./Character";

function CharactersList({ characters, click, activeListItem }) {
  return (
    <List>
      {characters.map((character) => {
        const { name, url } = character;

        let urlId = url.trim().split("/");
        urlId = parseInt(urlId[5]);
        const updatedCharacter = { ...character, name: name, id: urlId };

        return (
          <Character character={updatedCharacter} key={url} click={click} activeListItem={activeListItem} />
        );
      })}
    </List>
  );
}

export default CharactersList;
