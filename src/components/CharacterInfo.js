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
  const { birth_year, eye_color, height, name, skin_color, id} = character;

  return (
    <Card>
      <CardMedia
        component="img"
        height="378"
        image={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <List sx={{ width: "100%" }}>
          <ListItem>
            <ListItemText primary={`Birth Year: ${birth_year.toUpperCase()}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Eye Color: ${eye_color.toUpperCase()}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Skin Color: ${skin_color.toUpperCase()}`} />
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

export default CharacterInfo;
