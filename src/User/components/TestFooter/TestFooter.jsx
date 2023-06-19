import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";

const TestFooter = (props) => {
  const saveAndNext = () => {
    props.activeQuestion.review = false;
    console.log(props.activeQuestion);
    props.setActiveQuestionId(() => props.activeQuestionId + 1);
  };
  const reviewAndNext = () => {
    props.activeQuestion.review = true;
    console.log(props.activeQuestion);
    props.setActiveQuestionId(() => props.activeQuestionId + 1);
  };
  return (
    <div className="mt-16 bg-gradient-to-r from-testFooterGrad1 to-testFooterGrad2 py-4 px-4">
      <div className="flex justify-between">
        {/* <div className="bg-reviewColor border-radius"> */}
        <Button onClick={reviewAndNext}>Mark for Review</Button>
        {/* </div> */}
        <Button onClick={saveAndNext}>Save And Next</Button>
      </div>
      <div className="flex justify-around mt-4">
        <span className="flex items-center">
          <CircleIcon color="error" /> UnAttempted
        </span>
        <span className="flex items-center">
          <CircleIcon color="success" />
          Attempted
        </span>
        <span className="flex items-center">
          <CircleIcon color="primary" />
          Marked for review
        </span>
      </div>
    </div>
  );
};

export default TestFooter;
