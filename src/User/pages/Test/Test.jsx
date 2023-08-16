import React, { useEffect, useState } from "react";
import QuesTab from "../../components/QuesTab/QuesTab";
import Question from "../../components/Question/Question";
import QuesNumbers from "../../components/QuesNumbers/QuesNumbers";
import Timer from "../../components/Timer/Timer2";
import TestFooter from "../../components/TestFooter/TestFooter";
import TestHeader from "../../components/TestHeader/TestHeader";
import { useDispatch } from "react-redux";
import axios from "axios";
import { quesList } from "../../../store/slices/QuestionsSlice";
import BasicModal from "./components/PopUp";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../../Loader/Loader";

const Test = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://csi-examportal.onrender.com/api/v1/getquestions")
      .then((res) => {
        // console.log(res)
        dispatch(quesList(res.data.msg));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Something went wrong");
      });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="flex justify-evenly">
      <ToastContainer />
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
