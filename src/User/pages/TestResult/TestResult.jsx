import React from "react";
import {
  Button,
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import "./TestResult.css";
import { useNavigate } from "react-router-dom";

const TestResult = () => {
  const navigate = useNavigate();
  let result = JSON.parse(localStorage.getItem("totalScoreStatus")).user;
  let totalScore = JSON.parse(
    localStorage.getItem("totalScoreStatus")
  ).totalscore;

  return (
    <Container className="resultMain">
      <Typography className="resultHead">Test Result</Typography>
      <TableContainer
        component={Paper}
        style={{ width: "50%", margin: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow className="!bg-reviewColor">
              <TableCell
                style={{ border: "1px solid #999" }}
                className=" !text-white"
              >
                Category
              </TableCell>
              <TableCell
                style={{ border: "1px solid #999" }}
                className=" !text-white"
              >
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ border: "1px solid #999" }}>
                Unanswered
              </TableCell>
              <TableCell style={{ border: "1px solid #999" }}>
                {result.unanswered}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "1px solid #999" }}>
                Marked & Incorrect
              </TableCell>
              <TableCell style={{ border: "1px solid #999" }}>
                {result.markedWrong}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "1px solid #999" }}>
                Incorrect
              </TableCell>
              <TableCell style={{ border: "1px solid #999" }}>
                {result.wrong}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "1px solid #999" }}>
                Marked & Correct
              </TableCell>
              <TableCell style={{ border: "1px solid #999" }}>
                {result.markedCorrect}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "1px solid #999" }}>
                Correct
              </TableCell>
              <TableCell style={{ border: "1px solid #999" }}>
                {result.correct}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: "1px solid #999" }}>
                Total Score
              </TableCell>
              <TableCell style={{ border: "1px solid #999" }}>
                {totalScore}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        className="resultBtn"
        onClick={() => navigate("/feedback")}
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Continue to Feedback
      </Button>
    </Container>
  );
};

export default TestResult;
