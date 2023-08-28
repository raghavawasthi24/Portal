import React from "react";
import { useNavigate } from "react-router-dom";
import GetQuestions from "./Pages/Questions/GetQuestions/GetQuestions";
import { useEffect } from "react";
import Cookies from "js-cookie";
// import Header from './components/Header/Header';

const index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check = Cookies.get("apage1");
    if (!check) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <GetQuestions />
    </>
  );
};

export default index;
