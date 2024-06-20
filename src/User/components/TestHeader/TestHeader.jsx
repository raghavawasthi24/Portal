import React from "react";
import { Typography } from "@mui/material";

const TestHeader = () => {
  return (
    <div className="flex flex-col-reverse">
      <div className="grid grid-flow-col justify-stretch">
        <Typography
          variant="h5"
          className="text-center w-full bg-gradient-to-r from-testHeadGrad1 via-testHeadGrad2 to-testHeadGrad3 py-2"
          align="center"
        >
          Exam Portal
        </Typography>
      </div>
    </div>
  );
};

export default TestHeader;
