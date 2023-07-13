import React, { useEffect } from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard";
import GetQuestions from "./Admin/Pages/Questions/GetQuestions/GetQuestions";
import AdminHome from "./Admin/AdminHome";
import GetCandidates from "./Admin/Pages/Candidates/GetCandidates/GetCandidates";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import EditQuestion from "./Admin/Pages/Questions/GetQuestions/components/EditQuestion";

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
          <Route exact path="getQuestion" element={<GetQuestions />} />
          <Route exact path="getCandidate" element={<GetCandidates />} />
          <Route exact path="admin" element={<AdminHome />} />
          <Route exact path="editQuestion" element={<EditQuestion/>} />
        </Routes>
      </BrowserRouter>
    </FullScreen>
  );
};

export default App;
