import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveQues } from "../../../store/slices/PrevNextSlice";

const QuesNumbers = () => {
  const quesdata = useSelector((state) => state.quesList);
  const category = quesdata.quesCategory;
  const quesState = useSelector((state) => state.review.categories);
  const currentCategoryQuestions =
    quesState.find((item) => item.category === category)?.questions || [];
  // console.log(currentCategoryQuestions, category);
  // const quesCount = [1, 2, 3, 4];
  const dispatch = useDispatch();

  function findVisitedStatus(inputId, questionsArray) {
    const question = questionsArray.find((item) => item.id === inputId);

    if (question) {
      return {
        visited: question.visited,
        review: question.review,
      };
    } else {
      return { visited: false, review: false };
    }
  }

  return (
    <div className="flex flex-col">
      <Typography
        variant="h5"
        className="text-center  bg-gradient-to-r from-quesGrad1 to-quesGrad2 p-4 px-0"
      >
        Questions
      </Typography>
      <Grid
        container
        spacing={2}
        gap={1}
        justifyContent="center"
        alignItems="start"
        sx={{
          mt: "10px",
          overflowY: "auto",
          height: "32vh",
        }}
      >
        {quesdata.initialQues?.map((ques, id) => {
          const { visited, review } = findVisitedStatus(
            ques.quesId,
            currentCategoryQuestions
          );
          return (
            <Grid item key={id}>
              <Button
                color="error"
                className={
                  visited ? (review ? "!bg-reviewColor" : "!bg-saveColor") : ""
                }
                variant="contained"
                onClick={() => dispatch(moveQues(id + 1))}
              >
                {id + 1}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default QuesNumbers;
