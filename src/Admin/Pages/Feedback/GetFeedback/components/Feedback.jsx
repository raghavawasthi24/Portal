import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
// import EditQuestion from './EditQuestion';
import { useDispatch } from 'react-redux';
// import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
// import { quesList } from '../../../../../store/slices/QuestionsSlice';


const Feedback = () => {
    
    // useEffect(()=>{
    //     dispatch(quesList())
    // },[])
    const data = useSelector(state => state.feedback)
    // const questionDisplay= useSelector(state=>state.quesList)
    // const showEdit= useSelector(state=>state.editShow)
    // const dispatch=useDispatch();

  return (
    <div className='p-10 flex flex-col justify-between'>
        <div className=''>
        <div className='flex justify-between my-3'>
            <p>Question-1</p>
            <EditIcon style={{cursor:"pointer"}}/>
        </div>
        <hr/>
            <p>{data.initial[0].question}</p>
            
            <FormControl>
                <RadioGroup>
                {data.initial[0].answer.map((item,key)=>{
                    return(<FormControlLabel key={key} value={item} control={<Radio/>} label={item}/>)
                })}
                </RadioGroup>
                </FormControl>
        </div>
            <hr />

            {/* <div className={showEdit.initialValue?'absolute top-0 start-0 w-full h-full z-10':'hide'}>
                <EditQuestion/>
            </div> */}

          
       
    </div>
  )
}

export default Feedback