import React from "react";
import entryVideo from "../../assets/CSIAnimation.gif";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies.get("spage2");
    if (cookie) navigate("/test");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/test");
    }, 5000);
  }, []);
  return (
    <div>
      <img
        src={entryVideo}
        alt="entryvideo"
        style={{ height: "60vh", margin: "20vh auto " }}
      />
    </div>
  );
};

export default LandingPage;
