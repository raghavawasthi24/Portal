import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";
import { nextQues } from "../../../store/slices/PrevNextSlice";
import { useDispatch, useSelector } from "react-redux";
import { setVisited, toggleReview } from "../../../store/slices/QuestionsSlice";
import axios from "axios";

const TestFooter = () => {
  const dispatch = useDispatch();
  const quesData = useSelector((state) => state.quesList);
  const data = useSelector((state) => state.prevNext);
  console.log(quesData.initialQues[data.initialQues - 1], data.initialQues);
  const setReview = (review) => {
    // Set the review property for the current question
    const currentQuestion = quesData.initialQues[data.initialQues - 1];
    console.log(currentQuestion.question);
    dispatch(toggleReview({ question: currentQuestion.question, review }));
  };
  const saveAndNext = () => {
    //change the review to false
    submitAnswer(
      quesData.initialQues[data.initialQues - 1]._id,
      quesData.initialQues[data.initialQues - 1].quesId,
      quesData.initialQues[data.initialQues - 1].ansId
    );
    setReview(false);
    markVisited();
    dispatch(nextQues(quesData.initialQues));
  };
  const reviewAndNext = () => {
    //change the review to true
    submitAnswer({
      id: quesData.initialQues[data.initialQues - 1]._id,
      quesId: quesData.initialQues[data.initialQues - 1].quesId,
      ansId: quesData.initialQues[data.initialQues - 1].ansId,
    });
    setReview(true);
    markVisited();
    dispatch(nextQues(quesData.initialQues));
  };
  const markVisited = () => {
    dispatch(setVisited({ index: data?.initialQues - 1 }));
  };
  const submitAnswer = ({ id, quesId, ansId }) => {
    axios
      .post(`https://csi-examportal.onrender.com/api/v1/postResponse/:${id}`, {
        quesId,
        ansId,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
