import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FeedbackCard from "../../components/Feedback/FeedbackCard";
import FeedbackQues from "../../components/Feedback/FeedbackQues";
import "./Feedback.css";
import axios from "axios";
import Loader from "../../../Loader/Loader";
import Cookies from "js-cookie";

const Feedback = () => {
  const [apiData, setApiData] = useState([]);
  const [formvValue, setFormValue] = useState([]);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const check = Cookies.get("spage3");
    if (!check || check == "false") {
      navigate("/login");
    }
    localStorage.removeItem("savedTime");
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_DJANGO_URL}/feedback/get-f-question/`)

      .then((res) => {
        setApiData(
          res.data.sort((a, b) => (a.question_type > b.question_type ? 1 : -1))
        );
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    uniquefn();
  }, [formvValue]);

  const handlevalue = (data) => {
    let tempFormValues = [...formvValue];
    const existingIndex = formvValue.findIndex(
      (item) => item.question_id === data.question_id
    );

    if (existingIndex === -1) {
      tempFormValues = [...tempFormValues, data];
    } else {
      tempFormValues[existingIndex] = data;
    }

    setFormValue(tempFormValues);
  };
 
  const uniquefn = () => {
    let disableflag = false;
    if (formvValue.length === 0){
       disableflag=true;
    }
    else if (formvValue.length === apiData.length) {
      formvValue.forEach((ans) => {
        if (!ans.answer_text) {
          disableflag = true;
        }
      });
    } else {
      disableflag = true;
    }
    setDisable(disableflag);
  };
  const handlesubmit = () => {
    setLoading(true);

    axios
      .post(`${import.meta.env.VITE_APP_DJANGO_URL}/feedback/add-f-answer/`, {
        student_number: localStorage.getItem("studentNo"),
        answers: formvValue,
      })
      .then(() => {
        setLoading(false)
        Cookies.set("spage4", true);
        Cookies.remove("spage3");
        navigate("/thankyou");
      });
  };

  return loading ? (
    <Loader />
  ) : (
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
    </>
  );
};

export default Feedback;
