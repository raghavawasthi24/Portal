import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";

const Timer = () => {
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        // Timer has reached 0, perform any desired action here
      } else {
        if (minutes === 0 && seconds === 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div className="flex flex-col mt-4 !text-center">
      <Typography
        variant="h5"
        className="text-center bg-gradient-to-r from-timerGrad1 to-timerGrad2 p-4"
      >
        Time Left
      </Typography>
      <Grid
        container
        // spacing={2}
        gap={6}
        justifyContent="center"
        alignItems="center"
        sx={{ pt: "10px", ml: "0" }}
      >
        <Grid item>
          <Typography
            variant="h5"
            className="!bg-reviewColor p-2 !text-white rounded"
          >
            {hours.toString().padStart(2, "0")}
          </Typography>
          <Typography variant="caption">Hours</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            className="!bg-reviewColor p-2 !text-white rounded"
          >
            {minutes.toString().padStart(2, "0")}
          </Typography>
          <Typography variant="caption">Minutes</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            className="!bg-reviewColor p-2 !text-white rounded"
          >
            {seconds.toString().padStart(2, "0")}
          </Typography>
          <Typography variant="caption">Seconds</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timer;
