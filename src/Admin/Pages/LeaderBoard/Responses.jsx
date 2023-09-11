import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
// import { toggleQuestion } from "../../../store/slices/QuestionsSlice";
import { toggleEditOpt } from "../../../store/slices/EditContSlice";
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chip from '@mui/material/Chip';
import { findResponse, nextQues, prevQues } from "../../../store/slices/ResponseSlice";


const Responses = (props) => {
  const dispatch = useDispatch();
  const closeResponses = () => {
    dispatch(toggleEditOpt());
  };

  const data=useSelector(state=>state.responses.currentQues)
  const all_questions=useSelector(state=>state.responses)

  return (
    <div className="w-1/3 flex flex-col gap-2 mt-12 mx-auto bg-white p-5 rounded-lg shadow-lg relative border-t-yellow-800">
      <CancelIcon
        className="absolute top-0 right-0 cursor-pointer"
        onClick={closeResponses}
      />
      <div className="flex justify-between items-center mt-5">
        <p className="font-semibold"> Question-{all_questions?.currentQuesNo+1}</p>
        {
          (data?.ansStatus>0)?<Chip label="correct" color="success" variant="outlined" />:<Chip label="wrong" color="error" variant="outlined" />
          
        }
        
      </div>
      <hr />
      <p>{data?.question}</p>
      <FormControl>
        <RadioGroup
        >
          {
            data?.options?.map((row,index)=>{
              return(
                <FormControlLabel value={row?.name} checked={row?.name===data.user_ans?.name} control={<Radio />} label={row?.name} key={index}/>
            )
            })
            // console.log(data.options)
          }
         
        </RadioGroup>
      </FormControl>

      <div className="mt-8 text-green-700 font-semibold">
        <p>Correct Answer</p>
        <hr />
        <p>{data?.correctAns?.name}</p>
      </div>

      <div className="flex justify-between my-4">
        <Button
          variant="text"
          sx={{ color: "black",backgroundColor:"#ececec" }}
          onClick={() => {dispatch(prevQues()),dispatch(findResponse(all_questions.all_questions))}}
          startIcon={<ArrowBackIosNewIcon />}
        >
          PREV
        </Button>
        <Button
          variant="text"
          sx={{ color: "black",backgroundColor:"#ececec" }}
          onClick={() => {dispatch(nextQues()),dispatch(findResponse(all_questions.all_questions))}}
          endIcon={<ArrowForwardIosIcon />}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default Responses;
