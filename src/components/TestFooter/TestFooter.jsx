import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const TestFooter = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Button>Mark for Review</Button>
        <Button>Save And Next</Button>
      </div>
      <div className="flex">
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
