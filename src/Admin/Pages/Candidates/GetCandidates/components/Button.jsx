import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { categoryStudent } from "../../../../../store/slices/StudentsSlice";


const Buttons = () => {
  const candidateBtn = [
    {
      gender:"Male",
      hosteler:"Hosteler"
    },
    {
      gender:"Male",
      hosteler:"Day Scholar"
    },
    {
      gender:"Female",
      hosteler:"Hosteler"
    },
    {
      gender:"Female",
      hosteler:"Day Scholar"
    },
  ];
  const dispatch=useDispatch();
  return (
    <div className="">
      <Stack direction="column" spacing={3}>
        {candidateBtn.map((val, index) => {
          return (
            <Button
              variant="contained"
              key={index}
              sx={{
                backgroundColor: "white",
                color: "black",
                padding: "1rem",
                boxShadow: "0.5px 0.5px 3px black",
                "&:hover": {
                  backgroundColor: "rgba(222, 234, 254, 1)",
                },
              }}
              onClick={()=>dispatch(categoryStudent(val))}
            >
              {" "}
              {val.gender}
              ({val.hosteler})
            </Button>
          );
        })}
      </Stack>
    </div>
  );
};

export default Buttons;
