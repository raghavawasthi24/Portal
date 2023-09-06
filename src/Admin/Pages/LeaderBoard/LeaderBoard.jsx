// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
// import { useNavigate } from "react-router-dom";
// // import Tabtable from "./Tabtable";
// import Cookies from "js-cookie";
// import updateCookies from "../../utils/updateCookies";
// import Pagination from "@mui/material/Pagination";


// const LeaderBoard = () => {
//   const [students, setStudents] = useState(["1"]);
//   const [studentlist, setStudentlist] = useState([]);
//   const navigate = useNavigate();
//   const [count, setCount] = useState(1);
//   const [page, setPage] = React.useState(1);
//   // const [responses,setResponses]=useState(false)

//   const dispatch=useDispatch()
//   // let responses=useSelector(state=>state.quesList)
//   console.log(useSelector(state=>state.quesList.submitQuestion))

//   const inputHandler = (event,value) => {
    
//     setPage(value);
//     localStorage.setItem("oyo",value)
//     console.log(page,value,"calling");
//     // let newStudentArray = [];
//     // for (let i = 1; i <= 10; i++) {
//     //   console.log(page, (page - 1) * 10 + i);
//     //   newStudentArray.push(studentlist[(value - 1) * 10 + i]);
//     // }
//     // setStudents(newStudentArray);
//   };

//   useEffect(() => {
//     const check = Cookies.get("apage4");
//     if (!check) {
//       navigate("/login");
//     }
//   }, []);

//   useEffect(() => {
//     const socket = io.connect("https://csi-examportal.onrender.com", {
//       transports: ["websocket"],
//     });
//     // console.log("outside")
//     // localStorage.setItem("oyo",1)

//     // socket.on("leaderboard", (data) => {
//     //   setStudentlist(data);
//     //   console.log(data);
//     //   // console.log(page)
//     //   let dd=localStorage.getItem("oyo")
//     //   let newStudentArray = [];
//     //   for (let i = 1; i <= 10; i++) {
//     //     console.log(dd, (dd - 1) * 10 + i);
//     //     newStudentArray.push(data[(dd - 1) * 10 + i]);
//     //   }
//     //   setStudents(newStudentArray);

//     //   if (data.length % 10 == 0) setCount(data.length % 10);
//     //   else setCount((data.length % 10) + 1);
//     // });

//     // socket.emit("leaderboard");

//     socket.on("page", (pageData) => {
//       console.log("hiii",pageData)
//     });

//     const pageData={
//       page:1,
//       itemsPerPage:10
//     }


//     socket.emit("page",pageData)

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

 
//   return (
//     <div className="flex flex-col items-center justify-between min-h-screen">
//       <div className="absolute" style={{ top: "3rem", left: "3rem" }}>
//         <ArrowCircleUpRoundedIcon
//           sx={{
//             width: "3rem",
//             height: "3rem",
//             rotate: "270deg",
//             color: "rgba(84, 59, 160, 1)",
//           }}
//           onClick={() => {
//             updateCookies(1), navigate("/admin");
//           }}
//         />
//       </div>
//       <div className="p-4 mt-5">
//         <h1 className=" font-sans font-bold text-3xl text-center mb-5  tracking-widest  whitespace-pre  text-leaderboardColor ">
//           Leader Board
//         </h1>
//         <div className=" mx-auto">
//           <TableContainer
//             component={Paper}
//             sx={{
//               width: "50rem",
//               backgroundColor: "rgba(255, 255, 255, 0.489)",
//             }}
//           >
//             <Table>
//               <TableHead sx={{ backgroundColor: "rgba(242, 241, 252, 1)" }}>
//                 <TableRow>
//                   <TableCell sx={{ textAlign: "center" }}>Rank</TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     Student Number
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     Student Name
//                   </TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>
//                     Total Score
//                   </TableCell>
//                   <TableCell></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {students.map((student, index) => (
//                   <TableRow key={index} className="cursor-pointer">
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {/* {index + 1} */}
//                         1
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {/* {student?.studentNo} */}
//                       2202799
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {/* {student?.name} */}
//                       Raghav Awasthi
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {/* {student?.calculatedTotalScore} */}
//                       10
//                     </TableCell>
                   
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </div>
//       <div className="flex items-center justify-center mb-9">
//         <Pagination count={count} page={page} onChange={inputHandler} />
//       </div>

      
//     </div>
//   );
// };

// export default LeaderBoard;


import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Responses from "./Responses";
import { useDispatch,useSelector } from "react-redux";
import { toggleQuestion } from "../../../store/slices/QuestionsSlice";

const LeaderBoard = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const navigate = useNavigate();

  const dispatch=useDispatch()

  useEffect(() => {
    const socket = io.connect("https://fluttering-lumber-production.up.railway.app", {
      transports: ["websocket"],
    });

    socket.on("leaderboard", (data) => {
      console.log(data);
      setStudents(data);
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = students.slice(startIndex, endIndex);

  const totalPages = Math.ceil(students.length / itemsPerPage);

  const openResponses=()=>{
    dispatch(toggleQuestion())
  }


  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="absolute" style={{ top: "3rem", left: "3rem" }}>
        <ArrowBackIcon
          sx={{
            width: "3rem",
            height: "3rem",
            color: "rgba(84, 59, 160, 1)",
          }}
          onClick={() => {
            navigate("/admin");
          }}
        />
      </div>
      <div className="p-4 mt-5">
        <h1 className="font-sans font-bold text-3xl text-center mb-5 tracking-widest whitespace-pre text-leaderboardColor">
          Leader Board
        </h1>
        <div className="mx-auto">
          <TableContainer
            component={Paper}
            sx={{
              width: "50rem",
              backgroundColor: "rgba(255, 255, 255, 0.489)",
            }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: "rgba(242, 241, 252, 1)" }}>
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>Rank</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    Student Number
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Student Name</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Total Score</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentStudents.map((student, index) => (
                  <TableRow key={index} onClick={openResponses} className="cursor-pointer">
                    <TableCell sx={{ textAlign: "center" }}>
                      {startIndex + index + 1}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {student.studentNo}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {student.name}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {student.calculatedTotalScore}
                    </TableCell>
                    <TableCell>
                       <ArrowRightIcon/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="flex items-center justify-center my-7">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowBackIcon />
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowForwardIcon />
        </button>
      </div>
      {/* Include your Tabtable component here */}
      <div style={{display:useSelector(state=>state.quesList.submitQuestion)?"none":"block"}}>
        <div className="w-screen h-screen absolute top-0 right-0 overflow-hidden">
          <Responses/>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;