import React, { useEffect, useState } from "react";
import QuesTab from "../../components/QuesTab/QuesTab";
import Question from "../../components/Question/Question";
import QuesNumbers from "../../components/QuesNumbers/QuesNumbers";
import Timer from "../../components/Timer/Timer";
import TestFooter from "../../components/TestFooter/TestFooter";
import TestHeader from "../../components/TestHeader/TestHeader";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";

const Test = () => {
  const [activeQuestionId, setActiveQuestionId] = useState();
  const [activeQuestion, setActiveQuestion] = useState();
  const [length, setLength] = useState();
  const [quesData, setQuesData] = useState([]);
  const [section, setSection] = useState("html");
  const data = useSelector((state) => state.prevNext);

  useEffect(() => {
    axios
      .get(`https://examportalcsi.onrender.com/api/v1/category/${section}`)
      .then((res) => {
        console.log(res.data);
        setQuesData(res.data);
        setLength(res.data.length);
        setActiveQuestion(res.data[data.initialQues - 1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [section]);

  useEffect(() => {
    console.log(activeQuestionId);
    setActiveQuestion(quesData[data.initialQues - 1]);
  }, [data.initialQues]);

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col justify-start w-8/12 m-0 py-4 pl-12">
        <TestHeader />
        <QuesTab setSection={setSection} />
        <Question ques={activeQuestion} />
        <TestFooter
          setActiveQuestionId={setActiveQuestionId}
          activeQuestion={activeQuestion}
        />
      </div>
      <div className="flex flex-col w-4/12 m-0 py-4 pr-12 justify-between">
        <div>
          <Timer />
          <QuesNumbers
            setActiveQuestionId={setActiveQuestionId}
            length={length}
          />
        </div>
        <Button
          type="submit"
          className="!bg-submitColor !text-white w-4 !mx-auto !px-16 !py-2"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Test;
