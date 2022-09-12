import React from "react";
import { Container, Pagination } from "@mui/material";
import { useGlobalContext } from "../../context";

function PagesPagination() {
  const { nbPages, page, handlePage, characters } = useGlobalContext();

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
