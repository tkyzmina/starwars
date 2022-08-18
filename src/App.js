import { useFetch } from "./services/api";
import { useEffect, useState } from "react";
import { Typography, Container, Grid } from "@mui/material";

import CharactersList from "./components/CharactersList";
import Loading from "./components/Loading";
import CharacterInfo from "./components/CharacterInfo";
import Search from "./components/Search";

const BASE_URL = "https://swapi.dev/api/people";

function App() {
  const { loading, data } = useFetch(BASE_URL);
  const [characters, setCharacters] = useState([]);
  const [activeListItem, setActiveListItem] = useState("1");
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
    id: 1,
  });

  useEffect(() => {
    const regexp = /(\d+)\//i;
    const characters = data.map((item) => {
      const urlNum = item.url.match(regexp)[1];
      return { ...item, id: urlNum };
    });
    setCharacters(characters);
  }, [data]);

  const showCharacterData = (id) => {
    let selectedCharacter = characters.filter((item) => {
      return item.id === id;
    });

    setSelectedCharacter(selectedCharacter[0]);
    setActiveListItem(id);
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
      setActiveListItem(searchResult[0].id);
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
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item xs={12} sm={8} sx={{ order: { xs: 2, sm: 1 } }}>
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
          <Grid item xs={12} sm={4} sx={{ order: { xs: 1, sm: 2 } }}>
            <CharacterInfo character={selectedCharacter} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
