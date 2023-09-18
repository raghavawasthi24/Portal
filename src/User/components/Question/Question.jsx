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
import { markAnsId } from "../../../store/slices/ReviewSlice";

const Question = () => {
  const dispatch = useDispatch();
  // const optionSet = ques.options;
  const data = useSelector((state) => state.prevNext);
  const quesData = useSelector((state) => state.quesList);
  const category = quesData.quesCategory;
  const quesState = useSelector((state) => state.review.categories);
  const currentCategoryQuestions =
    quesState.find((item) => item.category === category)?.questions || [];

  // const defaultAnswerId = quesData.initialQues[data.initialQues - 1]?.ansId;

  const [selectedValue, setSelectedValue] = useState("");
  const [quesName, setQuesName] = useState("");

  useEffect(() => {
    setQuesName(quesData.initialQues[quesData.initialQuesNo - 1]?.quesId);
    const defaultAnswerId = currentCategoryQuestions.find(
      // const defaultAnswerId = quesData.initialQues.find(
      (item) =>
        item.id === quesData.initialQues[quesData.initialQuesNo - 1]?.quesId
    );
    setSelectedValue(defaultAnswerId?.ansId || "");
    // setSelectedValue(defaultAnswerId?.ansId);
  }, [data, quesData, currentCategoryQuestions, quesName]);
  // }, [data, quesData, quesName]);

  const handleAns = (e) => {
    // console.log("click");
    const newSelectedValue = e.target.value;
    // console.log(e.target.value, category, quesName);
    setSelectedValue(newSelectedValue);
    dispatch(
      markAnsId({
        categoryId: category,
        questionId: quesName,
        ansId: newSelectedValue,
      })
    );
  };

  return (
    <div className="m-4 pl-3 overflow-y-auto h-[48vh]">
      <Typography variant="h6">Question {quesData.initialQuesNo}</Typography>
      <Divider />
      <Typography variant="body">
        {quesData.initialQues[quesData.initialQuesNo - 1]?.question
          .split("\n")
          .map(function (item, idx) {
            return (
              <span key={idx}>
                {item}
                <br />
              </span>
            );
          })}
      </Typography>
      <br />
      <FormControl>
        <RadioGroup value={selectedValue} name={quesName} onChange={handleAns}>
          {quesData.initialQues[quesData.initialQuesNo - 1]?.options.map(
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
