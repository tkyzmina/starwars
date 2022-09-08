import { BASE_URL } from "./services/api";
import { useFetch } from "./services/api";
import { useEffect, useState } from "react";
import { Typography, Container, Grid } from "@mui/material";

import CharactersList from "./components/characters-list/CharactersList";
import Loading from "./components/loading/Loading";
import CharacterInfo from "./components/character-info/CharacterInfo";
import Search from "./components/search/Search";
import { getId } from "./services/utils";

function App() {
  const { loading, data } = useFetch(BASE_URL);

  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [activeListItem, setActiveListItem] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => { 
    const characters = data.map((item) => {          
      return { ...item, id: getId(item.url) };
    });

    setCharacters(characters);
    setFilteredCharacters(characters);
  }, [data]);

  const showCharacterData = (character) => {
    setSelectedCharacter(character);
    setActiveListItem(character.id);
  };

  const handleInput = (value, filteredArray) => {
    if (!value) {
      setFilteredCharacters(characters);
      setInputValue("");
      setSelectedCharacter();
      setActiveListItem("");
      return;
    }

    setInputValue(value);
    setFilteredCharacters(filteredArray);
    setSelectedCharacter();
    setActiveListItem("");
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
        <Search
          characters={characters}
          onChange={handleInput}
          inputValue={inputValue}
          currentCharacters={filteredCharacters}
        />
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item xs={12} sm={8} sx={{ order: { xs: 2, sm: 1 } }}>
            <CharactersList
              characters={filteredCharacters}
              onClick={showCharacterData}
              setSelectedCharacter={setSelectedCharacter}
              activeListItem={activeListItem}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ order: { xs: 1, sm: 2 } }}>
            <CharacterInfo character={selectedCharacter} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
