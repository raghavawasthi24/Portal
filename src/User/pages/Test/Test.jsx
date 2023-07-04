import React, { useEffect, useState } from "react";
import QuesTab from "../../components/QuesTab/QuesTab";
import Question from "../../components/Question/Question";
import QuesNumbers from "../../components/QuesNumbers/QuesNumbers";
import Timer from "../../components/Timer/Timer";
import TestFooter from "../../components/TestFooter/TestFooter";
import TestHeader from "../../components/TestHeader/TestHeader";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Test = () => {
  const [activeQuestionId, setActiveQuestionId] = useState();
  const [activeQuestion, setActiveQuestion] = useState();
  const data = useSelector((state) => state.prevNext);
  const questionsGroup = [
    {
      quesNo: 1,
      question: "What is bla",
      optionSet: ["jhin", "gala", "lahu", "hu"],
      review: false,
    },
    {
      quesNo: 2,
      question: "What is bla2",
      optionSet: ["jhin", "gala", "lahu", "hu"],
      review: false,
    },
    {
      quesNo: 3,
      question: "What is bla3",
      optionSet: ["jhin", "gala", "lahu", "hu"],
      review: false,
    },
    {
      quesNo: 4,
      question: "What is ql",
      optionSet: ["sql", "mysql", "postgre", "oracle"],
      review: false,
    },
  ];
  useEffect(() => {
    console.log(activeQuestionId);
    setActiveQuestion(questionsGroup[data.initialQues - 1]);
  }, [data.initialQues]);

  return (
    <div className="flex justify-evenly">
      {/* <div className="flex flex-col justify-center w-6/8  m-0 py-4 pl-12"> */}
      <div className="flex flex-col justify-center w-8/12 m-0 py-4 pl-12">
        <TestHeader />
        <QuesTab />
        <Question ques={activeQuestion} />
        <TestFooter
          setActiveQuestionId={setActiveQuestionId}
          activeQuestionId={activeQuestionId}
          activeQuestion={activeQuestion}
        />
      </div>
      {/* <div className="flex flex-col w-2/8 m-0 py-4 pl-0 pr-12"> */}
      <div className="flex flex-col w-4/12 m-0 py-4 pr-12 justify-between">
        <div>
          <Timer />
          <QuesNumbers setActiveQuestionId={setActiveQuestionId} />
        </div>
        <Button
          type="submit"
          className="!bg-submitColor !text-white w-4 !mx-auto"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Test;
