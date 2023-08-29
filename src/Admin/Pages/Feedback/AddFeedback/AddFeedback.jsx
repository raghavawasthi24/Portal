import React from "react";
import Feedback from "./components/Feedback";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const AddFeedback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const check = Cookies.get("apage7");
    if (!check) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="w-2/3 mx-auto" style={{ marginTop: "7rem" }}>
        <Feedback />
      </div>
    </div>
  );
};

export default AddFeedback;
