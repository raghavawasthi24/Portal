import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FeedbackCard from "../../components/Feedback/FeedbackCard";
import FeedbackQues from "../../components/Feedback/FeedbackQues";
import "./Feedback.css";
import axios from "axios";

const Feedback = () => {
  const [apiData, setApiData] = useState({});
  const [formvValue, setFormValue] = useState([]);
  const [disable, setedisable] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://13.48.30.130/feedback/get-f-question/")
      .then((res) => setApiData(res.data));
  }, []);

  const handlevalue = (data) => {
    console.log(data);
    setFormValue([...formvValue, data]);
    if (formvValue.length + 1 === apiData.length) {
      setedisable(false);
    } else {
      setedisable(true);
    }
  };
  const handlesubmit = () => {
    axios
      .post("http://13.48.30.130/feedback/add-f-answer/", {
        student_number: localStorage.getItem("studentNo"),
        answers: formvValue,
      })
      .then(navigate("/thankyou"));
  };

  return (
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

            {disable ? (
              <p style={{ color: "red", marginBottom: "1rem" }}>
                Fill The Feedback Form Before Submitting
              </p>
            ) : null}
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
    </>
  );
};

export default Feedback;
