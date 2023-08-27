import React from 'react';
import Feedback from './components/Feedback';
import QuesControl from '../../../components/QuesControl';
import Header from "../../../components/Header";
import QuesTab from "../../../components/QuesTab";

const GetFeedback = () => {
  return (
    <div className='w-screen h-screen flex'>
        <Header/>
        <div className='w-2/3 h-screen flex flex-col justify-between mx-auto overflow-x-hidden overflow-y-scroll'>
              <Feedback/>
        </div>
        
    </div>
  )
}

export default GetFeedback