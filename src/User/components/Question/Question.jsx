import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Question = (props) => {
  const ques = props.ques;
  console.log(ques);
  // const optionSet = ["html", "httml", "htttlm", "htttttposa"];
  const optionSet = ques?.optionSet;
  const data = useSelector((state) => state.prevNext);
  return (
    <div className="m-4 pl-3">
      <Typography variant="h6">Question {data.initialQues}</Typography>
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
