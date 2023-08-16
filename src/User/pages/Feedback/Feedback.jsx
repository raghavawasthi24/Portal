import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FeedbackCard from "../../components/Feedback/FeedbackCard";
import FeedbackQues from "../../components/Feedback/FeedbackQues";
import "./Feedback.css";
import axios from "axios";
import Loader from "../../../Loader/Loader";



const Feedback = () => {
  const [apiData, setApiData] = useState([]);
  const [formvValue, setFormValue] = useState([]);
  const [disable, setDisable] = useState(true);
  const [uniqueAnswers, setUniqueAnswers] = useState([]);
  const [loading, setLoading] = useState(true);



  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://13.48.30.130/feedback/get-f-question/")
      
        .then((res) => {
          setApiData(res.data); 
          setLoading(false)
        } ).catch(()=>{
          setLoading(false);
       
      });
  }, []);

  useEffect(() => {
    uniquefn();
   
  }, [formvValue]);

  const handlevalue = (data) => {
    console.log(data)
    setFormValue((prevFormValue) => [...prevFormValue, data]);
  };

  const uniquefn = () => {
    let disableflag = false
    const uniqueAnswers = formvValue.reduce((acc, current) => {
      const existingIndex = acc.findIndex(
        (item) => (item.question_id === current.question_id)
        
      );
      if(!current.answer_text){
        disableflag=true
      }
      if (existingIndex === -1) {
        acc.push(current);
      } else {
        acc[existingIndex] = current;
      }

      return acc;
    }, []);
    setUniqueAnswers(uniqueAnswers);
    if(formvValue.length){
    setDisable(disableflag)
    }
    else{
    setDisable(true)

    }
    // setDisable(uniqueAnswers.length !== apiData.length ||(apiData.length === 0 && uniqueAnswers.length ===0));
  };
  console.log(uniqueAnswers);
  const handlesubmit = () => {
    axios
      .post("http://13.48.30.130/feedback/add-f-answer/", {
        student_number: localStorage.getItem("studentNo"),
        answers: uniqueAnswers,
      })
      .then(() =>{
       navigate("/thankyou")});
  };

  return loading ? (
    <Loader/>):(
    <>
      {apiData.length ? (
        <Container className="FeedbackMain">
            
          <Typography className="FeedbackHead">Feedback</Typography>
          <Box>
            {apiData.map((ques, i) =>
              ques.question_type === "text" ? (
                <FeedbackQues
                  key={i}
                  question={ques.question_text}
                  ques_id={ques.id}
                  ondata={handlevalue}
                />
              ) : (
                <FeedbackCard
                  key={i}
                  question={ques.question_text}
                  ques_id={ques.id}
                  ondata={handlevalue}
                />
              )
            )}

            {disable && (
              <p style={{ color: "red", marginBottom: "1rem" }}>
                Fill The Feedback Form Before Submitting
              </p>
            )}
            <button
              className="FeedbackBtn"
              disabled={disable}
              onClick={handlesubmit}
            >
              Submit
            </button>
          </Box>
        </Container>
      ) : null}
    </>)
  
};

export default Feedback;
