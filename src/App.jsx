import React, { useEffect } from "react";
import Test from "./User/pages/Test/Test";
<<<<<<< HEAD
import Login from "./User/pages/Login/Login"
import Instruction from "./User/pages/instruction/instruction";
=======
import Login from "./User/pages/Login/Login";
>>>>>>> 2892455be7db83cc4a691764a3b564fede5bccff
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard";
import GetQuestions from "./Admin/Pages/Questions/GetQuestions/GetQuestions";
<<<<<<< HEAD
import AdminHome from "./Admin/AdminHome";

=======
// import AdminHome from "./Admin/AdminHome";
import GetCandidates from "./Admin/Pages/Candidates/GetCandidates/GetCandidates";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
>>>>>>> 2892455be7db83cc4a691764a3b564fede5bccff

const App = () => {
  const handle = useFullScreenHandle();

  useEffect(() => handle.enter, []);
  return (
<<<<<<< HEAD
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
=======
    <FullScreen handle={handle}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="test" element={<Test />}></Route>
          <Route exact path="leaderboard" element={<LeaderBoard />} />
          <Route exact path="admin" element={<GetQuestions />} />
          <Route exact path="getCandidate" element={<GetCandidates />} />
          {/* <Route exact path="admin" element={<AdminHome />} /> */}
        </Routes>
      </BrowserRouter>
    </FullScreen>
>>>>>>> 2892455be7db83cc4a691764a3b564fede5bccff
  );
};

export default App;
