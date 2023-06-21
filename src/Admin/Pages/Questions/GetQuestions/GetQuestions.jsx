import React from 'react';
import Question from "./components/Question"
import QuesControl from './components/QuesControl';


const GetQuestions = () => {
  return (
    <div className='w-full'>
        <div className='w-2/3'>
            <Question/>
            <QuesControl/>
        </div>
        <div className='w-1/3'>

        </div>
    </div>
  )
}

export default GetQuestions