import { useState, useEffect } from "react";
import { Typography, Container, Skeleton } from "@mui/material";
import CharactersList from "./components/CharactersList";
const url = "https://swapi.dev/api/people";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4 }}>
          Loading...
        </Typography>
        {[...Array(8)].map((item, index) => {
          return (
            <Skeleton
              variant="rounded"
              height={40}
              sx={{ mb: 2, width: 1 }}
              key={index}
            />
          );
        })}
      </Container>
    );
  }
  return (
    <div className="App">
      <Container>
        {" "}
        {}
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4 }}>
          Список людей
        </Typography>
        <CharactersList characters={characters} />
      </Container>
    </div>
  );
}

export default App;
