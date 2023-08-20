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

const App = () => {
  useEffect(() => handle.enter, []);
  const handle = useFullScreenHandle();
  const [admin, setAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <FullScreen handle={handle}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login setAdmin={setAdmin} setLoggedIn={setLoggedIn} />
            }/>
          <Route
            exact
            path="/*"
            element={
              // <Login handleAdmin={handleAdmin} handleLogin={handleLogin} />
              <Login setAdmin={setAdmin} setLoggedIn={setLoggedIn} />

            }
          ></Route>

          {/* Admin */}
          {admin && loggedIn && (
            <>
              <Route exact path="/admin" element={<AdminHome />} />
              <Route exact path="/*" element={<AdminHome />} />
              <Route exact path="/leaderboard" element={<LeaderBoard />} />
              <Route exact path="/getCandidate" element={<GetCandidates />} />
              <Route exact path="/addQuestions" element={<AddQuestions />} />
              <Route exact path="/addfeedback" element={<AddFeedback />} />
              <Route exact path="/getfeedback" element={<GetFeedback />} />
          
            </>
          ) }
          {!admin && loggedIn && (
            
            <>
              {/* <Route exact path="/loader" element={<Loader />} /> */}
              <Route exact path="/*" element={<Instruction />} />
              <Route exact path="/instruction" element={<Instruction />} />
              <Route exact path="/animation" element={<LandingPage />}></Route>
              <Route exact path="/test" element={<Test />}></Route>
              <Route exact path="/feedback" element={<Feedback />} />
              <Route exact path="/Thankyou" element={<Thankyou />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
     </FullScreen>
  );
};

export default App;
