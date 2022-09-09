import { Typography, Container, Grid } from "@mui/material";

import CharactersList from "./components/characters-list/CharactersList";
import CharacterInfo from "./components/character-info/CharacterInfo";
import Search from "./components/search/Search";
import PagesPagination from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4 }}>
          Список людей
        </Typography>
        <Search />
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item xs={12} sm={8} sx={{ order: { xs: 2, sm: 1 } }}>
            <CharactersList />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ order: { xs: 1, sm: 2 } }}>
            <CharacterInfo />
          </Grid>
        </Grid>
        <PagesPagination />
      </Container>
    </div>
  );
}

export default App;
