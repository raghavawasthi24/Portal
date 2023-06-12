import React from "react";
import Question from "../../components/Question/Question";
import QuesTab from "../../components/QuesTab/QuesTab";
import Timer from "../../components/Timer/Timer";
import QuesNumbers from "../../components/QuesNumbers/QuesNumbers";

const Test = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <QuesTab />
        <Question />
        <TestFooter />
      </div>
      <div className="flex flex-col">
        <Timer />
        <QuesNumbers />
      </div>
    </div>
  );
};

export default Test;
