import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { moveQues } from "../../../store/slices/PrevNextSlice";

const QuesNumbers = ({ setActiveQuestionId }) => {
  const quesCount = [1, 2, 3, 4];
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col mt-12">
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
        alignItems="center"
        sx={{ mt: "10px" }}
      >
        {quesCount?.map((ques, id) => {
          return (
            <Grid item key={id}>
              <Button
                color="error"
                variant="contained"
                onClick={() => dispatch(moveQues(ques))}
              >
                {ques}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default QuesNumbers;
