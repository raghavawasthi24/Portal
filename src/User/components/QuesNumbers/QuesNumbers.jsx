import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const QuesNumbers = ({ setActiveQuestion }) => {
  const quesCount = [1, 2, 3, 4, 5, 6, 7, 8];
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
        gap={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: "10px" }}
      >
        {quesCount?.map((ques, id) => {
          return (
            <Grid item key={id}>
              <Button color="error" variant="contained">
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
