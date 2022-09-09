import React from "react";
import { List } from "@mui/material";
import Character from "../character/Character";
import Loading from "../loading/Loading";
import Notification from "../notification/Notification";
import { useGlobalContext } from "../../context";

function CharactersList() {
  const { isLoading, characters, showCharacterInfo, activeListItem } =
    useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (characters.length === 0) {
    return <Notification text="No character found." type="warning" />;
  }

  return (
    <List>
      {characters.map((character) => {
        return (
          <Character
            character={character}
            key={character.id}
            onClickHandler={() => showCharacterInfo(character)}
            activeListItem={activeListItem}
          />
        );
      })}
    </List>
  );
}

export default CharactersList;
