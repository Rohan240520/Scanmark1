// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
// } from "@mui/material";
// const StudentsPage = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   // Dummy data for now
//   const students = [
//     { prn: "101", name: "Alice Johnson", todayAttendance: "Present", overallAttendance: "90%" },
//     { prn: "102", name: "Bob Smith", todayAttendance: "Absent", overallAttendance: "80%" },
//     { prn: "103", name: "Charlie Brown", todayAttendance: "Present", overallAttendance: "85%" },
//     { prn: "104", name: "Daisy Ridley", todayAttendance: "Present", overallAttendance: "88%" },
//     { prn: "105", name: "Ethan Hunt", todayAttendance: "Absent", overallAttendance: "92%" },
//     { prn: "106", name: "Fiona Apple", todayAttendance: "Present", overallAttendance: "78%" },
//     { prn: "107", name: "George Clooney", todayAttendance: "Present", overallAttendance: "95%" },
//     { prn: "108", name: "Hannah Montana", todayAttendance: "Absent", overallAttendance: "89%" },
//     { prn: "109", name: "Ian Somerhalder", todayAttendance: "Present", overallAttendance: "91%" },
//     { prn: "110", name: "Jack Sparrow", todayAttendance: "Present", overallAttendance: "87%" },
//   ];

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
// <Paper style={{ width: "100%", overflow: "hidden", padding: "20px" }}>
// <h2>Students</h2>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>PRN</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Today's Attendance</strong></TableCell>
//               <TableCell><strong>Overall Attendance</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => (
//               <TableRow key={student.prn}>
//                 <TableCell>{student.prn}</TableCell>
//                 <TableCell>{student.name}</TableCell>
//                 <TableCell>{student.todayAttendance}</TableCell>
//                 <TableCell>{student.overallAttendance}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={students.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default StudentsPage;









// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
// } from "@mui/material";
// import axios from "axios";

