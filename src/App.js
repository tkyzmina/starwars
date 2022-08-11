import { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";
import CharactersList from "./components/CharactersList";
const url = "https://swapi.dev/api/people";

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
  };
  
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <Container>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4 }}>
          Список людей
        </Typography>
        <CharactersList characters={characters} />
      </Container>
    </div>
  );
}

export default App;
