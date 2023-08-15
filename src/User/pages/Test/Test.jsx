import React, { useEffect } from "react";
import QuesTab from "../../components/QuesTab/QuesTab";
import Question from "../../components/Question/Question";
import QuesNumbers from "../../components/QuesNumbers/QuesNumbers";
import Timer from "../../components/Timer/Timer2";
import TestFooter from "../../components/TestFooter/TestFooter";
import TestHeader from "../../components/TestHeader/TestHeader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { quesList } from "../../../store/slices/QuestionsSlice";
import BasicModal from "./components/PopUp";

const Test = () => {
  const data = useSelector((state) => state.prevNext);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://csi-examportal.onrender.com/api/v1/getquestions")
      .then((res) => {
        // console.log(res)
        dispatch(quesList(res.data.msg));
      });
  }, []);
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col justify-start w-8/12 m-0 py-4 pl-12">
        <TestHeader />
        <QuesTab />
        <Question />
        <TestFooter />
      </div>
      <div className="flex flex-col w-4/12 m-0 py-4 pr-12 justify-start">
        <div>
          <Timer />
          <QuesNumbers />
        </div>
        <BasicModal />
      </div>
    </div>
  );
};

export default Test;
