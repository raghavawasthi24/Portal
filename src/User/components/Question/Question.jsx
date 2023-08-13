import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnsId } from "../../../store/slices/QuestionsSlice";

const Question = () => {
  const dispatch = useDispatch();
  // const optionSet = ques.options;
  const data = useSelector((state) => state.prevNext);
  const quesData = useSelector((state) => state.quesList);
  console.log(quesData.initialQues[data.initialQues - 1]?.ansId);

  // const defaultAnswerId = quesData.initialQues[data.initialQues - 1]?.ansId;

  const [selectedValue, setSelectedValue] = useState("");
  const [quesName, setQuesName] = useState("");

  useEffect(() => {
    setQuesName(quesData.initialQues[data.initialQues - 1]?.quesId);
    const defaultAnswerId = quesData.initialQues[data.initialQues - 1]?.ansId;
    setSelectedValue(defaultAnswerId);
  }, [data, quesData]);

  const handleAns = (e) => {
    console.log(e.target.value);
    const newSelectedValue = e.target.value;
    setSelectedValue(newSelectedValue);
    dispatch(
      setAnsId({ index: data.initialQues - 1, ansId: newSelectedValue })
    );
  };

  return (
    <div className="m-4 pl-3">
      <Typography variant="h6">Question {data.initialQues}</Typography>
      <Divider />
      <Typography variant="body">
        {quesData.initialQues[data.initialQues - 1]?.question}
      </Typography>
      <br />
      <FormControl>
        <RadioGroup value={selectedValue} name={quesName} onChange={handleAns}>
          {quesData.initialQues[data.initialQues - 1]?.options.map(
            (option, id) => {
              return (
                <FormControlLabel
                  value={option.ansId}
                  control={<Radio />}
                  label={option.name}
                  key={id}
                />
              );
            }
          )}

          {/* {console.log(quesData.initialQues)} */}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
