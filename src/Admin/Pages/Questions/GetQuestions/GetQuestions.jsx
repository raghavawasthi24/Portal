import React from "react";
import Question from "./components/Question";
import QuesControl from "./components/QuesControl";
import QuesTab from "../../../components/QuesTab";
import Dropdown from "./components/Dropdown";
import Header from "../../../components/Header";
import Loader from "../../../../Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { quesCtgSel } from "../../../../store/slices/QuestionsSlice";

const GetQuestions = () => {
  const data = useSelector((state) => state.quesList);
  const dispatch=useDispatch()
  const loader=useSelector(state=>state.loader.loader)
  // useEffect(() => {
  //   if (data.initialQues[0].question === "N/A") setLoader(true);
  //   else setLoader(false);
  // }, [data.initialQues]);

  useEffect(()=>{
    dispatch(quesCtgSel("HTML"))
  },[])


  return (
  <>
      <div className="w-screen h-screen flex flex-col justify-evenly">
        <Header />
        <div className="flex px-8 pt-20 w-screen h-screen justify-evenly">
          <div className="w-2/3 flex flex-col justify-between">
            <Question />
            <QuesControl />
          </div>
          <div className="w-1/3 flex flex-col justify-start p-8 pt-20">
            <Dropdown />
            <QuesTab />
          </div>
        </div>
      </div>
      <div
        className=""
        style={{  display: loader ? "" : "none" }}
      >
        <Loader />
      </div>
    
      </>

  );
};

export default GetQuestions;