// const StudentsPage = () => {
//   const [students, setStudents] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get("/api/coordinators/all-students"); // Backend endpoint
//         setStudents(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch students.");
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <Paper style={{ width: "100%", overflow: "hidden", padding: "20px" }}>
//       <h2>Students</h2>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>PRN</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Today's Attendance</strong></TableCell>
//               <TableCell><strong>Overall Attendance</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {students
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((student) => (
//                 <TableRow key={student.prn}>
//                   <TableCell>{student.prn}</TableCell>
//                   <TableCell>{student.name}</TableCell>
//                   <TableCell>{student.todayAttendance || "N/A"}</TableCell>
//                   <TableCell>{student.overallAttendance || "N/A"}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={students.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default StudentsPage;










// import { useState, useMemo } from "react"
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material"

// const StudentsPage = ({ searchQuery = "" }) => {
//   const [page, setPage] = useState(0)
//   const [rowsPerPage, setRowsPerPage] = useState(5)

//   // Dummy data for now
//   const students = [
//         { prn: "101", name: "Alice Johnson", todayAttendance: "Present", overallAttendance: "90%" },
//         { prn: "102", name: "Bob Smith", todayAttendance: "Absent", overallAttendance: "80%" },
//         { prn: "103", name: "Charlie Brown", todayAttendance: "Present", overallAttendance: "85%" },
//         { prn: "104", name: "Daisy Ridley", todayAttendance: "Present", overallAttendance: "88%" },
//         { prn: "105", name: "Ethan Hunt", todayAttendance: "Absent", overallAttendance: "92%" },
//         { prn: "106", name: "Fiona Apple", todayAttendance: "Present", overallAttendance: "78%" },
//         { prn: "107", name: "George Clooney", todayAttendance: "Present", overallAttendance: "95%" },
//         { prn: "108", name: "Hannah Montana", todayAttendance: "Absent", overallAttendance: "89%" },
//         { prn: "109", name: "Ian Somerhalder", todayAttendance: "Present", overallAttendance: "91%" },
//         { prn: "110", name: "Jack Sparrow", todayAttendance: "Present", overallAttendance: "87%" },
//       ];

//   // Filter students based on search query
//   const filteredStudents = useMemo(() => {
//     return students.filter((student) => student.prn.toLowerCase().includes(searchQuery.toLowerCase()))
//   }, [searchQuery])

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage)
//   }

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(Number.parseInt(event.target.value, 10))
//     setPage(0)
//   }

//   return (
//     <Paper style={{ width: "100%", overflow: "hidden", padding: "20px" }}>
//       <h2>Students</h2>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <strong>PRN</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Name</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Today's Attendance</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Overall Attendance</strong>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => (
//               <TableRow key={student.prn}>
//                 <TableCell>{student.prn}</TableCell>
//                 <TableCell>{student.name}</TableCell>
//                 <TableCell>{student.todayAttendance}</TableCell>
//                 <TableCell>{student.overallAttendance}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={filteredStudents.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   )
// }

// export default StudentsPage
















// import { useState, useMemo } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
// } from "@mui/material";
// import "../styles/studentPage.css"
// const StudentsPage = ({ searchQuery = "" }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   // Dummy data for now
//   const students = [
//     { prn: "101", name: "Alice Johnson", todayAttendance: "Present", overallAttendance: "90%" },
//     { prn: "102", name: "Bob Smith", todayAttendance: "Absent", overallAttendance: "80%" },
//     { prn: "103", name: "Charlie Brown", todayAttendance: "Present", overallAttendance: "85%" },
//     { prn: "104", name: "Daisy Ridley", todayAttendance: "Present", overallAttendance: "88%" },
//     { prn: "105", name: "Ethan Hunt", todayAttendance: "Absent", overallAttendance: "92%" },
//     { prn: "106", name: "Fiona Apple", todayAttendance: "Present", overallAttendance: "78%" },
//     { prn: "107", name: "George Clooney", todayAttendance: "Present", overallAttendance: "95%" },
//     { prn: "108", name: "Hannah Montana", todayAttendance: "Absent", overallAttendance: "89%" },
//     { prn: "109", name: "Ian Somerhalder", todayAttendance: "Present", overallAttendance: "91%" },
//     { prn: "110", name: "Jack Sparrow", todayAttendance: "Present", overallAttendance: "87%" },
//   ];

//   // Filter students based on search query
//   const filteredStudents = useMemo(() => {
//     return students.filter((student) => student.prn.toLowerCase().includes(searchQuery.toLowerCase()));
//   }, [searchQuery]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(Number.parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Paper className="students-container">
//       <TableContainer className="table-container">
//         <Table>
//           <TableHead>
//             <TableRow className="table-header">
//               <TableCell><strong>PRN</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Today's Attendance</strong></TableCell>
//               <TableCell><strong>Overall Attendance</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => (
//               <TableRow key={student.prn} className="table-row">
//                 <TableCell>{student.prn}</TableCell>
//                 <TableCell>{student.name}</TableCell>
//                 <TableCell className={student.todayAttendance === "Present" ? "present" : "absent"}>
//                   {student.todayAttendance}
//                 </TableCell>
//                 <TableCell>{student.overallAttendance}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         className="pagination"
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={filteredStudents.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default StudentsPage;













import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import "../styles/studentPage.css";

const StudentsPage = ({ searchQuery = "" }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const students = [
    { prn: "101", name: "Alice Johnson", todayAttendance: "Present", overallAttendance: "90%" },
    { prn: "102", name: "Bob Smith", todayAttendance: "Absent", overallAttendance: "80%" },
    { prn: "103", name: "Charlie Brown", todayAttendance: "Present", overallAttendance: "85%" },
    { prn: "104", name: "Daisy Ridley", todayAttendance: "Present", overallAttendance: "88%" },
    { prn: "105", name: "Ethan Hunt", todayAttendance: "Absent", overallAttendance: "92%" },
    { prn: "106", name: "Fiona Apple", todayAttendance: "Present", overallAttendance: "78%" },
    { prn: "107", name: "George Clooney", todayAttendance: "Present", overallAttendance: "95%" },
    { prn: "108", name: "Hannah Montana", todayAttendance: "Absent", overallAttendance: "89%" },
    { prn: "109", name: "Ian Somerhalder", todayAttendance: "Present", overallAttendance: "91%" },
    { prn: "110", name: "Jack Sparrow", todayAttendance: "Present", overallAttendance: "87%" },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.prn.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className="students-container">
      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow className="table-header">
              <TableCell>PRN</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Today's Attendance</TableCell>
              <TableCell>Overall Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student) => (
                <TableRow key={student.prn} className="table-row">
                  <TableCell>{student.prn}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell className={student.todayAttendance === "Present" ? "present" : "absent"}>
                    {student.todayAttendance}
                  </TableCell>
                  <TableCell>{student.overallAttendance}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="pagination"
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filteredStudents.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StudentsPage;
















// import { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
// } from "@mui/material";
// import "../styles/studentPage.css";

// const StudentsPage = ({ searchQuery = "" }) => {
//   const [students, setStudents] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [loading, setLoading] = useState(false);

//   // Fetch data from APIs on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Fetch student details
//         const studentResponse = await axios.get("http://localhost:8085/api/students/get-all-students", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const studentsData = studentResponse.data;

//         // Fetch today's attendance
//         const todayAttendanceResponse = await axios.get(
//           "http://localhost:8085/api/attendance/todays-attendance",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         const todayAttendanceData = todayAttendanceResponse.data;

//         // Fetch overall attendance
//         const overallAttendanceResponse = await axios.get(
//           "http://localhost:8085/api/attendance/current-months-attendance",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         const overallAttendanceData = overallAttendanceResponse.data;

//         // Merge the data
//         const mergedData = studentsData.map((student) => {
//           const todayAttendance = todayAttendanceData[student.prn] || "N/A";
//           const overallAttendance = overallAttendanceData[student.prn] || "N/A";

//           return {
//             prn: student.prn,
//             name: student.name,
//             todayAttendance,
//             overallAttendance,
//           };
//         });

//         setStudents(mergedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         alert("Failed to fetch student data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter students based on the search query
//   const filteredStudents = useMemo(() => {
//     return students.filter((student) =>
//       student.prn.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }, [students, searchQuery]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <Paper className="students-container">
//       <TableContainer className="table-container">
//         <Table>
//           <TableHead>
//             <TableRow className="table-header">
//               <TableCell>PRN</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Today's Attendance</TableCell>
//               <TableCell>Overall Attendance</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredStudents
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((student) => (
//                 <TableRow key={student.prn} className="table-row">
//                   <TableCell>{student.prn}</TableCell>
//                   <TableCell>{student.name}</TableCell>
//                   <TableCell className={student.todayAttendance === "Present" ? "present" : "absent"}>
//                     {student.todayAttendance}
//                   </TableCell>
//                   <TableCell>{student.overallAttendance}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         className="pagination"
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={filteredStudents.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default StudentsPage;

















// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
// } from "@mui/material";
// import { fetchStudents } from "./api";

// const StudentsPage = ({ searchQuery = "" }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadStudents = async () => {
//       try {
//         const response = await fetchStudents();
//         setStudents(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch students");
//         setLoading(false);
//       }
//     };

//     loadStudents();
//   }, []);

//   const filteredStudents = students.filter((student) =>
//     student.prn.toString().toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <Paper style={{ width: "100%", overflow: "hidden", padding: "20px" }}>
//       <h2>Students</h2>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>PRN</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Email</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredStudents
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((student) => (
//                 <TableRow key={student.prn}>
//                   <TableCell>{student.prn}</TableCell>
//                   <TableCell>{student.name}</TableCell>
//                   <TableCell>{student.email}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={filteredStudents.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default StudentsPage;