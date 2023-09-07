import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveQues, quesList } from "../../store/slices/QuestionsSlice";
import { Button } from "@mui/material";
// import Loader from "../../../../../Loader/Loader"
// import { quesCtgSel } from '../../store/slices/QuestionsSlice';

const QuesTab = () => {
  // const quesNo=["1","2","3","4","5","6","7","8","9","10"]
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quesList);
 console.log(data)

  // const quesNo=useSelector(state=>state.prevNext)

  return (
    <div className="flex w-full flex-wrap justify-center mt-5">
      {data.initialQues?.map((item, key) => {
        return (
          <div key={key} onClick={() => dispatch(moveQues(key + 1))}>
            <Button
              variant="contained"
              sx={{
                margin: "0.5rem",
                border:"1px solid black",
                backgroundColor: data.initialQuesNo == key + 1 ? "" : "white",
                color: data.initialQuesNo == key + 1 ? "white" : "black",
                // zIndex: "-1",
                cursor: "pointer !important",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {key + 1}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default QuesTab;
