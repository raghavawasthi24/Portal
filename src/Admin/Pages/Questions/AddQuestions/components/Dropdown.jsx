import { FormControl, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quesCtgSel } from "../../../../../store/slices/QuestionsSlice";
// import { moveQues } from '../../store/slices/PrevNextSlice';
import { useEffect } from "react";

const Dropdown = () => {
  const techArr = [
    {
      value: "HTML",
      label: "HTML",
    },
    {
      value: "CSS",
      label: "CSS",
    },
    {
      value: "JavaScript",
      label: "JavaScript",
    },
    {
      value: "Aptitude",
      label: "Aptitude",
    },
    {
      value: "Sql",
      label: "SQL",
    },
    {
      value: "C",
      label: "C",
    },
    {
      value: "Cpp",
      label: "C++",
    },
    {
      value: "Java",
      label: "Java",
    },
    {
      value: "Python",
      label: "Python",
    },
  ];
  const [selTech, setSelTech] = useState(techArr[0].value);
  const handleTech = (e) => {
    setSelTech(e.target.value);
    //  dispatch(moveQues(1))
    dispatch(quesCtgSel(e.target.value));
  };

  const currentdata = useSelector((state) => state.quesList);

  const dispatch = useDispatch();
  return (
    <div className="w-2/3 bg-gradient-to-r from-dropdownGrad1 via-dropdownGrad2 to-dropdownGrad3 mx-auto">
      <FormControl sx={{ width: "100%" }}>
        <Select value={selTech} onChange={handleTech}>
          {techArr.map((item, key) => {
            return (
              <MenuItem key={key} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
