import { Checkbox, Stack, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React, { useRef } from "react";

const RSVPForm = () => {
  const formRef = useRef();
  const [value, setValue] = React.useState("Yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <TextField placeholder="Please Enter Your Name" />
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Your Response
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default RSVPForm;
