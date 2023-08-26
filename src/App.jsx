import React, { useEffect, useState } from "react";
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
import TestResult from "./User/pages/TestResult/TestResult";

const App = () => {
  useEffect(() => handle.enter, []);
  const handle = useFullScreenHandle();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // Check for authentication status in cookies
    const cookieIsLoggedIn = Cookies.get("isLoggedIn") === "true";
    const cookieIsAdmin = Cookies.get("isAdmin") === "true";
    setIsLoggedIn(cookieIsLoggedIn);
    setIsAdmin(cookieIsAdmin);
  }, []);

  const ProtectedUserRoutes = () => (
   <Routes>
     {/* <Route exact path="loader" element={<Loader />} /> */}
 <Route exact path="/" element={<Instruction />} />
  <Route exact path="animation" element={<LandingPage />}></Route>
 <Route exact path="test" element={<Test />}></Route>
  <Route exact path="feedback" element={<Feedback />} />
  <Route exact path="Thankyou" element={<Thankyou />} />
   </Routes>
  );
  const ProtectedAdminRoutes = () => (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="leaderboard" element={<LeaderBoard />} />
      <Route path="getCandidate" element={<GetCandidates />} />
      <Route path="addQuestions" element={<AddQuestions />} />
      <Route path="addfeedback" element={<AddFeedback />} />
      <Route path="getfeedback" element={<GetFeedback />} />
      <Route exact path="result" element={<TestResult />} />
    </Routes>
  );

  return (
    <FullScreen handle={handle}>
      <BrowserRouter>
        <Routes>
        <Route
            path="/*"
            element={
              isLoggedIn ? (
                isAdmin ? (
                  <ProtectedAdminRoutes />
                ) : (
                  <ProtectedUserRoutes />
                )
              ) : (
                <Login 
                 />
              )
            }
          />
         
         
        </Routes>
      </BrowserRouter>
     </FullScreen>
  );
};

export default App;