import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const QuesNumbers = () => {
  const quesCount = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col">
      <Typography variant="h4">Questions </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
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
