import React from 'react';
import { useDispatch } from 'react-redux';
import { moveQues } from '../../store/slices/PrevNextSlice';
import { Button } from '@mui/material';

const QuesTab = () => {
    const quesNo=["1","2","3","4","5","6","7","8","9","10"]
    const dispatch=useDispatch();
    
  return (
    <div className='flex w-full flex-wrap'>
        {
            quesNo.map((item,key)=>{
                return(<div key={key} onClick={()=>dispatch(moveQues(item))}>
                    <Button variant='contained' sx={{margin:"0.5rem"}}>{item}</Button>
                </div>)
            })
        }
    </div>
  )
}

export default QuesTab