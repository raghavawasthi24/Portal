import React from 'react';
import Feedback from "./components/Feedback"
import Header from "../../../components/Header"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const AddFeedback = () => {
  return (
    <div>
      <Header/>
      <div className='w-2/3 mx-auto' style={{marginTop:"7rem"}}>
        <Feedback/>
        <Button variant="contained" sx={{width:"30%",margin:"0.8rem auto", padding:"0.5rem"}} endIcon={<SendIcon />}>
        Submit
      </Button>
      </div>
    </div>
  )
}

export default AddFeedback