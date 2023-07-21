import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Tabtable from "./Tabtable";

const LeaderBoard = () => {
  const students = [
    { Rank: 1, Name: "Shipra", Number: "2113129" },
    { Rank: 2, Name: "Ishu", Number: "2332323" },
    { Rank: 3, Name: "Raghav", Number: "2110159" },
    { Rank: 1, Name: "Shipra", Number: "2113129" },
    { Rank: 1, Name: "Shipra", Number: "2113129" },
    { Rank: 1, Name: "Shipra", Number: "2113129" },
    { Rank: 1, Name: "Shipra", Number: "2113129" },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="p-4 mt-8">
        <h1 className=" font-sans font-bold text-3xl text-center mb-6  tracking-widest  whitespace-pre  text-leaderboardColor ">
          Leader Board
        </h1>
        <div className=" mx-auto">
          <TableContainer component={Paper} sx={{ width: "50rem" }}>
            <Table>
              <TableHead>
                <TableRow className="bg-blue-200">
                  <TableCell>Rank</TableCell>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Student Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>{student.Rank}</TableCell>
                    <TableCell>{student.Name}</TableCell>
                    <TableCell>{student.Number}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4">
        <Tabtable />
      </div>
    </div>
  );
};

export default LeaderBoard;
