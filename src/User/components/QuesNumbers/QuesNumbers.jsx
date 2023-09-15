// import { Button, Grid, Typography } from "@mui/material";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { moveQues } from "../../../store/slices/QuestionsSlice";
// import VisitedStatus from "../../utils/visitedStatus";
// import { markVisited } from "../../../store/slices/ReviewSlice";

// const QuesNumbers = () => {
//   const quesdata = useSelector((state) => state.quesList);
//   const category = quesdata.quesCategory;
//   const quesState = useSelector((state) => state.review.categories);
//   const currentBtnIndex = quesdata.initialQuesNo;
//   const currentCategoryQuestions =
//     quesState.find((item) => item.category === category)?.questions || [];
//   // console.log(currentCategoryQuestions, category);
//   // const quesCount = [1, 2, 3, 4];
//   const dispatch = useDispatch();
//   const memoizedVisitedStatus = {};
//   function findVisitedStatus(inputId, questionsArray) {
//     const question = questionsArray.find((item) => item.id === `${inputId}`);

//     if (question) {
//       return {
//         visited: question?.visited,
//         answered: question.answered,
//         review: question.review,
//       };
//     } else {
//       return { answered: false, review: false, visited: false };
//     }
//   }

//   return (
//     <div className="flex flex-col">
//       <Typography
//         variant="h5"
//         className="text-center  bg-gradient-to-r from-quesGrad1 to-quesGrad2 p-4 px-0"
//       >
//         Questions
//       </Typography>
//       <Grid
//         container
//         spacing={2}
//         gap={1}
//         justifyContent="center"
//         alignItems="start"
//         sx={{
//           mt: "10px",
//           overflowY: "auto",
//           height: "32vh",
//         }}
//       >
//         {quesdata.initialQues.map((ques, id) => {
//           const active = id === currentBtnIndex - 1;

//           // console.log(answered, review, visited, ques?.quesId);
//           if (active && !memoizedVisitedStatus[ques?.quesId]) {
//             VisitedStatus({ category, quesId: ques?.quesId })
//               .then((res) => {
//                 console.log(res);
//                 if (res) {
//                   dispatch(markVisited(res));
//                   memoizedVisitedStatus[ques?.quesId] = res;
//                 }
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           }
//           const { answered, review, visited } = findVisitedStatus(
//             ques?.quesId,
//             currentCategoryQuestions
//           );

//           return (
//             <Grid item key={id}>
//               <Button
//                 color="error"
//                 className={
//                   active
//                     ? "!bg-blue-200 !text-blue-600 !border !border-blue-600"
//                     : answered
//                     ? review
//                       ? "!bg-reviewColor"
//                       : "!bg-saveColor"
//                     : visited
//                     ? "!bg-red-600 !bg-text-white"
//                     : "!bg-white !text-blue-600 !border !border-blue-600"
//                 }
//                 sx={{
//                   border: active || !visited ? " 2px solid" : "",
//                 }}
//                 variant="contained"
//                 onClick={() => {
//                   dispatch(moveQues(id + 1));
//                 }}
//               >
//                 {id + 1}
//               </Button>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </div>
//   );
// };

// export default QuesNumbers;

import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveQues } from "../../../store/slices/QuestionsSlice";
import VisitedStatus from "../../utils/visitedStatus";
import { markVisited } from "../../../store/slices/ReviewSlice";

const QuesNumbers = () => {
  const quesdata = useSelector((state) => state.quesList);
  const category = quesdata.quesCategory;
  const quesState = useSelector((state) => state.review.categories);
  const currentBtnIndex = quesdata.initialQuesNo;
  const currentCategoryQuestions =
    quesState.find((item) => item.category === category)?.questions || [];
  const dispatch = useDispatch();

  useEffect(() => {
    quesdata.initialQues.forEach((ques, id) => {
      const active = id === currentBtnIndex - 1;
      const { visited } = findVisitedStatus(
        ques?.quesId,
        currentCategoryQuestions
      );
      if (active && !visited) {
        VisitedStatus({ category, quesId: ques?.quesId })
          .then((res) => {
            // console.log(res);
            if (res) {
              dispatch(markVisited(res));
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  }, [category, currentBtnIndex, quesdata.initialQues, dispatch]);

  function findVisitedStatus(inputId, questionsArray) {
    const question = questionsArray.find((item) => item.id === `${inputId}`);

    if (question) {
      return {
        visited: question?.visited,
        answered: question.answered,
        review: question.review,
      };
    } else {
      return { answered: false, review: false, visited: false };
    }
  }

  return (
    <div className="flex flex-col">
      <Typography
        variant="h5"
        className="text-center  bg-gradient-to-r from-quesGrad1 to-quesGrad2 p-4 px-0"
      >
        Questions
      </Typography>
      <Grid
        container
        spacing={2}
        gap={1}
        justifyContent="center"
        alignItems="start"
        sx={{
          mt: "10px",
          overflowY: "auto",
          height: "32vh",
        }}
      >
        {quesdata.initialQues.map((ques, id) => {
          const active = id === currentBtnIndex - 1;
          const { answered, review, visited } = findVisitedStatus(
            ques?.quesId,
            currentCategoryQuestions
          );

          return (
            <Grid item key={id}>
              <Button
                color="error"
                className={
                  active
                    ? "!bg-blue-200 !text-blue-600 !border !border-blue-600"
                    : answered
                    ? review
                      ? "!bg-reviewColor"
                      : "!bg-saveColor"
                    : visited
                    ? "!bg-red-600 !bg-text-white"
                    : "!bg-white !text-blue-600 !border !border-blue-600"
                }
                sx={{
                  border: active || !visited ? " 2px solid" : "",
                }}
                variant="contained"
                onClick={() => {
                  dispatch(moveQues(id + 1));
                }}
              >
                {id + 1}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default QuesNumbers;
