import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CandidateDisplay=()=>{
const students = [
  { Name: "Shipra", Number: "2113129" },
  { Name: "Ishu", Number: "2332323" },
  { Name: "Raghav", Number: "2110159" },
];

// const GetCandidate = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredStudents = students.filter((student) =>
//     student.Name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

  return (
    <div className=" w-full">
      
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(222, 234, 254, 1)" }}>
                <TableCell>Student Name</TableCell>
                <TableCell>Student Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.Name}</TableCell>
                  <TableCell>{student.Number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

   
  );
              }


export default CandidateDisplay;