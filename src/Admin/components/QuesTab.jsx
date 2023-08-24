import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveQues } from '../../store/slices/PrevnextSlice';
import { Button } from '@mui/material';
// import { quesCtgSel } from '../../store/slices/QuestionsSlice';

const QuesTab = () => {
    // const quesNo=["1","2","3","4","5","6","7","8","9","10"]
    const dispatch=useDispatch();
    const data= useSelector(state=>state.quesList);
    const quesNo=useSelector(state=>state.prevNext)
    


    
  return (
    <div className='flex w-full flex-wrap justify-center mt-5'>
        {
            data.initialQues.map((item,key)=>{
                return(<div key={key} onClick={()=>dispatch(moveQues(key+1))}>
                    <Button variant='contained' sx={{margin:"0.5rem",backgroundColor:quesNo.initialQues==key+1?'#3e4a61':'',zIndex:"-1"}}>{key+1}</Button>
                </div>)
            })
        }
    </div>
  )
}

export default QuesTab