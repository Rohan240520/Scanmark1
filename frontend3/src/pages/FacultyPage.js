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
// const FacultyPage = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   // Dummy data for now
//   const faculty = [
//     { facultyCode: "C001", name: "Prof. A", email: "Prof.a@univ.com", dept: "DAC" },
//     { facultyCode: "C002", name: "Prof. B", email: "Prof.b@univ.com", dept: "VLSI" },
//     { facultyCode: "C003", name: "Prof. C", email: "Prof.c@univ.com", dept: "DBDA" },
//     { facultyCode: "C004", name: "Prof. D", email: "Prof.d@univ.com", dept: "AI" },
//     { facultyCode: "C005", name: "Prof. E", email: "Prof.e@univ.com", dept: "IOT" },
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
// <h2>Faculty</h2>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Faculty Code</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Email</strong></TableCell>
//               <TableCell><strong>Department</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {faculty.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((fac) => (
//               <TableRow key={fac.facultyCode}>
//                 <TableCell>{fac.facultyCode}</TableCell>
//                 <TableCell>{fac.name}</TableCell>
//                 <TableCell>{fac.email}</TableCell>
//                 <TableCell>{fac.dept}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={faculty.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default FacultyPage;





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
// import { fetchFaculty } from "./api";

// const FacultyPage = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [faculty, setFaculty] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadFaculty = async () => {
//       try {
//         const response = await fetchFaculty();
//         setFaculty(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch faculty");
//         setLoading(false);
//       }
//     };

//     loadFaculty();
//   }, []);

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
//       <h2>Faculty</h2>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Faculty Code</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Email</strong></TableCell>
//               <TableCell><strong>Department</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {faculty
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((fac) => (
//                 <TableRow key={fac.facultyCode}>
//                   <TableCell>{fac.facultyCode}</TableCell>
//                   <TableCell>{fac.name}</TableCell>
//                   <TableCell>{fac.email}</TableCell>
//                   <TableCell>{fac.dept}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={faculty.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default FacultyPage;













// import React, { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";
// import useFaculties from "../hooks/useFaculties";
// import "../styles/facultyPage.css";

// const FacultyPage = () => {
//   const { faculties } = useFaculties();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(Number.parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const displayedFaculties = faculties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <Paper style={{ width: "100%", overflow: "hidden", padding: "20px" }}>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Faculty Code</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Email</strong></TableCell>
//               <TableCell><strong>Department</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {displayedFaculties.map((faculty) => (
//               <TableRow key={faculty.facultyCode}>
//                 <TableCell>{faculty.facultyCode}</TableCell>
//                 <TableCell>{faculty.name}</TableCell>
//                 <TableCell>{faculty.email}</TableCell>
//                 <TableCell>{faculty.department}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination rowsPerPageOptions={[5, 10, 15]} count={faculties.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
//     </Paper>
//   );
// };

// export default FacultyPage;















import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";
import useFaculties from "../hooks/useFaculties";
import "../styles/facultyPage.css";

const FacultyPage = () => {
  const { faculties } = useFaculties();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className="faculty-container">
      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow className="table-header">
              <TableCell><strong>Faculty Code</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Department</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faculties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((faculty) => (
              <TableRow key={faculty.facultyCode} className="table-row">
                <TableCell>{faculty.facultyCode}</TableCell>
                <TableCell>{faculty.name}</TableCell>
                <TableCell>{faculty.email}</TableCell>
                <TableCell>{faculty.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="pagination"
        rowsPerPageOptions={[5, 10, 15]}
        count={faculties.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default FacultyPage;