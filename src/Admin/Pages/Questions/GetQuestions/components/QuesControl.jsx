import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {useSelector,useDispatch} from "react-redux";
// import { prevQues,nextQues } from '../../../../../actions';
import { prevQues,nextQues } from '../../../../../store/slices/PrevNextSlice';

const QuesControl = () => {

  // const myState=useSelector((state)=>state.changeQues);
  const data = useSelector(state => state.prevNext)
  const dispatch=useDispatch();
 

  // const data=useSelector((state)=>{
  //   return state.prevNext;
  // })
  return (
    <div className='flex w-full justify-between'>
      {/* <p>{data.initialQty}</p> */}
        <p onClick={()=>dispatch(prevQues())}>
            <ArrowBackIosNewIcon/>
            Previous Question
        </p>
        <p onClick={()=>dispatch(nextQues())}>
            Next Question
            <ArrowForwardIosIcon/>
        </p>
    </div>
  )
}

export default QuesControl