import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {useSelector,useDispatch} from "react-redux";
// import { prevQues,nextQues } from '../../../../../actions';
import { prevQues,nextQues } from '../../../../../store/slices/PrevNextSlice';
import { Button } from '@mui/material';

const QuesControl = () => {

  // const myState=useSelector((state)=>state.changeQues);
  const data = useSelector(state => state.prevNext)
  const dispatch=useDispatch();
 

  // const data=useSelector((state)=>{
  //   return state.prevNext;
  // })
  return (
    <div className='flex justify-between pt-4 pb-10 bg-gradient-to-r from-testFooterGrad1 to-testFooterGrad2'>
      {/* <p>{data.initialQty}</p> */}
        <Button variant='text' sx={{color:"black"}} onClick={()=>dispatch(prevQues())} startIcon={<ArrowBackIosNewIcon/>}>
             Previous Question
        </Button>
        <Button  variant='text' sx={{color:"black"}} onClick={()=>dispatch(nextQues())} endIcon={<ArrowForwardIosIcon/>}>
            Next Question
            
        </Button>
    </div>
  )
}

export default QuesControl