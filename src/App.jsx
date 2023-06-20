import React from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="test" element={<Test />}></Route>
        <Route exact path="leaderboard" element={<LeaderBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
