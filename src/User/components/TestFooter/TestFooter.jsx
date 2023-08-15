import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";
import { nextQues } from "../../../store/slices/PrevNextSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { markReview } from "../../../store/slices/ReviewSlice";

const TestFooter = () => {
  const dispatch = useDispatch();
  const quesData = useSelector((state) => state.quesList);
  const category = quesData.quesCategory;
  const quesState = useSelector((state) => state.review.categories);
  const currentCategoryQuestions =
    quesState.find((item) => item.category === category)?.questions || [];
  const data = useSelector((state) => state.prevNext);
  console.log(quesData.initialQues[data.initialQues - 1], data.initialQues);

  function isAnsIdEmpty(questionsArray, inputId) {
    const question = questionsArray.find((item) => item.id === inputId);

    if (question) {
      console.log("quesFound");
      return question.ansId === "";
    } else {
      return false;
    }
  }

  const setReviewHandler = (review) => {
    const currentQuestion = quesData.initialQues[data.initialQues - 1];
    // Set the review property for the current question
    dispatch(
      markReview({
        categoryId: currentQuestion.category,
        questionId: currentQuestion.quesId,
        review,
      })
    );
    // dispatch(setReview({ questionId: currentQuestion.quesId, review }));
  };

  const saveAndNext = () => {
    const currentQuestion = quesData.initialQues[data.initialQues - 1];

    if (isAnsIdEmpty(currentCategoryQuestions, currentQuestion.quesId)) {
      toast.error("Select an option");
      return;
    }
    //change the review to false
    // submitAnswer(
    //   quesData.initialQues[data.initialQues - 1]._id,
    //   quesData.initialQues[data.initialQues - 1].quesId,
    //   quesData.initialQues[data.initialQues - 1].ansId
    // );
    setReviewHandler(false);
    dispatch(nextQues(quesData.initialQues));
  };

  const reviewAndNext = () => {
    if (quesData.initialQues[data.initialQues - 1].ansId === "")
      toast.error("Select an option");
    //change the review to true
    // submitAnswer({
    //   id: quesData.initialQues[data.initialQues - 1]._id,
    //   quesId: quesData.initialQues[data.initialQues - 1].quesId,
    //   ansId: quesData.initialQues[data.initialQues - 1].ansId,
    // });
    setReviewHandler(true);
    dispatch(nextQues(quesData.initialQues));
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
    <div className="mt-16 bg-gradient-to-r from-testFooterGrad1 to-testFooterGrad2 py-4 px-4 absolute bottom-0 w-3/5 left-16">
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
      <ToastContainer />
    </div>
  );
};

export default TestFooter;
