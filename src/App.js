import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Container } from "@mui/material";

import { fetchCharacters } from "./store/characters-actions";

import CharactersList from "./components/characters-list/CharactersList";
import Search from "./components/search/Search";
import PagesPagination from "./components/pagination/Pagination";

let isInitial = true;
let isInitial1 = true;

function App() {
  const page = useSelector((state) => state.characters.page);
  const stateQuery = useSelector((state) => state.characters.query);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(process.env.REACT_APP_BASE_URL));
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(
      fetchCharacters(
        `${process.env.REACT_APP_BASE_URL}?search=${stateQuery}&page=${page}`
      )
    );
  }, [page, dispatch]);

  useEffect(() => {
    if (isInitial1) {
      isInitial1 = false;
      return;
    }
    dispatch(
      fetchCharacters(`${process.env.REACT_APP_BASE_URL}?search=${stateQuery}`)
    );
  }, [stateQuery, dispatch]);

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
