import React from "react";
import CandidateDisplay from "./components/CandidateDisplay";
import Buttons from "./components/Button";
import SearchBar from "./components/SearchBar";

const GetCandidates = () => {
  return (
    <div className="w-screen flex justify-between p-20">
    <div className="w-2/3">
      <CandidateDisplay />
    </div>
    <div className="w-1/3 flex-col justify-between items-center m-2">
       <SearchBar/>
       <Buttons/>
       
    </div>
    </div>
  );
};

export default GetCandidates;
