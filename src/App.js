import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography, Container } from "@mui/material";

import { fetchCharacters } from "./store/characters-actions";

import CharactersList from "./components/characters-list/CharactersList";
import Search from "./components/search/Search";
import PagesPagination from "./components/pagination/Pagination";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(process.env.REACT_APP_BASE_URL));
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4 }}>
          Список людей
        </Typography>
        <Search />
        <CharactersList />
        <PagesPagination />
      </Container>
    </div>
  );
}

export default App;
