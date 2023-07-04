import React from "react";
import Test from "./User/pages/Test/Test";
import Login from "./User/pages/Login/Login"
import Instruction from "./User/pages/instruction/instruction";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="test" element={<Test />}></Route>
        <Route exact path="instruction" element={<Instruction />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
