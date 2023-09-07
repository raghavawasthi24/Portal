import React from "react";
import Feedback from "./components/Feedback";
import QuesControl from "../../../components/QuesControl";
import Header from "../../../components/Header";
import QuesTab from "../../../components/QuesTab";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const GetFeedback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check = Cookies.get("apage3");
    if (!check) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Header />
      <div className="w-full h-screen mt-14 flex justify-center items-center mx-auto overflow-x-hidden">
        <Feedback />
      </div>
    </div>
  );
};

export default GetFeedback;
