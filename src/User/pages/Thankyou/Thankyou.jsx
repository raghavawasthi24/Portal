import { Box } from "@mui/material";

import "./Thankyou.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Thankyou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check = Cookies.get("spage4");
    if (!check || check == "false") {
      navigate("/login");
    }
    localStorage.removeItem("savedTime");
  }, []);
  return (
    <div className="ThankMain">
      <p className="ThankHead">Thankyou for participating !</p>
      <p className="text-xl">We will reach out to you soon..</p>
    </div>
  );
};

export default Thankyou;
