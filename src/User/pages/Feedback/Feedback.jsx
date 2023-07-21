import { Button, FormControl, OutlinedInput, Typography } from '@mui/material'
import { Container,Box } from '@mui/system'

import React from 'react'
import FeedbackCard from '../../components/Feedback/FeedbackCard'
import "./Feedback.css"

const Feedback = () => {
  return (
    <Container className="FeedbackMain">
    <Typography className="FeedbackHead" >Feedback</Typography>
    <Box>
 <FeedbackCard question={"How easy way to navigate throughout Portal ?"}/>
    <FeedbackCard question={"How was the level of questions in the exam ?"}/>
    <Box className="QuestionMain">
    <Typography variant='h6' className='QuestionHead'>Your Suggestions matter, drop us one!</Typography>
    <FormControl sx={{ width: '100ch',margin:"0.5rem" }}>
    <OutlinedInput style={{borderRadius:"15px"}} />
     </FormControl>
</Box>
    </Box>
    <button className='FeedbackBtn'>Submit</button>
    </Container>
  )
}

export default Feedback