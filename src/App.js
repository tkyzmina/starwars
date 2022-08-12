import { fetchCharacters } from "./services/api";
import { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";
import CharactersList from "./components/CharactersList";
import Loading from "./components/Loading";
const url = "https://swapi.dev/api/people";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters(url, setLoading, setCharacters);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
