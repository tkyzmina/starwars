import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function CharacterInfo({ character }) {
  const { birthYear, eyeColor, height, name, skinColor, id } = character;

  if (Object.keys(character).length !== 0) {
    return (
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <List sx={{ width: "100%" }}>
            <ListItem>
              <ListItemText
                primary={`Birth Year: ${birthYear.toUpperCase()}`}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={`Eye Color: ${eyeColor.toUpperCase()}`} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={`Skin Color: ${skinColor.toUpperCase()}`}
              />
            </ListItem>{" "}
            <Divider />
            <ListItem>
              <ListItemText primary={`Height: ${height.toUpperCase()}`} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default CharacterInfo;
