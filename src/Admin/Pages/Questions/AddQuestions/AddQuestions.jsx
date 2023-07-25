import React from "react";
import Header from "../../../components/Header"
import Question from "./components/Question"
import Dropdown from "../../../components/Dropdown";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const AddQuestions = () => {
  return <div>
    <Header/>
    <div className="flex" style={{margin:"7rem 0 0 3rem"}}>
      <div className="w-2/3">
        <Question/>
      </div>
      <div className="w-1/3 flex flex-col justify-between" style={{margin:"3rem 4rem 0 2rem"}}>
         <Dropdown/>

         <Button variant="contained" sx={{width:"80%",margin:"0.8rem auto", padding:"0.5rem"}} endIcon={<SendIcon />}>
        Submit
      </Button>
      </div>
    </div>
  </div>;
};

export default AddQuestions;
