import {
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const Question = (props) => {
  const ques = props.ques;
  const optionSet = ["html", "httml", "htttlm", "htttttposa"];
  return (
    <div>
      <Typography variant="h4">Question {ques?.quesNo || 1}</Typography>
      <Divider />
      <Typography variant="h5">
        {ques?.ques || "What is the full form of HTML ?"}
      </Typography>
      <FormControl>
        <RadioGroup defaultValue="" name="radio-buttons-group">
          {optionSet?.map((option) => {
            return (
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={option}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
