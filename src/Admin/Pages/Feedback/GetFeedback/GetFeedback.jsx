import React from 'react';
import Feedback from './components/Feedback';
import QuesControl from '../../../components/QuesControl';
import Header from "../../../components/Header"

const GetFeedback = () => {
  return (
    <div className='w-screen h-screen'>
        <Header/>
        <div className='w-2/3 h-screen flex flex-col justify-between'>
          <div className=' mt-14 '>
              <Feedback/>
          </div>
          <div>
              <QuesControl/>
          </div>
        </div>
    </div>
  )
}

export default GetFeedback