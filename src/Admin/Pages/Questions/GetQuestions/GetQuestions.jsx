import React from 'react';
import Question from "./components/Question"
import QuesControl from './components/QuesControl';
import QuesTab from './components/QuesTab';
import Dropdown from './components/Dropdown';


const GetQuestions = () => {
  return (
    <div className='w-full h-screen flex px-8'>
        <div className='w-2/3 flex flex-col justify-between'>
            <Question/>
            <QuesControl/>
        </div>
        <div className='w-1/3 flex flex-col justify-center'>
          <Dropdown/>
            <QuesTab/>
        </div>
    </div>
  )
}

export default GetQuestions