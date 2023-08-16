import { Button, Typography } from '@mui/material'
import { Box,Container } from '@mui/system'
import './TestResult.css'
import { useNavigate } from 'react-router-dom'


const TestResult = () => {
    const navigate =useNavigate()
    let result = ((JSON.parse(localStorage.getItem("totalScoreStatus"))).user)
    let totalScore=(((JSON.parse(localStorage.getItem("totalScoreStatus"))).totalscore))
  return (
    <Container className="resultMain">
    <Typography className='resultHead'>Test Result</Typography>
    <Box className="resultFlex">
    <Box className="Unanswered" id="resultBox">
        <Typography className='resultSubhead'>Unanswered</Typography>
        <Typography className='resultValue'>{result.unanswered}</Typography>
    </Box>
    <Box className="markedIncorrect" id="resultBox">
        <Typography className='resultSubhead'>Marked Incorrect</Typography>
        <Typography className='resultValue'>{result.markedWrong}</Typography>
    </Box> 
     <Box className="markedCorrect" id="resultBox">
        <Typography className='resultSubhead'>Marked Correct</Typography>
        <Typography className='resultValue'> {result.markedCorrect}</Typography>
    </Box> 
     <Box className="correct" id="resultBox">
        <Typography className='resultSubhead'>Correct</Typography>
        <Typography className='resultValue'>{result.correct}</Typography>
    </Box>  
    <Box className="wrong" id="resultBox">
        <Typography className='resultSubhead'>Incorrect</Typography>
        <Typography className='resultValue'>{result.wrong}</Typography>
    </Box>
    </Box>
    <Box className="resultFlex">
    <Box className="total" >
    <Typography className='totalscore'>Total Score</Typography>
        <Typography className='totalscore'>{totalScore}</Typography>
    </Box>
    </Box>
    <button className='resultBtn' onClick={()=>navigate('/feedback')}>Continue to Feedback</button>
    </Container>
  )
}

export default TestResult;