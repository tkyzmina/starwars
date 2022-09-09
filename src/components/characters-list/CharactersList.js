import React from "react";
import { List } from "@mui/material";
import Character from "../character/Character";
import Loading from "../loading/Loading";
import { useGlobalContext } from "../../context";

function CharactersList({ onClick, activeListItem }) {
  const { isLoading, characters } = useGlobalContext();
  const handleClick = (id) => {
    let selectedCharacter = characters.filter((item) => {
      return item.id === id;
    });
    onClick(selectedCharacter[0]);
  };
  if (isLoading) {
    return <Loading />;
  }
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
