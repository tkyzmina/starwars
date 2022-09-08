import React, { useState } from "react";
import { Container, Pagination } from "@mui/material";

function PagesPagination() {
  return (
    <Container sx={{ display: "flex" }}>
      <Pagination sx={{ marginY: 2, marginX: "auto" }} />
    </Container>
  );
}

export default PagesPagination;
