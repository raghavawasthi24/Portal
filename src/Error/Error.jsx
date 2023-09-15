import React from "react";
import error404 from "./assets/404.png";

const Error = () => {
  return (
    <div className="md:w-2/3 w-full h-screen flex justify-center items-center mx-auto">
      <img src={error404} alt="error" className="w-full" loading="eager" />
    </div>
  );
};

export default Error;
