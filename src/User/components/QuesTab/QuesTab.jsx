import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

const QuesTab = () => {
  const quesType = ["HTML", "CSS", "SQL", "Aptitude", "C"];
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   setSection(quesType.values.toLowerCase());
  // }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <div className="mx-32 mt-0 mb-6  shadow-md shadow-gray-600">
      <Tabs value={value} onChange={handleChange} centered>
        {quesType?.map((type, id) => {
          return <Tab label={type} key={id} className="shadow" />;
        })}
      </Tabs>
    </div>
  );
};

export default QuesTab;
