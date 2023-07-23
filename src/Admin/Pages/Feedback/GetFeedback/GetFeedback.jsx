import React from 'react';
import Feedback from './components/Feedback';
import FeedControl from './components/FeedControl';
import Header from "../../../components/Header/Header"

const GetFeedback = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-between'>
        <Header/>
        <div className='w-2/3 mx-auto mt-14'>
            <Feedback/>
        </div>
        <div className='w-2/3 mx-auto'>
            <FeedControl/>
        </div>
    </div>
  )
}

export default GetFeedback