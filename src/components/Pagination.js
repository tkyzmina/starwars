import React from "react";
import { Container, Pagination } from "@mui/material";
import { useGlobalContext } from "../context";

function PagesPagination() {
  const { nbPages, page } = useGlobalContext();

  return (
    <Container sx={{ display: "flex" }}>
      <Pagination
        sx={{ marginY: 2, marginX: "auto" }}
        count={nbPages}
        page={page}
        onChange={(_, num) => {}}
      />
    </Container>
  );
}

export default PagesPagination;
