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
    <div className="flex justify-evenly">
      <div className="flex flex-col justify-center w-5/8  m-4 py-4 pl-12 pr-0 mr-0">
        <TestHeader />
        <QuesTab />
        <Question ques={activeQuestion} />
        <TestFooter />
      </div>
      <div className="flex flex-col w-3/8 m-0 mt-4 py-4 pl-0 pr-12">
        <Timer />
        <QuesNumbers setActiveQuestion={setActiveQuestion} />
      </div>
    </div>
  );
};

export default Test;
