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
    <div className="flex flex-col">
      <Typography variant="h4">Time Left</Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h4">
            {hours.toString().padStart(2, "0")}
          </Typography>
          <Typography variant="caption">Hours</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            {minutes.toString().padStart(2, "0")}
          </Typography>
          <Typography variant="caption">Minutes</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            {seconds.toString().padStart(2, "0")}
          </Typography>
          <Typography variant="caption">Seconds</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timer;
