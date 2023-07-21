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
  // const optionSet = ques.options;
  const data = useSelector((state) => state.prevNext);
  return (
    <div className="m-4 pl-3">
      <Typography variant="h6">Question {data.initialQues}</Typography>
      <Divider />
      <Typography variant="body">{ques?.question}</Typography>
      <br />
      <FormControl>
        <RadioGroup
          defaultValue=""
          name="radio-buttons-group"
          onChange={(e) => console.log(e.target.value)}
        >
          {ques?.options.map((option, id) => {
            return (
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={option}
                key={id}
              />
            );
          })}

          {console.log(ques?.options)}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
