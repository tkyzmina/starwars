import { Typography, Container } from "@mui/material";

import CharactersList from "./components/characters-list/CharactersList";
import Search from "./components/search/Search";
import PagesPagination from "./components/pagination/Pagination";

function App() {
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
