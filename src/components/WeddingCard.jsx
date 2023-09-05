import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const WeddingCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "0.1rem",
        bgcolor: "lightpink",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        py: "3rem",
        px: "0.5rem",
        position: "relative",
      }}
    >
      <img
        src="flowers.png"
        style={{
          position: "absolute",
          top: -50,
          left: -50,
          overflow: "visible",
        }}
      />
      <CardHeader title="Wedding Invitation" />
      <CardContent
        sx={{
          textAlign: "center",

          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography>
          We cordially invite you to the wedding celebration of
        </Typography>
        <Typography fontSize={"2rem"}>𝓣𝓤𝓑𝓐 & 𝓜𝓤𝓐𝓩</Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontWeight={"bold"}>Date</Typography>
          <Typography>24 December 2023</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontWeight={"bold"}>Time</Typography>{" "}
          <Typography>1 to 4 pm</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontWeight={"bold"}>Venue</Typography>
          <Typography>Dera Dari Restaurant C-12</Typography>
        </Stack>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default WeddingCard;
