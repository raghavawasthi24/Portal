import { Tab, Tabs } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quesCtgSel } from "../../../store/slices/QuestionsSlice";

const QuesTab = () => {
  const quesType = ["HTML", "CSS", "JavaScript", "Aptitude", "C"];
  const [selTech, setSelTech] = useState(quesType[0]);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const currentdata = useSelector((state) => state.quesList);

  useEffect(() => {
    // console.log(currentdata.initialQues[0].question)
    dispatch(quesCtgSel(selTech));
  }, [currentdata.initialQues[0].question]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelTech(quesType[newValue]);
    dispatch(quesCtgSel(quesType[newValue]));
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
