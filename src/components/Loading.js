import React from "react";
import { Typography, Container, Skeleton } from "@mui/material";

function Loading() {
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

export default Loading;
