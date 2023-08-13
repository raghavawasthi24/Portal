import { Button, FormControl, OutlinedInput, Typography } from '@mui/material'
import { Container,Box, color } from '@mui/system'

import React, { useEffect, useState } from 'react'
import FeedbackCard from '../../components/Feedback/FeedbackCard'
import "./Feedback.css"
import axios from 'axios'

const Feedback = () => {
  const [apiData,setApiData] = useState({})
  const [formvValue,setFormValue]= useState([])
  const [disable,setedisable]=useState(true)
  const [Suggestions,setsuggestion]= useState()

  
  useEffect(() => {
    axios.get("http://13.48.30.130/feedback/add-f-question/").then((res)=>setApiData(res.data))
  
  }, [])

  const Suggestionfn = (e) =>{
    if(e.target.value.trim().length){
    e.target.style.border = ""
    e.target.style.borderRadius = ""
     setsuggestion(e.target.value.trim())
    setedisable(false)}

    else{
      console.log(e.target.style)
      e.target.style.border = " 4px solid red"
      e.target.style.borderRadius = " 15px"
      setedisable(true)
    }
  }
   const handlevalue = (data) =>{
    setFormValue([...formvValue,data])
   }
   const handlesubmit = () => {
     console.log([...formvValue,Suggestions])
   }
  

  return (
    <>
    {apiData.length ?
    <Container className="FeedbackMain">
    <Typography className="FeedbackHead" >Feedback</Typography>
    <Box>
      {
      apiData.map((ques,i)=>(
     <FeedbackCard key={i} question={ques.question_text} ques_id={ques.id} ondata={handlevalue}/>))
      }
    <Box className="QuestionMain">
    <Typography variant='h6' className='QuestionHead'>Your Suggestions matter, drop us one!</Typography>
    <FormControl sx={{ width:"90%", margin:"0.5rem" }}>
    <OutlinedInput style={{borderRadius:"15px"}}  onChange={(e) => Suggestionfn(e)} />
     </FormControl>
     {disable ? <p style={{color:"red"}}>Fill The Feedback Form Before Submitting</p>:null}

</Box>
<button className='FeedbackBtn'  disabled={disable} onClick={handlesubmit} >Submit</button>

    </Box>
    </Container> : null }
    </>
  )
}

export default Feedback