import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Buttons = () => {
  const candidateBtn = [
    "All",
    "Girls (Day Scholar)",
    "Girls (Hosteller)",
    "Boys (Day Scholar)",
    "Boys (Hosteller)",
  ];
  return (
    <div className="">
    <Stack direction="column" spacing={3}>
      {candidateBtn.map((val,index) => {
        return (
          <Button
            variant="contained"
            key={index}
            sx={{
              backgroundColor: "white",
              color: "black",
              padding:"1rem",
              boxShadow:"0.5px 0.5px 3px black",
              "&:hover": {
                backgroundColor: "rgba(222, 234, 254, 1)",
              },
            }}
          >
            {" "}
            {val}
          </Button>
        );
      })}
    </Stack>
    </div>
  );
};

export default Buttons;
