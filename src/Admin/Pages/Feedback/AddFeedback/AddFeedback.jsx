import React from 'react';
import Feedback from "./components/Feedback"
import Header from "../../../components/Header"


const AddFeedback = () => {
  return (
    <div>
      <Header/>
      <div className='w-2/3 mx-auto' style={{marginTop:"7rem"}}>
        <Feedback/>
        
      </div>
    </div>
  )
}

export default AddFeedback