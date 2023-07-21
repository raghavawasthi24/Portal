import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useSelector} from "react-redux";

const CandidateDisplay=()=>{
  const data = useSelector(state => state.student)


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
              {/* {data.initialValue.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.Name}</TableCell>
                  <TableCell>{student.Number}</TableCell>
                </TableRow>
              ))} */}
  
            </TableBody>
          </Table>
        </TableContainer>
      </div>

   
  );
              }


export default CandidateDisplay;