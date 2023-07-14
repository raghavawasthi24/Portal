import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";
import { prevQues, nextQues } from "../../../store/slices/PrevNextSlice";
import { useDispatch } from "react-redux";

const TestFooter = (props) => {
  const dispatch = useDispatch();
  const saveAndNext = () => {
    props.activeQuestion.review = false;
    console.log(props.activeQuestion);
    dispatch(nextQues());
    // props.setActiveQuestionId(() => props.activeQuestionId + 1);
  };
  const reviewAndNext = () => {
    props.activeQuestion.review = true;
    console.log(props.activeQuestion);
    dispatch(nextQues());
    // props.setActiveQuestionId(() => props.activeQuestionId + 1);
  };
  return (
    <div className="mt-16 bg-gradient-to-r from-testFooterGrad1 to-testFooterGrad2 py-4 px-4 absolute bottom-6 w-3/5 left-16">
      <div className="flex justify-between">
        {/* <div className="bg-reviewColor border-radius"> */}
        <Button
          onClick={reviewAndNext}
          className="!bg-reviewColor !text-white !px-4"
        >
          Mark for Review
        </Button>
        {/* </div> */}
        <Button
          onClick={saveAndNext}
          className="!text-white !bg-saveColor !px-4"
        >
          Save And Next
        </Button>
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
