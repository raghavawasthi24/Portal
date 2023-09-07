import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../../Loader/Loader";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = Cookies.get("spage2");
    if (!check || check == "false") {
      navigate("/login");
    }
  }, []);

  const category = useSelector((state) => state.quesList.quesCategory);
  useEffect(() => {
    const postCategory = category;
    axios
      .get(`${import.meta.env.VITE_APP_NODE_URL}/category/${postCategory}`)
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
  }, [category]);
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
