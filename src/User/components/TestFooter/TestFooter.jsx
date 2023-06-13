import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button } from "@mui/material";

const TestFooter = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        {/* <div className="bg-reviewColor border-radius"> */}
        <Button>Mark for Review</Button>
        {/* </div> */}
        <Button>Save And Next</Button>
      </div>
      <div className="flex justify-around mt-4">
        <span>
          <CircleIcon color="error" /> UnAttempted
        </span>
        <span>
          <CircleIcon color="success" />
          Attempted
        </span>
        <span>
          <CircleIcon color="primary" />
          Marked for review
        </span>
      </div>
    </div>
  );
};

export default TestFooter;
