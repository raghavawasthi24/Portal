import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="cont">
      <div className="small">
        <img src={"/Images/Frame1.svg"} alt="" className="frame1" />
        <img src={"/Images/Frame2.svg"} alt="" className="frame2" />
        <img src={"/Images/Frame3.svg"} alt="" className="frame3" />
      </div>
    </div>
  );
};

export default Loader;
