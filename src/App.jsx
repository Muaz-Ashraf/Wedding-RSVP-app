import React from "react";
import RSVPForm from "./components/RSVPForm";
import { Container, Typography } from "@mui/material";
import WeddingCard from "./components/WeddingCard";

const App = () => {
  return (
    <Container>
      <Typography sx={{ textAlign: "center" }}>Wedding App</Typography>
      <WeddingCard />
      <RSVPForm />
    </Container>
  );
};

export default App;
