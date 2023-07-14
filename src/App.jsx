import React, { useEffect } from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard";
import GetQuestions from "./Admin/Pages/Questions/GetQuestions/GetQuestions";
// import AdminHome from "./Admin/AdminHome";
import GetCandidates from "./Admin/Pages/Candidates/GetCandidates/GetCandidates";
import Instruction from "./User/pages/instruction/instruction";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const App = () => {
  const handle = useFullScreenHandle();

  useEffect(() => handle.enter, []);
  return (
    <FullScreen handle={handle}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="test" element={<Test />}></Route>
          <Route exact path="leaderboard" element={<LeaderBoard />} />
          <Route exact path="admin" element={<GetQuestions />} />
          <Route exact path="getCandidate" element={<GetCandidates />} />
          <Route exact path="instruction" element={<Instruction/>}/>
          {/* <Route exact path="admin" element={<AdminHome />} /> */}
        </Routes>
      </BrowserRouter>
    </FullScreen>
  );
};

export default App;
