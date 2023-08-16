import React from 'react';
import Feedback from './components/Feedback';
import QuesControl from '../../../components/QuesControl';
import Header from "../../../components/Header";
import QuesTab from "../../../components/QuesTab";

const GetFeedback = () => {
  return (
    <div className='w-screen h-screen flex'>
        <Header/>
        <div className='w-2/3 h-screen flex flex-col justify-between mx-auto'>
          <div className=' mt-14  '>
              <Feedback/>
          </div>
          
        </div>
        
    </div>
  )
}

export default GetFeedback