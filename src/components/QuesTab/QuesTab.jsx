import { Tab, Tabs } from "@mui/material";
import React from "react";

const QuesTab = () => {
  const quesType = ["HTML", "CSS", "SQL", "Aptitude", "C"];
  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        {quesType?.map((type, id) => {
          return <Tab label={type} key={id} />;
        })}
      </Tabs>
    </div>
  );
};

export default QuesTab;
