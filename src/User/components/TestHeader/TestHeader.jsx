import React from "react";
import { Typography } from "@mui/material";

const TestHeader = () => {
  return (
    <div className="flex flex-col-reverse  mt-4">
      <div className="w-8 relative left-2 -top-14">
        <img alt="logo" src="Images/csiLogo.svg" />
      </div>
      <div className="grid grid-flow-col justify-stretch">
        <Typography
          variant="h5"
          className="text-center w-full bg-gradient-to-r from-testHeadGrad1 via-testHeadGrad2 to-testHeadGrad3 p-4 "
          align="center"
        >
          CSI Exam Portal
        </Typography>
      </div>
    </div>
  );
};

export default TestHeader;
