import React from "react";
import { List } from "@mui/material";
import Character from "./Character";

function CharactersList({ characters }) {
  return (
    <List>
      {characters.map((character) => {
        const { name, url } = character;     
        return <Character name={name} key={url} />;
      })}
    </List>
  );
}

export default CharactersList;
