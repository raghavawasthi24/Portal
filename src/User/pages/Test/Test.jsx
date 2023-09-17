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
import { toast } from "react-toastify";
import Loader from "../../../Loader/Loader";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toggleLoader } from "../../../store/slices/LoaderSlice";

const Test = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(90);
  const loader = useSelector((state) => state.loader.loader);

  useEffect(() => {
    const check = Cookies.get("spage2");
    if (!check || check == "false") {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    const cookie = Cookies.get("spage3");
    if (cookie) navigate("/feedback");
  }, []);

  //Remove while in development mode
  useEffect(() => {
    // For switching to different tab: submit api call
    if (timer === 0) {
      axios
        .post(
          `${
            import.meta.env.VITE_APP_DJANGO_URL
          }/accounts/submit/${localStorage.getItem("studentNo")}`
        )
        .then(() => {
          Cookies.remove("spage2");
          Cookies.set("spage4", true);
          navigate("/thankyou");
        });
    }
  }, [timer]);

  const category = useSelector((state) => state.quesList.quesCategory);

  // Retrieve the ques data from api
  useEffect(() => {
    const postCategory = category;
    dispatch(toggleLoader(true));
    axios
      .get(`${import.meta.env.VITE_APP_NODE_URL}/category/${postCategory}`)
      .then((res) => {
        // console.log(res);
        dispatch(quesList(res.data.msg));
        dispatch(toggleLoader(false));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        dispatch(toggleLoader(false));
        toast.error("Something went wrong");
      });
  }, [category]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isActive) {
      let timerTemp;
      interval = setInterval(() => {
        const time = localStorage.getItem("timer");
        if (time > 0) {
          timerTemp = time;
        } else {
          timerTemp = 90;
          localStorage.setItem("timer", timer);
        }
        timerTemp -= 1;
        // console.log(timerTemp);
        setTimer(timerTemp);
        localStorage.setItem("timer", timerTemp);
        document.title = `InActive Tab - Countdown: ${timerTemp}s`;
      }, 1000);
    } else {
      clearInterval(interval);
      document.title = "CSI Exam Portal";
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, timer]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="flex justify-evenly h-screen">
        {/* <ToastContainer /> */}
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
      <div style={{ display: loader ? "" : "none" }}>
        <Loader />
      </div>
    </>
  );
};

export default Test;
