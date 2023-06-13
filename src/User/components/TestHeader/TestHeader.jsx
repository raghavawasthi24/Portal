import React from "react";
import { Typography } from "@mui/material";

const TestHeader = () => {
  return (
    <div className="">
      <div className="w-8 relative -left-16 top-0">
        <img alt="logo" src="Images/csiLogo.svg" />
      </div>
      <div className="grid grid-flow-col justify-stretch">
        <Typography variant="h5" className="text-center w-full" align="center">
          CSI Exam Portal
        </Typography>
      </div>
    </div>
  );
};

export default TestHeader;
