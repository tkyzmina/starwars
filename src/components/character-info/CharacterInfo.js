import React from "react";
import { useSelector } from "react-redux";
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
import { getImgUrl } from "../../services/utils";

function CharacterInfo() {
  const character = useSelector((state) => state.characters.character);
  const { name, id, birthYear, eyeColor, skinColor, height } = character;

  if (Object.keys(character).length === 0) {
    return;
  }
  if (character) {
    const getCharacterImgUrl = getImgUrl("characters");
    const image = getCharacterImgUrl(id);

    return (
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={image}
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
            </ListItem>
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
