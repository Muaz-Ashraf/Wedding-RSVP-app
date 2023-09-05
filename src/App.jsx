import React from "react";
import RSVPForm from "./components/RSVPForm";
import { Container, Typography } from "@mui/material";
import WeddingCard from "./components/WeddingCard";

const App = () => {
  return (
    <Container maxWidth="md" sx={{ mt: "5rem" }}>
      <WeddingCard />
      <RSVPForm />
    </Container>
  );
};

export default App;
