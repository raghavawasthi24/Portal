import React from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard"
import GetQuestions from "./Admin/Pages/Questions/GetQuestions/GetQuestions";
import GetCandidate from "./Admin/Pages/Candidates/GetCandidates/GetCandidates";
import AdminHome from "./Admin/AdminHome";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="test" element={<Test />}></Route>
        <Route exact path="leaderboard" element={<LeaderBoard/>}/>
        <Route exact path="getQuestion" element={<GetQuestions/>}/>
        <Route exact path="admin" element={<AdminHome/>}/>
        <Route exact path="getcandidate" element={<GetCandidate/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
