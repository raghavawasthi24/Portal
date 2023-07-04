import React from 'react';
import { Routes,Route } from 'react-router-dom';
import GetQuestions from "./Pages/Questions/GetQuestions/GetQuestions";
import Header from './components/Header/Header';

const index = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route to="/" element={<GetQuestions/>}/>
    </Routes>
    </>
  )
}

export default index