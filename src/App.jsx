import React from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard"
import GetQuestions from "./Admin/Pages/Questions/GetQuestions/GetQuestions";
<<<<<<< HEAD
import GetCandidates from "./Admin/Pages/Candidates/GetCandidates/GetCandidates";
=======
import AdminHome from "./Admin/AdminHome";
>>>>>>> 92164ee5c268e03214f86a641ffa46a2af5b00bd


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="test" element={<Test />}></Route>
        <Route exact path="leaderboard" element={<LeaderBoard/>}/>
        <Route exact path="getQuestion" element={<GetQuestions/>}/>
<<<<<<< HEAD
        <Route exact path="getCandidate" element={<GetCandidates/>}/>
=======
        <Route exact path="admin" element={<AdminHome/>}/>
>>>>>>> 92164ee5c268e03214f86a641ffa46a2af5b00bd
      </Routes>
    </BrowserRouter>
  );
};

export default App;
