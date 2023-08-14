import React, { useEffect } from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard";
// import GetQuestions from "./Admin/Pages/Questions/GetQuestions/GetQuestions";
import AdminHome from "./Admin/AdminHome";
import GetCandidates from "./Admin/Pages/Candidates/GetCandidates/GetCandidates";
import Instruction from "./User/pages/instruction/instruction";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Feedback from "./User/pages/Feedback/Feedback";
import Thankyou from "./User/pages/Thankyou/Thankyou";
import AddQuestions from "./Admin/Pages/Questions/AddQuestions/AddQuestions";
import AddFeedback from "./Admin/Pages/Feedback/AddFeedback/AddFeedback";
import GetFeedback from "./Admin/Pages/Feedback/GetFeedback/GetFeedback";
import LandingPage from "./User/pages/LandingPage/LandingPage";
import Loader from "./Loader/Loader";

const App = () => {
  const handle = useFullScreenHandle();

  useEffect(() => handle.enter, []);
  return (
    <FullScreen handle={handle}>
      <BrowserRouter>
        <Routes>
         <Route exact path="/animation" element={<LandingPage/>}></Route>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="test" element={<Test />}></Route>
          <Route exact path="leaderboard" element={<LeaderBoard />} />
          <Route exact path="admin" element={<AdminHome/>} />
          <Route exact path="getCandidate" element={<GetCandidates />} />
          <Route exact path="instruction" element={<Instruction/>}/>
          <Route exact path="feedback" element={<Feedback/>}/>
          <Route exact path="Thankyou" element={<Thankyou/>}/>
          <Route exact path="addQuestions" element={<AddQuestions/>}/>
          <Route exact path="addfeedback" element={<AddFeedback/>}/>
          <Route exact path="getfeedback" element={<GetFeedback/>}/>
          <Route exact path="loader" element={<Loader/>}/>
          {/* <Route exact path="admin" element={<AdminHome />} /> */}
        </Routes>
      </BrowserRouter>
    </FullScreen>
  );
};

export default App;
