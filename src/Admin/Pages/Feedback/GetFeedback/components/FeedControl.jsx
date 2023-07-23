import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {useSelector,useDispatch} from "react-redux";

import { prevQues,nextQues } from '../../../../../store/slices/PrevNextSlice';
import { Button } from '@mui/material';

const FeedControl = () => {

  const data = useSelector(state => state.prevNext)
  const dispatch=useDispatch();

  return (
    <div className='flex justify-between pt-4 pb-10 bg-gradient-to-r from-testFooterGrad1 to-testFooterGrad2'>
  
        <Button variant='text' sx={{color:"black"}} onClick={()=>dispatch(prevQues())} startIcon={<ArrowBackIosNewIcon/>}>
             Previous Question
        </Button>
        <Button  variant='text' sx={{color:"black"}} onClick={()=>dispatch(nextQues())} endIcon={<ArrowForwardIosIcon/>}>
            Next Question
            
        </Button>
    </div>
  )
}

export default FeedControl