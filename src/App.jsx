import React from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login"
import Instruction from "./User/pages/instruction/instruction";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard"
import GetQuestions from "./Admin/Pages/Questions/GetQuestions/GetQuestions";
import AdminHome from "./Admin/AdminHome";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="test" element={<Test />}/>

        <Route exact path="instruction" element={<Instruction />}/>

        <Route exact path="leaderboard" element={<LeaderBoard/>}/>
        <Route exact path="getQuestion" element={<GetQuestions/>}/>
        <Route exact path="admin" element={<AdminHome/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
