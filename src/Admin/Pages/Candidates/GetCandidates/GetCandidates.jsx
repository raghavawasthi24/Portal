import React from "react";
import CandidateDisplay from "./components/CandidateDisplay";
import Buttons from "./components/Button";
import SearchBar from "./components/SearchBar";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const GetCandidates = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check = Cookies.get("apage2");
    if (!check) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="w-screen h-screen flex justify-between">
      <Header />
      <div className="w-2/3" style={{ margin: "7rem 0.5rem 0 3rem" }}>
        <CandidateDisplay />
      </div>
      <div
        className="w-1/3 flex-col justify-between items-center"
        style={{ margin: "7rem 4rem 0 0.5rem" }}
      >
        <SearchBar />
        <div className="mt-10">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default GetCandidates;
