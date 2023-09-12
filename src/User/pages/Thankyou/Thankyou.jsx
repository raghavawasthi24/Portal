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
      <Box className="ThankImg">
        <img
          style={{ width: "12rem", height: "12rem" }}
          src="/Images/CSI LOGO.svg"
        />
      </Box>
      <p className="ThankHead">
        Thankyou for participating
        <br /> in CINE'23
      </p>

      <Box className="Copyright">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M15 0C6.71571 0 0 6.71571 0 15C0 23.2843 6.71571 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71571 23.2843 0 15 0ZM22.0847 20.973C21.9884 21.0859 19.6789 23.739 15.4405 23.739C10.318 23.739 6.70155 19.9127 6.70155 14.9345C6.70155 10.017 10.4518 6.26105 15.3968 6.26105C19.4467 6.26105 21.5641 8.518 21.6522 8.61411C21.7608 8.73247 21.827 8.88351 21.8406 9.04356C21.8541 9.20361 21.8142 9.36364 21.7271 9.49857L20.3734 11.5946C20.1285 11.9737 19.6008 12.0393 19.2706 11.7334C19.2565 11.7205 17.666 10.2891 15.5278 10.2891C12.7386 10.2891 11.0571 12.3198 11.0571 14.8908C11.0571 17.2861 12.6003 19.7109 15.5497 19.7109C17.8902 19.7109 19.4981 17.9969 19.514 17.9796C19.8244 17.643 20.3644 17.6751 20.6335 18.0432L22.1182 20.0738C22.2145 20.2056 22.2636 20.366 22.2576 20.5292C22.2515 20.6923 22.1906 20.8487 22.0847 20.973Z"
            fill="#3718AE"
          />
        </svg>

        <p style={{ paddingLeft: "0.5rem" }}>
          Copyrights by Computer Society of India
        </p>
      </Box>
    </div>
  );
};

export default Thankyou;
