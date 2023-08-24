import React, { useState, useEffect } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";
import { nextQues } from "../../../store/slices/PrevNextSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { markReview } from "../../../store/slices/ReviewSlice";
import SubmitAnswer from "../../utils/SubmitAns";

const TestFooter = () => {
  const dispatch = useDispatch();
  const quesData = useSelector((state) => state.quesList);
  const category = quesData.quesCategory;
  const quesState = useSelector((state) => state.review.categories);
  const currentCategoryQuestions =
    quesState.find((item) => item.category === category)?.questions || [];
  const data = useSelector((state) => state.prevNext);

  const [answered, setAnswered] = useState(false);
  const [currentAnsId, setCurrentAnsId] = useState("");

  useEffect(() => {
    const currentQuestion = quesData.initialQues[data.initialQues - 1];
    const question = currentCategoryQuestions.find(
      (item) => item.id === currentQuestion.quesId
    );

    if (question) {
      if (question.ansId !== "") {
        setAnswered(true);
        setCurrentAnsId(question.ansId);
      }
    } else {
      setAnswered(false);
    }
  }, [currentCategoryQuestions, data, quesData]);

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
  };

  const saveAndNext = () => {
    if (!answered) {
      toast.error("Select an option");
      return;
    }
    setReviewHandler(false);
    SubmitAnswer({
      status: 0,
      quesId: quesData.initialQues[data.initialQues - 1].quesId,
      ansId: currentAnsId,
      category: currentQuestion.category,
    });
    dispatch(nextQues(quesData.initialQues));
  };

  const reviewAndNext = () => {
    if (!answered) {
      toast.error("Select an option");
      return;
    }

    SubmitAnswer({
      status: 1,
      quesId: quesData.initialQues[data.initialQues - 1].quesId,
      ansId: currentAnsId,
      category: currentQuestion.category,
    });
    setReviewHandler(true);
    dispatch(nextQues(quesData.initialQues));
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
