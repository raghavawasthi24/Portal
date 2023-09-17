import { Tab, Tabs } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quesCtgSel } from "../../../store/slices/QuestionsSlice";
import { moveQues } from "../../../store/slices/QuestionsSlice";
import axios from "axios";
import { toast } from "react-toastify";

const QuesTab = () => {
  const optionalCategory = localStorage.getItem("language");
  // const quesCtg = useSelector((state) => state.prevNext);
  const [quesType, setQuesType] = useState(["HTML", "CSS", "Sql", "Aptitude"]);

  useEffect(() => {
    const optionalCategory = localStorage.getItem("language");
    const id = localStorage.getItem("id");
    if (!optionalCategory) {
      axios
        .get(`${import.meta.env.VITE_APP_NODE_URL}/${id}`)
        .then(() => {
          localStorage.setItem("language", Language);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
    setQuesType(["HTML", "CSS", "Sql", "Aptitude", optionalCategory]);
  }, [optionalCategory]);

  const [selTech, setSelTech] = useState(quesType[0]);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const currentdata = useSelector((state) => state?.quesList);

  useEffect(() => {
    // console.log(currentdata.initialQues[0].question)
    dispatch(quesCtgSel(selTech));
  }, [currentdata?.initialQues[0]?.question]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelTech(quesType[newValue]);
    dispatch(quesCtgSel(quesType[newValue]));
    dispatch(moveQues(1));
  };

  useEffect(() => {
    const index = quesType.findIndex(
      (item) => item === currentdata.quesCategory
    );
    setValue(index);
    setSelTech(currentdata.quesCategory);
  }, [currentdata.quesCategory]);

  return (
    <div className="mt-0 mb-4  shadow-md shadow-gray-600 mx-32">
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        {quesType?.map((type, id) => {
          return <Tab label={type} key={id} className="shadow" />;
        })}
      </Tabs>
    </div>
  );
};

export default QuesTab;
