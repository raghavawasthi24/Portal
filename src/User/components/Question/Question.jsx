import {
  Divider,
  FormControl,
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
    <div className="m-4 pl-3">
      <Typography variant="h6">Question {ques?.quesNo || 1}</Typography>
      <Divider />
      <Typography variant="body">
        {ques?.question || "What is the full form of HTMLx ?"}
      </Typography>
      <br />
      <FormControl>
        <RadioGroup
          defaultValue=""
          name="radio-buttons-group"
          onChange={(e) => console.log(e.target.value)}
        >
          {optionSet?.map((option, id) => {
            return (
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={option}
                key={id}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
