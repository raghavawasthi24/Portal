import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  findStudent,
  studentList,
} from "../../../../../store/slices/StudentsSlice";
import axios from "axios";

const CandidateDisplay = () => {
  const data = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const [showdetails, setShowdetails] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_DJANGO_URL}/accounts/StudentData/`)
      .then((res) => {
        // console.log(res.data);
        dispatch(studentList(res.data));
        // state.initialValue=res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getDetails = (id) => {
    dispatch(findStudent(id));
    setShowdetails(true);
  };

  return (
    <div className=" w-full h-full overflow-scroll border-black">
      {/* {console.log(data)} */}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgba(222, 234, 254, 0.5)" }}>
              <TableCell>Student Name</TableCell>
              <TableCell>Student Number</TableCell>
              <TableCell>Score</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.initialValue.map((student, index) => (
              <TableRow
                key={index}
                sx={{ backgroundColor: "rgb(255, 255, 255)" }}
              >
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.studentNo}</TableCell>
                <TableCell>{student.totalscore}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    onClick={(e) => getDetails(student.studentNo)}
                  >
                    Get Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: showdetails ? "block" : "none" }}>
        <div
          className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center"
          onClick={() => setShowdetails(false)}
        >
          <div className="bg-white p-4 border shadow-xl border-t-indigo-700 grid gap-5">
            <p className="border-b w-full">
              Name : {data.currentStudent[0]?.name}
            </p>
            <p className="border-b w-full">
              Student No : {data.currentStudent[0]?.studentNo}
            </p>
            <p className="border-b w-full">
              Email : {data.currentStudent[0]?.email}
            </p>
            <p className="border-b w-full">
              Mobile No : {data.currentStudent[0]?.mobileNo}
            </p>
            <p className="border-b w-full">
              Hosteler : {data.currentStudent[0]?.isHosteler ? "Yes" : "No"}
            </p>
            <p className="border-b w-full">
              Gender : {data.currentStudent[0]?.gender}
            </p>
            <p className="border-b w-full">
              Branch : {data.currentStudent[0]?.branch}
            </p>
            <p className="border-b w-full">
              Score : {data.currentStudent[0]?.totalscore}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDisplay;
