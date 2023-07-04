import React, { useEffect, useState } from "react";
import QuesTab from "../../components/QuesTab/QuesTab";
import Question from "../../components/Question/Question";
import QuesNumbers from "../../components/QuesNumbers/QuesNumbers";
import Timer from "../../components/Timer/Timer";
import TestFooter from "../../components/TestFooter/TestFooter";
import TestHeader from "../../components/TestHeader/TestHeader";
import { Button } from "@mui/material";

const Test = () => {
  const [activeQuestionId, setActiveQuestionId] = useState();
  const [activeQuestion, setActiveQuestion] = useState();
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
  ];
  useEffect(() => {
    setActiveQuestion(questionsGroup[activeQuestionId - 1]);
  }, [activeQuestionId]);

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col justify-center w-5/8  m-0 py-4 pl-12">
        <TestHeader />
        <QuesTab />
        <Question ques={activeQuestion} />
        <TestFooter
          setActiveQuestionId={setActiveQuestionId}
          activeQuestionId={activeQuestionId}
          activeQuestion={activeQuestion}
        />
      </div>
      <div className="flex flex-col w-3/8 m-0 py-4 pl-0 pr-12">
        <Timer />
        <QuesNumbers setActiveQuestionId={setActiveQuestionId} />
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
};

export default Test;
