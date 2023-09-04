import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const WeddingCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "0.1rem", bgcolor: "lightpink" }}
    >
      <CardHeader title="Wedding Invitation" />
      <CardContent>
        <Typography>
          We cordially invite you to the wedding celebration of
        </Typography>

        <Typography>Date</Typography>
        <Typography>Time</Typography>
        <Typography>Venue</Typography>
      </CardContent>
      <CardActions>
        <Button>RSVP</Button>
      </CardActions>
    </Card>
  );
};

export default WeddingCard;
