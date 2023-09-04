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
} from "@mui/material";
import firebase from "../../firebase";

const RSVPForm = () => {
  const formRef = useRef();
  const [response, setResponse] = useState("Yes");
  const [name, setName] = useState("");

  const handleResponseChange = (event) => {
    setValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const submitToFirebase = (event) => {
    event.preventDefault();

    fetch(
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
  };

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <form ref={formRef} onSubmit={submitToFirebase}>
        <TextField
          name="name"
          placeholder="Please Enter Your Name"
          onChange={handleNameChange}
          required
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
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  );
};

export default RSVPForm;
