import { useEffect, useState } from "react";
import { Typography, Container, Grid } from "@mui/material";

import CharactersList from "./components/characters-list/CharactersList";
import CharacterInfo from "./components/character-info/CharacterInfo";
import Search from "./components/search/Search";
import PagesPagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [activeListItem, setActiveListItem] = useState("");
  const [inputValue, setInputValue] = useState("");

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
        <PagesPagination />
      </Container>
    </div>
  );
}

export default App;
