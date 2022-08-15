import { useFetch } from "./services/api";
import { useState } from "react";
import { Typography, Container, Grid } from "@mui/material";

import CharactersList from "./components/CharactersList";
import Loading from "./components/Loading";
import CharacterInfo from "./components/CharacterInfo";
import Search from "./components/Search";

const BASE_URL = "https://swapi.dev/api/people";

function App() {
  const [activeListItem, setActiveListItem] = useState(
    "https://swapi.dev/api/people/1/"
  );
  const [inputError, setInputError] = useState(false);
  const [inputValue, setInputaValue] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState({
    birth_year: "19BBY",
    eye_color: "blue",
    gender: "male",
    height: "172",
    name: "Luke Skywalker",
    mass: "77",
    skin_color: "fair",
    url: "https://swapi.dev/api/people/1/",
  });
  const { loading, characters } = useFetch(BASE_URL);

  const showCharacterData = (itemUrl) => {
    let selectedCharacter = characters.filter((item) => {
      return item.url === itemUrl;
    });
    ///???!
    setSelectedCharacter(selectedCharacter[0]);
    setActiveListItem(itemUrl);
  };

  const handleInput = (e) => {
    if (e.target.value.trim().length > 0) {
      setInputError(false);
    }
    setInputaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      setInputError(true);
      return;
    }

    const searchResult = characters.filter((item) =>
      item.name.toLowerCase().includes(inputValue.trim().toLowerCase())
    );

    if (searchResult.length === 0) {
      setInputError(true);
      return;
    } else {
      setSelectedCharacter(searchResult[0]);
      setActiveListItem(searchResult[0].url);
      setInputaValue("");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Container>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4 }}>
          Список людей
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Search
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              inputValue={inputValue}
              inputError={inputError}
            />
            <CharactersList
              characters={characters}
              click={showCharacterData}
              activeListItem={activeListItem}
            />
          </Grid>
          <Grid item xs={4}>
            <CharacterInfo character={selectedCharacter} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
