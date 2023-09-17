import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { getLoginTime } from "../../utils/index";
import Cookies from "js-cookie";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(3600); // Total time remaining in seconds
  const studentNumber = localStorage.getItem("studentNo");
  const nav = useNavigate();

  useEffect(() => {
    const savedTime = parseFloat(localStorage.getItem("savedTime"));
    // if (!savedTime) {
    //   // If savedTime is not available, fetch it and set the timer only when it's available.
    //   getLoginTime()
    //     .then((savedTime) => {
    //       handleTimer(savedTime);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching saved time:", error);
    //     });
    // } else {
    // If savedTime is available, set the timer immediately.
    handleTimer(savedTime);
    // }
  }, []);

  const handleTimer = (savedTime) => {
    const currentTime = Math.floor(Date.now() / 1000); // Convert current time to seconds
    if (savedTime) {
      const elapsedTime = currentTime - savedTime;
      setTimeRemaining(Math.max(1 * 60 * 60 - elapsedTime, 0)); // 3 hours in seconds
    }

    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        // console.log("time up bitch");
        clearInterval(timer);
        // Timer has reached 0, perform any desired action here
        // Submit the test api
        axios
          .post(
            `${
              import.meta.env.VITE_APP_DJANGO_URL
            }/accounts/submit/${studentNumber}`
          )
          .then((res) => {
            // console.log(res);
            Cookies.set("spage3", true);
            Cookies.remove("spage2");
            nav("/feedback");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }, 1000);
  };
  // useEffect(() => {
  //   const savedTime = parseFloat(localStorage.getItem("savedTime"));
  //   if (!savedTime) getLoginTime();
  // }, []);

  // useEffect(() => {
  //   const savedTime = parseFloat(localStorage.getItem("savedTime"));

  //   const currentTime = Math.floor(Date.now() / 1000); // Convert current time to seconds
  //   if (savedTime) {
  //     const elapsedTime = currentTime - savedTime;
  //     setTimeRemaining(Math.max(3 * 60 * 60 - elapsedTime, 0)); // 3 hours in seconds
  //   }

  //   const timer = setInterval(() => {
  //     if (timeRemaining > 0) {
  //       setTimeRemaining((prevTime) => prevTime - 1);
  //     } else {
  //       console.log("time up bitch");
  //       clearInterval(timer);
  //       // Timer has reached 0, perform any desired action here
  //       // Submit the test api
  //       axios
  //         .post(
  //           `${
  //             import.meta.env.VITE_APP_DJANGO_URL
  //           }/accounts/submit/${studentNumber}`
  //         )
  //         .then((res) => {
  //           console.log(res);
  //           Cookies.set("spage3", true);
  //           Cookies.remove("spage2");
  //           nav("/feedback");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [timeRemaining]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <div className="flex flex-col mt-4 !text-center align-middle border bg-red-500 h-48">
      <Typography
        variant="h5"
        className="text-center bg-gradient-to-r from-timerGrad1 to-timerGrad2 p-4"
      >
        Time Left
      </Typography>
      <Grid
        container
        gap={6}
        justifyContent="center"
        alignItems="center"
        sx={{ pt: "10px", ml: "0", background: "white", height: "100%" }}
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
