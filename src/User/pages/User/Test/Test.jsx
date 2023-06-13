import React, { useState } from "react";
import QuesTab from "../../../components/QuesTab/QuesTab";
import Question from "../../../components/Question/Question";
import QuesNumbers from "../../../components/QuesNumbers/QuesNumbers";
import Timer from "../../../components/Timer/Timer";
import TestFooter from "../../../components/TestFooter/TestFooter";
import TestHeader from "../../../components/TestHeader/TestHeader";

const Test = () => {
  const [activeQuestion, setActiveQuestion] = useState();
  const questionsGroup = [
    {
      quesNo: 1,
      question: "What is bla",
      optionSet: ["jhin", "gala", "lahu", "hu"],
    },
  ];

  return (
    <div className="flex m-16 justify-evenly">
      <div className="flex flex-col justify-center">
        <TestHeader />
        <QuesTab />
        <Question ques={activeQuestion} />
        <TestFooter />
      </div>
      <div className="flex flex-col">
        <Timer />
        <QuesNumbers setActiveQuestion={setActiveQuestion} />
      </div>
    </div>
  );
};

export default Test;
