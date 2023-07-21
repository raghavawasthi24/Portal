import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const QuesTab = ({ setSection }) => {
  const quesType = ["HTML", "CSS", "SQL", "Aptitude", "C"];
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   setSection(quesType.values.toLowerCase());
  // }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSection(quesType[newValue].toLowerCase());

    // console.log(newValue, section);
  };
  return (
    <div className="mt-0 mb-6  shadow-md shadow-gray-600 mx-32">
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        {quesType?.map((type, id) => {
          return <Tab label={type} key={id} className="shadow" />;
        })}
      </Tabs>
    </div>
  );
};

export default QuesTab;
