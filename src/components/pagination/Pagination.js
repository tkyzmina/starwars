import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Pagination } from "@mui/material";

import { charactersActions } from "../../store/characters-slice";
import { fetchCharacters } from "../../store/characters-actions";

import { BASE_URL } from "../../services/api";

function PagesPagination() {
  const { nbPages, characters, page } = useSelector(
    (state) => state.characters
  );
  const dispatch = useDispatch();

  const handlePage = (page) => {
    dispatch(charactersActions.setPaginationPage({ page }));
  };

  useEffect(() => {
    dispatch(fetchCharacters(`${BASE_URL}?page=${page}`));
  }, [page, dispatch]);

  if (characters.length > 0) {
    return (
      <Container sx={{ display: "flex" }}>
        <Pagination
          sx={{ marginY: 2, marginX: "auto" }}
          count={nbPages}
          page={page}
          boundaryCount={0}
          onChange={(_, num) => {
            handlePage(num);
          }}
        />
      </Container>
    );
  }
}

export default PagesPagination;
