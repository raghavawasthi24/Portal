import React, { useEffect } from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./Admin/Pages/LeaderBoard/LeaderBoard";
import AdminHome from "./Admin/AdminHome";
import GetCandidates from "./Admin/Pages/Candidates/GetCandidates/GetCandidates";
import AddCandidate from "./Admin/Pages/Candidates/AddCandidates/AddCandidates";
import Instruction from "./User/pages/instruction/instruction";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Feedback from "./User/pages/Feedback/Feedback";
import Thankyou from "./User/pages/Thankyou/Thankyou";
import AddQuestions from "./Admin/Pages/Questions/AddQuestions/AddQuestions";
import AddFeedback from "./Admin/Pages/Feedback/AddFeedback/AddFeedback";
import GetFeedback from "./Admin/Pages/Feedback/GetFeedback/GetFeedback";
import LandingPage from "./User/pages/LandingPage/LandingPage";
import UserRoutes from "./User/utils/UserRoutes";
import AdminRoutes from "./User/utils/AdminRoutes";
const App = () => {
  useEffect(() => handle.enter, []);
  const handle = useFullScreenHandle();

  // Restricting user to use keyboard shortcuts
  // window.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  // document.addEventListener("keydown", function (e) {
  //   if (e.ctrlKey || e.shiftKey || e.altKey) {
  //     e.preventDefault();
  //   }
  // });
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue =
      "Are you sure you want to leave this page? Your unsaved changes may be lost.";
  });

  return (
    <FullScreen handle={handle}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route element={<UserRoutes />}>
            <Route exact path="/instruction" element={<Instruction />} />
            <Route exact path="/animation" element={<LandingPage />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/Thankyou" element={<Thankyou />} />
          </Route>

          <Route element={<AdminRoutes />}>
            <Route exact path="/admin" element={<AdminHome />} />
            <Route exact path="/leaderboard" element={<LeaderBoard />} />
            <Route exact path="/getCandidate" element={<GetCandidates />} />
            <Route exact path="/addCandidate" element={<AddCandidate />} />
            <Route exact path="/addQuestions" element={<AddQuestions />} />
            <Route exact path="/addfeedback" element={<AddFeedback />} />
            <Route exact path="/getfeedback" element={<GetFeedback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FullScreen>
  );
};

export default App;
