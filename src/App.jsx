import React, { useEffect, useState } from "react";
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
import Error from "./Error/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [smallDeviceStatus, setSmallDeviceStatus] = useState(false);
  useEffect(() => {
    const checkMobileView = () => {
      if (window.innerWidth <= 768 || window.innerHeight > window.innerWidth) {
        toast.error("Open in Laptop/Desktop!", {
          autoClose: 5000,
        });
        setSmallDeviceStatus(true);
      } else {
        setSmallDeviceStatus(false);
      }
    };

    // Call the function on initial load
    checkMobileView();

    // // Listen for window resize events and recheck mobile view
    // window.addEventListener("resize", checkMobileView);

    // // Cleanup event listener on component unmount
    // return () => {
    //   window.removeEventListener("resize", checkMobileView);
    // };
  }, []);
  useEffect(() => handle.enter, []);
  const handle = useFullScreenHandle();

  // Restricting user to use keyboard shortcuts
  window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.altKey) {
      e.preventDefault();
    }
  });
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue =
      "Are you sure you want to leave this page? Your unsaved changes may be lost.";
  });

  return (
    <FullScreen handle={handle}>
      <BrowserRouter>
        <Routes>
          {smallDeviceStatus ? (
            <>
              <Route path="/*" element={<Error />} />
            </>
          ) : (
            <>
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
            </>
          )}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </FullScreen>
  );
};

export default App;
