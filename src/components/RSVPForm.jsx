import React, { useRef, useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import firebase from "../../firebase";

const RSVPForm = () => {
  const formRef = useRef();
  const [response, setResponse] = useState("Yes");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const submitToFirebase = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await fetch(
        "https://wedding-rsvp-7f989-default-rtdb.firebaseio.com/guests.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            response: response,
          }),
        }
      );

      // After the request is successful, set the submitting state to false
      setSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setName("");
    setResponse("Yes");
  };

  return (
    <>
      {!submitted ? (
        <form ref={formRef} onSubmit={submitToFirebase}>
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            my={5}
            spacing={3}
          >
            <TextField
              name="name"
              placeholder="Please Enter Your Name"
              onChange={handleNameChange}
              required
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Your Response
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="response"
                value={response}
                onChange={handleResponseChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Stack>

          <Button variant="contained" type="submit">
            {submitting ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </form>
      ) : (
        <Box>
          {response === "Yes" ? (
            <Typography variant="h6">Yayy, see you there!</Typography>
          ) : (
            <Typography variant="h6">Aww :( you'll be missed</Typography>
          )}
          <Button variant="contained" onClick={resetForm}>
            Enter another response
          </Button>
        </Box>
      )}
    </>
  );
};

export default RSVPForm;
