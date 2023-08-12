import React from 'react';
import Question from "./components/Question"
import QuesControl from './components/QuesControl';
import QuesTab from '../../../components/QuesTab';
import Dropdown from '../../../components/Dropdown';
import Header from "../../../components/Header"


const GetQuestions = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-evenly'>
      <Header/>
      <div className='flex px-8 pt-20 w-screen h-screen justify-evenly'>
          <div className='w-2/3 flex flex-col justify-between'>
              <Question/>
              <QuesControl/>
          </div>
          <div className='w-1/3 flex flex-col justify-start p-8 pt-20'>
            <Dropdown/>
              <QuesTab/>
          </div>
      </div>
    </div>
  )
}

export default GetQuestions