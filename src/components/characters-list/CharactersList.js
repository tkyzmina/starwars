import React from "react";
import { useSelector } from "react-redux";

import { List, Grid } from "@mui/material";

import Character from "../character/Character";
import CharacterInfo from "../character-info/CharacterInfo";
import Loading from "../loading/Loading";
import Notification from "../notification/Notification";


function CharactersList() {
  const charactersList = useSelector((state) => state.characters.characters);

  const isLoading = useSelector((state) => state.characters.isLoading);
 
  if (isLoading) {
    return <Loading />;
  }

  if (charactersList.length === 0) {
    return <Notification text="No character found." type="warning" />;
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ flexDirection: { xs: "column", sm: "row", minHeight: 500 } }}
    >
      <Grid item xs={12} sm={8} sx={{ order: { xs: 2, sm: 1 } }}>
        <List>
          {charactersList.map((character) => {
            return <Character character={character} key={character.id} />;
          })}
        </List>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ order: { xs: 1, sm: 2 } }}>
        <CharacterInfo />
      </Grid>
    </Grid>
  );
}

export default CharactersList;
