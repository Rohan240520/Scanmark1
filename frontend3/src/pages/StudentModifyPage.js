// import React, { useState } from "react";

// const StudentModifyPage = () => {
//   const [students, setStudents] = useState([]);
//   const [form, setForm] = useState({ prn: "", name: "", email: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     setStudents([...students, form]);
//     setForm({ prn: "", name: "", email: "" });
//   };

//   const handleRemove = (prn) => {
//     setStudents(students.filter((student) => student.prn !== prn));
//   };

//   const handleModify = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === form.prn ? { ...student, ...form } : student
//       )
//     );
//     setForm({ prn: "", name: "", email: "" });
//   };

//   return (
//     <div>
//       <h1>Modify Students</h1>
//       <input name="prn" placeholder="PRN" value={form.prn} onChange={handleChange} />
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
//       <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleModify}>Modify</button>
//       <table>
//         <thead>
//           <tr>
//             <th>PRN</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.prn}>
//               <td>{student.prn}</td>
//               <td>{student.name}</td>
//               <td>{student.email}</td>
//               <td>
//                 <button onClick={() => handleRemove(student.prn)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentModifyPage;


// import React from 'react'

// function StudentModifyPage() {
//   return (
//     <div>
//       <h1>StudentModifyPage</h1>
//     </div>
//   )
// }

// export default StudentModifyPage


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
//   TextField,
//   Button,
// } from "@mui/material";

// const StudentModifyPage = () => {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice.johnson@example.com" },
//     { prn: "102", name: "Bob Smith", email: "bob.smith@example.com" },
//   ]);

//   const [newStudent, setNewStudent] = useState({ prn: "", name: "", email: "" });
//   const [editStudent, setEditStudent] = useState(null);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   // Add a new student
//   const handleAddStudent = () => {
//     if (!newStudent.prn || !newStudent.name || !newStudent.email) {
//       alert("Please fill all fields.");
//       return;
//     }
//     setStudents([...students, newStudent]);
//     setNewStudent({ prn: "", name: "", email: "" });
//   };

//   // Delete a student
//   const handleDeleteStudent = (prn) => {
//     setStudents(students.filter((student) => student.prn !== prn));
//   };

//   // Start editing a student
//   const handleEditStudent = (student) => {
//     setEditStudent(student);
//   };

//   // Save edited student
//   const handleSaveStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editStudent.prn ? editStudent : student
//       )
//     );
//     setEditStudent(null);
//   };

//   // Handle input changes
//   const handleInputChange = (e, field, isEdit = false) => {
//     const value = e.target.value;
//     if (isEdit) {
//       setEditStudent({ ...editStudent, [field]: value });
//     } else {
//       setNewStudent({ ...newStudent, [field]: value });
//     }
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Paper style={{ width: "100%", overflow: "hidden", padding: "20px" }}>

//       {/* Add Student Section */}
//       <div style={{ marginBottom: "20px" }}>
//         <h3>Add New Student</h3>
//         <TextField
//           label="PRN"
//           value={newStudent.prn}
//           onChange={(e) => handleInputChange(e, "prn")}
//           style={{ marginRight: "10px" }}
//         />
//         <TextField
//           label="Name"
//           value={newStudent.name}
//           onChange={(e) => handleInputChange(e, "name")}
//           style={{ marginRight: "10px" }}
//         />
//         <TextField
//           label="Email"
//           value={newStudent.email}
//           onChange={(e) => handleInputChange(e, "email")}
//           style={{ marginRight: "10px" }}
//         />
//         <Button variant="contained" color="primary" onClick={handleAddStudent}>
//           Add Student
//         </Button>
//       </div>

//       {/* Student Table */}
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>PRN</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Email</strong></TableCell>
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {students
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((student) => (
//                 <TableRow key={student.prn}>
//                   <TableCell>{student.prn}</TableCell>
//                   <TableCell>
//                     {editStudent && editStudent.prn === student.prn ? (
//                       <TextField
//                         value={editStudent.name}
//                         onChange={(e) => handleInputChange(e, "name", true)}
//                       />
//                     ) : (
//                       student.name
//                     )}
//                   </TableCell>
//                   <TableCell>
//                     {editStudent && editStudent.prn === student.prn ? (
//                       <TextField
//                         value={editStudent.email}
//                         onChange={(e) => handleInputChange(e, "email", true)}
//                       />
//                     ) : (
//                       student.email
//                     )}
//                   </TableCell>
//                   <TableCell>
//                     {editStudent && editStudent.prn === student.prn ? (
//                       <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={handleSaveStudent}
//                         style={{ marginRight: "10px" }}
//                       >
//                         Save
//                       </Button>
//                     ) : (
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleEditStudent(student)}
//                         style={{ marginRight: "10px" }}
//                       >
//                         Edit
//                       </Button>
//                     )}
//                     <Button
//                       variant="contained"
//                       color="error"
//                       onClick={() => handleDeleteStudent(student.prn)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
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

// export default StudentModifyPage;




// import React, { useState } from "react";
// import { TextField, Button, Paper, Typography, Box } from "@mui/material";

// const StudentModifyPage = () => {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice.johnson@example.com" },
//     { prn: "102", name: "Bob Smith", email: "bob.smith@example.com" },
//   ]);

//   const [newStudent, setNewStudent] = useState({ prn: "", name: "", email: "" });
//   const [searchPRN, setSearchPRN] = useState("");
//   const [editStudent, setEditStudent] = useState(null);

//   // Add Student
//   const handleAddStudent = () => {
//     if (!newStudent.prn || !newStudent.name || !newStudent.email) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (students.find((student) => student.prn === newStudent.prn)) {
//       alert("PRN already exists.");
//       return;
//     }
//     setStudents([...students, newStudent]);
//     setNewStudent({ prn: "", name: "", email: "" });
//     alert("Student added successfully.");
//   };

//   // Search Student by PRN
//   const handleSearchPRN = () => {
//     const student = students.find((s) => s.prn === searchPRN);
//     if (!student) {
//       alert("No student found with this PRN.");
//       return;
//     }
//     setEditStudent(student);
//   };

//   // Update Student
//   const handleUpdateStudent = () => {
//     if (!editStudent.name || !editStudent.email) {
//       alert("Please fill all fields.");
//       return;
//     }
//     setStudents(
//       students.map((student) =>
//         student.prn === editStudent.prn ? editStudent : student
//       )
//     );
//     setEditStudent(null);
//     alert("Student details updated successfully.");
//   };

//   // Delete Student
//   const handleDeleteStudent = () => {
//     setStudents(students.filter((student) => student.prn !== editStudent.prn));
//     setEditStudent(null);
//     setSearchPRN("");
//     alert("Student deleted successfully.");
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}
//     >
//       <Typography variant="h4" align="center" gutterBottom>
//         Student Management
//       </Typography>

//       {/* Add Student Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           marginBottom: 4,
//         }}
//       >
//         <Typography variant="h5">Add Student</Typography>
//         <TextField
//           label="PRN"
//           value={newStudent.prn}
//           onChange={(e) => setNewStudent({ ...newStudent, prn: e.target.value })}
//         />
//         <TextField
//           label="Name"
//           value={newStudent.name}
//           onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
//         />
//         <TextField
//           label="Email"
//           value={newStudent.email}
//           onChange={(e) =>
//             setNewStudent({ ...newStudent, email: e.target.value })
//           }
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddStudent}
//         >
//           Add Student
//         </Button>
//       </Box>

//       {/* Search, Edit, and Delete Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           marginBottom: 4,
//         }}
//       >
//         <Typography variant="h5">Edit or Delete Student</Typography>
//         <TextField
//           label="Search by PRN"
//           value={searchPRN}
//           onChange={(e) => setSearchPRN(e.target.value)}
//         />
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleSearchPRN}
//         >
//           Search
//         </Button>

//         {editStudent && (
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//             <TextField
//               label="Name"
//               value={editStudent.name}
//               onChange={(e) =>
//                 setEditStudent({ ...editStudent, name: e.target.value })
//               }
//             />
//             <TextField
//               label="Email"
//               value={editStudent.email}
//               onChange={(e) =>
//                 setEditStudent({ ...editStudent, email: e.target.value })
//               }
//             />
//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleUpdateStudent}
//               >
//                 Update
//               </Button>
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={handleDeleteStudent}
//               >
//                 Delete
//               </Button>
//             </Box>
//           </Box>
//         )}
//       </Box>
//     </Paper>
//   );
// };

// export default StudentModifyPage;






// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Paper,
//   Typography,
//   Box,
//   Grid,
//   Divider,
// } from "@mui/material";

// const StudentModifyPage = () => {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice.johnson@example.com" },
//     { prn: "102", name: "Bob Smith", email: "bob.smith@example.com" },
//   ]);

//   const [newStudent, setNewStudent] = useState({ prn: "", name: "", email: "" });
//   const [searchPRN, setSearchPRN] = useState("");
//   const [editStudent, setEditStudent] = useState(null);

//   // Add Student
//   const handleAddStudent = () => {
//     if (!newStudent.prn || !newStudent.name || !newStudent.email) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (students.find((student) => student.prn === newStudent.prn)) {
//       alert("PRN already exists.");
//       return;
//     }
//     setStudents([...students, newStudent]);
//     setNewStudent({ prn: "", name: "", email: "" });
//     alert("Student added successfully.");
//   };

//   // Search Student by PRN
//   const handleSearchPRN = () => {
//     const student = students.find((s) => s.prn === searchPRN);
//     if (!student) {
//       alert("No student found with this PRN.");
//       return;
//     }
//     setEditStudent(student);
//   };

//   // Update Student
//   const handleUpdateStudent = () => {
//     if (!editStudent.name || !editStudent.email) {
//       alert("Please fill all fields.");
//       return;
//     }
//     setStudents(
//       students.map((student) =>
//         student.prn === editStudent.prn ? editStudent : student
//       )
//     );
//     setEditStudent(null);
//     alert("Student details updated successfully.");
//   };

//   // Delete Student
//   const handleDeleteStudent = () => {
//     setStudents(students.filter((student) => student.prn !== editStudent.prn));
//     setEditStudent(null);
//     setSearchPRN("");
//     alert("Student deleted successfully.");
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         padding: "20px",
//         margin: "20px auto",
//         maxWidth: "1000px",
//         backgroundColor: "#222831",
//         color: "#eeeeee",
//         borderRadius: "10px",
//       }}
//     >
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ color: "#00ADB5" }}
//       >
//         Student Management
//       </Typography>
//       <Divider sx={{ backgroundColor: "#393E46", marginBottom: "20px" }} />

//       <Grid container spacing={4}>
//         {/* Add Student Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               padding: "20px",
//               borderRadius: "10px",
//               backgroundColor: "#393E46",
//             }}
//           >
//             <Typography
//               variant="h5"
//               gutterBottom
//               sx={{ color: "#00ADB5", marginBottom: "10px" }}
//             >
//               Add Student
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="PRN"
//               value={newStudent.prn}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, prn: e.target.value })
//               }
//               sx={{
//                 marginBottom: "10px",
//                 input: { color: "#eeeeee" },
//                 label: { color: "#00ADB5" },
//               }}
//             />
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Name"
//               value={newStudent.name}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, name: e.target.value })
//               }
//               sx={{
//                 marginBottom: "10px",
//                 input: { color: "#eeeeee" },
//                 label: { color: "#00ADB5" },
//               }}
//             />
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Email"
//               value={newStudent.email}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, email: e.target.value })
//               }
//               sx={{
//                 marginBottom: "20px",
//                 input: { color: "#eeeeee" },
//                 label: { color: "#00ADB5" },
//               }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               color="primary"
//               onClick={handleAddStudent}
//               sx={{
//                 backgroundColor: "#00ADB5",
//                 "&:hover": { backgroundColor: "#007C8C" },
//               }}
//             >
//               Add Student
//             </Button>
//           </Box>
//         </Grid>

//         {/* Edit/Delete Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               padding: "20px",
//               borderRadius: "10px",
//               backgroundColor: "#393E46",
//             }}
//           >
//             <Typography
//               variant="h5"
//               gutterBottom
//               sx={{ color: "#00ADB5", marginBottom: "10px" }}
//             >
//               Edit / Delete Student
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Search by PRN"
//               value={searchPRN}
//               onChange={(e) => setSearchPRN(e.target.value)}
//               sx={{
//                 marginBottom: "20px",
//                 input: { color: "#eeeeee" },
//                 label: { color: "#00ADB5" },
//               }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               color="secondary"
//               onClick={handleSearchPRN}
//               sx={{
//                 backgroundColor: "#00ADB5",
//                 "&:hover": { backgroundColor: "#007C8C" },
//                 marginBottom: "20px",
//               }}
//             >
//               Search
//             </Button>

//             {editStudent && (
//               <>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Name"
//                   value={editStudent.name}
//                   onChange={(e) =>
//                     setEditStudent({ ...editStudent, name: e.target.value })
//                   }
//                   sx={{
//                     marginBottom: "10px",
//                     input: { color: "#eeeeee" },
//                     label: { color: "#00ADB5" },
//                   }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Email"
//                   value={editStudent.email}
//                   onChange={(e) =>
//                     setEditStudent({ ...editStudent, email: e.target.value })
//                   }
//                   sx={{
//                     marginBottom: "20px",
//                     input: { color: "#eeeeee" },
//                     label: { color: "#00ADB5" },
//                   }}
//                 />
//                 <Box sx={{ display: "flex", gap: 2 }}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     onClick={handleUpdateStudent}
//                     sx={{
//                       backgroundColor: "#00ADB5",
//                       "&:hover": { backgroundColor: "#007C8C" },
//                     }}
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     color="error"
//                     onClick={handleDeleteStudent}
//                     sx={{
//                       backgroundColor: "#FF5722",
//                       "&:hover": { backgroundColor: "#D84315" },
//                     }}
//                   >
//                     Delete
//                   </Button>
//                 </Box>
//               </>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default StudentModifyPage;






// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Paper,
//   Typography,
//   Box,
//   Grid,
//   Divider,
// } from "@mui/material";

// const StudentModifyPage = () => {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice.johnson@example.com" },
//     { prn: "102", name: "Bob Smith", email: "bob.smith@example.com" },
//   ]);

//   const [newStudent, setNewStudent] = useState({ prn: "", name: "", email: "" });
//   const [searchPRN, setSearchPRN] = useState("");
//   const [editStudent, setEditStudent] = useState(null);

//   // Add Student
//   const handleAddStudent = () => {
//     if (!newStudent.prn || !newStudent.name || !newStudent.email) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (students.find((student) => student.prn === newStudent.prn)) {
//       alert("PRN already exists.");
//       return;
//     }
//     setStudents([...students, newStudent]);
//     setNewStudent({ prn: "", name: "", email: "" });
//     alert("Student added successfully.");
//   };

//   // Search Student by PRN
//   const handleSearchPRN = () => {
//     const student = students.find((s) => s.prn === searchPRN);
//     if (!student) {
//       alert("No student found with this PRN.");
//       return;
//     }
//     setEditStudent(student);
//   };

//   // Update Student
//   const handleUpdateStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editStudent.prn ? editStudent : student
//       )
//     );
//     setEditStudent(null);
//     alert("Student details updated successfully.");
//   };

//   // Delete Student
//   const handleDeleteStudent = () => {
//     setStudents(students.filter((student) => student.prn !== editStudent.prn));
//     setEditStudent(null);
//     setSearchPRN("");
//     alert("Student deleted successfully.");
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         padding: "30px",
//         margin: "30px auto",
//         maxWidth: "900px",
//         backgroundColor: "#f8f9fa",
//         borderRadius: "10px",
//       }}
//     >
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ color: "#393E46", fontWeight: "bold" }}
//       >
//         Student Management
//       </Typography>
//       <Divider sx={{ marginBottom: "20px" }} />

//       <Grid container spacing={4}>
//         {/* Add Student Section */}
//         <Grid item xs={12} md={6}>
//           <Paper
//             elevation={2}
//             sx={{
//               padding: "20px",
//               borderRadius: "10px",
//               backgroundColor: "#ffffff",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{ color: "#222831", fontWeight: "bold", marginBottom: "10px" }}
//             >
//               Add Student
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="PRN"
//               value={newStudent.prn}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, prn: e.target.value })
//               }
//               sx={{ marginBottom: "10px" }}
//             />
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Name"
//               value={newStudent.name}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, name: e.target.value })
//               }
//               sx={{ marginBottom: "10px" }}
//             />
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Email"
//               value={newStudent.email}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, email: e.target.value })
//               }
//               sx={{ marginBottom: "20px" }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 backgroundColor: "#00ADB5",
//                 "&:hover": { backgroundColor: "#007C8C" },
//                 color: "white",
//               }}
//               onClick={handleAddStudent}
//             >
//               Add Student
//             </Button>
//           </Paper>
//         </Grid>

//         {/* Edit/Delete Section */}
//         <Grid item xs={12} md={6}>
//           <Paper
//             elevation={2}
//             sx={{
//               padding: "20px",
//               borderRadius: "10px",
//               backgroundColor: "#ffffff",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{ color: "#222831", fontWeight: "bold", marginBottom: "10px" }}
//             >
//               Edit / Delete Student
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Search by PRN"
//               value={searchPRN}
//               onChange={(e) => setSearchPRN(e.target.value)}
//               sx={{ marginBottom: "20px" }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 backgroundColor: "#00ADB5",
//                 "&:hover": { backgroundColor: "#007C8C" },
//                 color: "white",
//                 marginBottom: "20px",
//               }}
//               onClick={handleSearchPRN}
//             >
//               Search
//             </Button>

//             {editStudent && (
//               <>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Name"
//                   value={editStudent.name}
//                   onChange={(e) =>
//                     setEditStudent({ ...editStudent, name: e.target.value })
//                   }
//                   sx={{ marginBottom: "10px" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Email"
//                   value={editStudent.email}
//                   onChange={(e) =>
//                     setEditStudent({ ...editStudent, email: e.target.value })
//                   }
//                   sx={{ marginBottom: "20px" }}
//                 />
//                 <Box sx={{ display: "flex", gap: 2 }}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#00ADB5",
//                       "&:hover": { backgroundColor: "#007C8C" },
//                       color: "white",
//                     }}
//                     onClick={handleUpdateStudent}
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#FF5722",
//                       "&:hover": { backgroundColor: "#D84315" },
//                       color: "white",
//                     }}
//                     onClick={handleDeleteStudent}
//                   >
//                     Delete
//                   </Button>
//                 </Box>
//               </>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default StudentModifyPage;







// import React, { useState } from "react";
// import "../styles/StudentModifyPage.css";
// import { TextField, Button, Typography, Box, Grid, Divider } from "@mui/material";

// const StudentModifyPage = () => {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice.johnson@example.com" },
//     { prn: "102", name: "Bob Smith", email: "bob.smith@example.com" },
//   ]);

//   const [newStudent, setNewStudent] = useState({ prn: "", name: "", email: "" });
//   const [searchPRN, setSearchPRN] = useState("");
//   const [editStudent, setEditStudent] = useState(null);

//   // Add Student
//   const handleAddStudent = () => {
//     if (!newStudent.prn || !newStudent.name || !newStudent.email) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (students.find((student) => student.prn === newStudent.prn)) {
//       alert("PRN already exists.");
//       return;
//     }
//     setStudents([...students, newStudent]);
//     setNewStudent({ prn: "", name: "", email: "" });
//     alert("Student added successfully.");
//   };

//   // Search Student by PRN
//   const handleSearchPRN = () => {
//     const student = students.find((s) => s.prn === searchPRN);
//     if (!student) {
//       alert("No student found with this PRN.");
//       return;
//     }
//     setEditStudent(student);
//   };

//   // Update Student
//   const handleUpdateStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editStudent.prn ? editStudent : student
//       )
//     );
//     setEditStudent(null);
//     alert("Student details updated successfully.");
//   };

//   // Delete Student
//   const handleDeleteStudent = () => {
//     setStudents(students.filter((student) => student.prn !== searchPRN));
//     setEditStudent(null);
//     setSearchPRN("");
//     alert("Student deleted successfully.");
//   };

//   return (
//     <div className="student-modify-container">
//       <Typography
//         variant="h4"
//         align="center"
//         className="page-title"
//       >
//         Student Management
//       </Typography>
//       <Divider className="divider" />

//       <Grid container spacing={4}>
//         {/* Add Student Section */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" className="section-title">
//             Add Student
//           </Typography>
//           <Box>
//             <TextField
//               fullWidth
//               label="PRN"
//               value={newStudent.prn}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, prn: e.target.value })
//               }
//               className="input-field"
//             />
//             <TextField
//               fullWidth
//               label="Name"
//               value={newStudent.name}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, name: e.target.value })
//               }
//               className="input-field"
//             />
//             <TextField
//               fullWidth
//               label="Email"
//               value={newStudent.email}
//               onChange={(e) =>
//                 setNewStudent({ ...newStudent, email: e.target.value })
//               }
//               className="input-field"
//             />
//             <Button
//               variant="contained"
//               className="add-button"
//               onClick={handleAddStudent}
//             >
//               Add Student
//             </Button>
//           </Box>
//         </Grid>

//         {/* Edit Student Section */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" className="section-title">
//             Edit Student
//           </Typography>
//           <Box>
//             <TextField
//               fullWidth
//               label="Search by PRN"
//               value={searchPRN}
//               onChange={(e) => setSearchPRN(e.target.value)}
//               className="input-field"
//             />
//             <Button
//               variant="contained"
//               className="search-button"
//               onClick={handleSearchPRN}
//             >
//               Search
//             </Button>

//             {editStudent && (
//               <>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   value={editStudent.name}
//                   onChange={(e) =>
//                     setEditStudent({ ...editStudent, name: e.target.value })
//                   }
//                   className="input-field"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   value={editStudent.email}
//                   onChange={(e) =>
//                     setEditStudent({ ...editStudent, email: e.target.value })
//                   }
//                   className="input-field"
//                 />
//                 <Button
//                   variant="contained"
//                   className="update-button"
//                   onClick={handleUpdateStudent}
//                 >
//                   Update Student
//                 </Button>
//               </>
//             )}
//           </Box>
//         </Grid>

//         {/* Delete Student Section */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" className="section-title">
//             Delete Student
//           </Typography>
//           <Box>
//             <TextField
//               fullWidth
//               label="Search by PRN"
//               value={searchPRN}
//               onChange={(e) => setSearchPRN(e.target.value)}
//               className="input-field"
//             />
//             <Button
//               variant="contained"
//               className="delete-button"
//               onClick={handleDeleteStudent}
//             >
//               Delete Student
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default StudentModifyPage;









// import "../styles/StudentModifyPage.css";
// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   TextField,
//   Button,
// } from "@mui/material";

// const StudentModifyPage = () => {
//   const [students, setStudents] = useState([]);
//   const [newStudent, setNewStudent] = useState({ prn: "", name: "", email: "" });
//   const [searchPRN, setSearchPRN] = useState("");
//   const [editStudent, setEditStudent] = useState(null);

//   const handleAddStudent = () => {
//     if (!newStudent.prn || !newStudent.name || !newStudent.email) return;
//     setStudents([...students, newStudent]);
//     setNewStudent({ prn: "", name: "", email: "" });
//     alert("Student added successfully");
//   };

//   const handleSearchPRN = () => {
//     const student = students.find((s) => s.prn === searchPRN);
//     setEditStudent(student || null);
//     if (!student) alert("No student found!");
//   };

//   const handleUpdateStudent = () => {
//     setStudents(
//       students.map((s) => (s.prn === editStudent.prn ? editStudent : s))
//     );
//     setEditStudent(null);
//     alert("Student updated successfully!");
//   };

//   const handleDeleteStudent = () => {
//     setStudents(students.filter((s) => s.prn !== searchPRN));
//     setEditStudent(null);
//     setSearchPRN("");
//     alert("Student deleted successfully!");
//   };

//   return (
//     <Box className="student-container">
//       <Typography variant="h4" className="header" align="center">
//         Student Management
//       </Typography>

//       <Grid container spacing={3} className="main-grid">
//         {/* Add Student Section */}
//         <Grid item xs={12} md={4}>
//           <Card className="card">
//             <CardContent>
//               <Typography variant="h6" className="section-title">
//                 Add Student
//               </Typography>
//               <TextField
//                 fullWidth
//                 label="PRN"
//                 value={newStudent.prn}
//                 onChange={(e) =>
//                   setNewStudent({ ...newStudent, prn: e.target.value })
//                 }
//                 margin="normal"
//               />
//               <TextField
//                 fullWidth
//                 label="Name"
//                 value={newStudent.name}
//                 onChange={(e) =>
//                   setNewStudent({ ...newStudent, name: e.target.value })
//                 }
//                 margin="normal"
//               />
//               <TextField
//                 fullWidth
//                 label="Email"
//                 value={newStudent.email}
//                 onChange={(e) =>
//                   setNewStudent({ ...newStudent, email: e.target.value })
//                 }
//                 margin="normal"
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleAddStudent}
//                 className="button"
//               >
//                 Add Student
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Edit Student Section */}
//         <Grid item xs={12} md={4}>
//           <Card className="card">
//             <CardContent>
//               <Typography variant="h6" className="section-title">
//                 Edit Student
//               </Typography>
//               <TextField
//                 fullWidth
//                 label="Search by PRN"
//                 value={searchPRN}
//                 onChange={(e) => setSearchPRN(e.target.value)}
//                 margin="normal"
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleSearchPRN}
//                 className="button"
//               >
//                 Search
//               </Button>

//               {editStudent && (
//                 <>
//                   <TextField
//                     fullWidth
//                     label="Name"
//                     value={editStudent.name}
//                     onChange={(e) =>
//                       setEditStudent({ ...editStudent, name: e.target.value })
//                     }
//                     margin="normal"
//                   />
//                   <TextField
//                     fullWidth
//                     label="Email"
//                     value={editStudent.email}
//                     onChange={(e) =>
//                       setEditStudent({ ...editStudent, email: e.target.value })
//                     }
//                     margin="normal"
//                   />
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     onClick={handleUpdateStudent}
//                     className="button"
//                   >
//                     Update Student
//                   </Button>
//                 </>
//               )}
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Delete Student Section */}
//         <Grid item xs={12} md={4}>
//           <Card className="card">
//             <CardContent>
//               <Typography variant="h6" className="section-title">
//                 Delete Student
//               </Typography>
//               <TextField
//                 fullWidth
//                 label="Search by PRN"
//                 value={searchPRN}
//                 onChange={(e) => setSearchPRN(e.target.value)}
//                 margin="normal"
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleDeleteStudent}
//                 className="delete-button"
//               >
//                 Delete Student
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default StudentModifyPage;



// import React, { useState } from "react";
// import "../styles/StudentModifyPage.css";

// function StudentModifyPage() {
//   const [students, setStudents] = useState([]);
//   const [formData, setFormData] = useState({ prn: "", name: "", email: "" });
//   const [editingPrn, setEditingPrn] = useState(null); // Track the PRN being edited

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Add a new student
//   const handleAddStudent = () => {
//     if (!formData.prn || !formData.name || !formData.email) {
//       alert("All fields are required!");
//       return;
//     }
//     const studentExists = students.some((student) => student.prn === formData.prn);
//     if (studentExists) {
//       alert("Student with this PRN already exists!");
//       return;
//     }
//     setStudents([...students, formData]);
//     setFormData({ prn: "", name: "", email: "" });
//   };

//   // Remove a student by PRN
//   const handleRemoveStudent = (prn) => {
//     const updatedStudents = students.filter((student) => student.prn !== prn);
//     setStudents(updatedStudents);
//   };

//   // Edit a student
//   const handleEditStudent = (prn) => {
//     const studentToEdit = students.find((student) => student.prn === prn);
//     if (studentToEdit) {
//       setFormData(studentToEdit);
//       setEditingPrn(prn);
//     }
//   };

//   // Save modified student details
//   const handleSaveStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editingPrn ? { ...formData } : student
//       )
//     );
//     setFormData({ prn: "", name: "", email: "" });
//     setEditingPrn(null);
//   };

//   return (
//     <div className="student-modify-page">
//       <h3>Modify Student</h3>
//       <div className="form-container">
//         <input
//           type="text"
//           name="prn"
//           placeholder="PRN"
//           value={formData.prn}
//           onChange={handleInputChange}
//           disabled={!!editingPrn} // Disable PRN field while editing
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         {!editingPrn ? (
//           <button onClick={handleAddStudent}>Add Student</button>
//         ) : (
//           <button onClick={handleSaveStudent}>Save Changes</button>
//         )}
//       </div>
//       <div className="students-list">
//         <h4>Student List</h4>
//         {students.length === 0 ? (
//           <p>No students added yet.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>PRN</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr key={student.prn}>
//                   <td>{student.prn}</td>
//                   <td>{student.name}</td>
//                   <td>{student.email}</td>
//                   <td>
//                     <button onClick={() => handleEditStudent(student.prn)}>
//                       Edit
//                     </button>
//                     <button onClick={() => handleRemoveStudent(student.prn)}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentModifyPage;





// import React, { useState, useEffect } from "react";
// import "../styles/StudentModifyPage.css";

// function StudentModifyPage() {
//   // State for managing student data
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice@example.com" },
//     { prn: "102", name: "Bob Smith", email: "bob@example.com" },
//     { prn: "103", name: "Charlie Brown", email: "charlie@example.com" },
//   ]);

//   const [formData, setFormData] = useState({ prn: "", name: "", email: "" });
//   const [editingPrn, setEditingPrn] = useState(null); // Track the PRN being edited
//   const [highlightedRow, setHighlightedRow] = useState(null); // Track the row to highlight

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Add a new student
//   const handleAddStudent = () => {
//     if (!formData.prn || !formData.name || !formData.email) {
//       alert("All fields are required!");
//       return;
//     }
//     const studentExists = students.some((student) => student.prn === formData.prn);
//     if (studentExists) {
//       alert("Student with this PRN already exists!");
//       return;
//     }
//     const newStudent = { ...formData };
//     setStudents([...students, newStudent]);
//     setFormData({ prn: "", name: "", email: "" });
//     setHighlightedRow(newStudent.prn); // Highlight the newly added student

//     // Remove highlight after 1 second
//     setTimeout(() => setHighlightedRow(null), 1000);
//   };

//   // Remove a student by PRN
//   const handleRemoveStudent = (prn) => {
//     const updatedStudents = students.filter((student) => student.prn !== prn);
//     setStudents(updatedStudents);
//   };

//   // Edit a student
//   const handleEditStudent = (prn) => {
//     const studentToEdit = students.find((student) => student.prn === prn);
//     if (studentToEdit) {
//       setFormData(studentToEdit);
//       setEditingPrn(prn);
//     }
//   };

//   // Save modified student details
//   const handleSaveStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editingPrn ? { ...formData } : student
//       )
//     );
//     setFormData({ prn: "", name: "", email: "" });
//     setEditingPrn(null);
//   };

//   return (
//     <div className="student-modify-page">
//       <h3>Modify Student</h3>
//       <div className="form-container">
//         <input
//           type="text"
//           name="prn"
//           placeholder="PRN"
//           value={formData.prn}
//           onChange={handleInputChange}
//           disabled={!!editingPrn} // Disable PRN field while editing
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         {!editingPrn ? (
//           <button onClick={handleAddStudent}>Add Student</button>
//         ) : (
//           <button onClick={handleSaveStudent}>Save Changes</button>
//         )}
//       </div>
//       <div className="students-list">
//         <h4>Student List</h4>
//         {students.length === 0 ? (
//           <p>No students added yet.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>PRN</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr
//                   key={student.prn}
//                   className={highlightedRow === student.prn ? "highlight" : ""}
//                 >
//                   <td>{student.prn}</td>
//                   <td>{student.name}</td>
//                   <td>{student.email}</td>
//                   <td>
//                     <button onClick={() => handleEditStudent(student.prn)}>
//                       Edit
//                     </button>
//                     <button onClick={() => handleRemoveStudent(student.prn)}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentModifyPage;




// import React, { useState } from "react";
// import "../styles/StudentModifyPage.css";

// function StudentModifyPage() {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice@example.com" },
//     { prn: "102", name: "Bob Smith", email: "bob@example.com" },
//     { prn: "103", name: "Charlie Brown", email: "charlie@example.com" },
//   ]);

//   const [formData, setFormData] = useState({ prn: "", name: "", email: "" });
//   const [deletePrn, setDeletePrn] = useState(""); // For delete by PRN
//   const [editingPrn, setEditingPrn] = useState(null);
//   const [highlightedRow, setHighlightedRow] = useState(null);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Add a new student
//   const handleAddStudent = () => {
//     if (!formData.prn || !formData.name || !formData.email) {
//       alert("All fields are required!");
//       return;
//     }
//     const studentExists = students.some((student) => student.prn === formData.prn);
//     if (studentExists) {
//       alert("Student with this PRN already exists!");
//       return;
//     }
//     const newStudent = { ...formData };
//     setStudents([...students, newStudent]);
//     setFormData({ prn: "", name: "", email: "" });
//     setHighlightedRow(newStudent.prn);

//     setTimeout(() => setHighlightedRow(null), 1000);
//   };

//   // Remove a student using delete PRN input
//   const handleDeleteByPrn = () => {
//     const studentExists = students.some((student) => student.prn === deletePrn);
//     if (!studentExists) {
//       alert("No student found with this PRN!");
//       return;
//     }
//     setStudents(students.filter((student) => student.prn !== deletePrn));
//     setDeletePrn("");
//   };

//   // Edit a student
//   const handleEditStudent = (prn) => {
//     const studentToEdit = students.find((student) => student.prn === prn);
//     if (studentToEdit) {
//       setFormData(studentToEdit);
//       setEditingPrn(prn);
//     }
//   };

//   // Save modified student details
//   const handleSaveStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editingPrn ? { ...formData } : student
//       )
//     );
//     setFormData({ prn: "", name: "", email: "" });
//     setEditingPrn(null);
//   };

//   return (
//     <div className="student-modify-page">
//       <h3 className="page-title">Student Management</h3>
//       <div className="form-container">
//         <div className="input-group">
//           <input
//             type="text"
//             name="prn"
//             placeholder="PRN"
//             value={formData.prn}
//             onChange={handleInputChange}
//             disabled={!!editingPrn}
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {!editingPrn ? (
//             <button onClick={handleAddStudent}>Add Student</button>
//           ) : (
//             <button onClick={handleSaveStudent}>Save Changes</button>
//           )}
//         </div>
//         <div className="delete-group">
//           <input
//             type="text"
//             placeholder="Delete by PRN"
//             value={deletePrn}
//             onChange={(e) => setDeletePrn(e.target.value)}
//           />
//           <button onClick={handleDeleteByPrn}>Delete</button>
//         </div>
//       </div>
//       <div className="students-list">
//         <h4>Student List</h4>
//         {students.length === 0 ? (
//           <p>No students available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>PRN</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr
//                   key={student.prn}
//                   className={highlightedRow === student.prn ? "highlight" : ""}
//                 >
//                   <td>{student.prn}</td>
//                   <td>{student.name}</td>
//                   <td>{student.email}</td>
//                   <td>
//                     <button onClick={() => handleEditStudent(student.prn)}>
//                       Edit
//                     </button>
//                     <button onClick={() => handleDeleteByPrn(student.prn)}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentModifyPage;





// import React, { useState } from "react";
// import "../styles/StudentModifyPage.css";

// function StudentModifyPage() {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice@example.com" },
//     { prn: "102", name: "Bob Smith", email: "fa@example.com" },
//     { prn: "104", name: "f Brown", email: "sdfd@example.com" },
//     { prn: "105", name: "a Brown", email: "fasg@example.com" },
//     { prn: "106", name: "b Brown", email: "gdsg@example.com" },
//     { prn: "107", name: "c Brown", email: "agh@example.com" },
//     { prn: "108", name: "h Brown", email: "gah@example.com" },

//   ]);

//   const [formData, setFormData] = useState({ prn: "", name: "", email: "" });
//   const [deletePrn, setDeletePrn] = useState("");
//   const [editingPrn, setEditingPrn] = useState(null);
//   const [highlightedRow, setHighlightedRow] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddStudent = () => {
//     if (!formData.prn || !formData.name || !formData.email) {
//       alert("All fields are required!");
//       return;
//     }
//     const studentExists = students.some((student) => student.prn === formData.prn);
//     if (studentExists) {
//       alert("Student with this PRN already exists!");
//       return;
//     }
//     const newStudent = { ...formData };
//     setStudents([...students, newStudent]);
//     setFormData({ prn: "", name: "", email: "" });
//     setHighlightedRow(newStudent.prn);

//     setTimeout(() => setHighlightedRow(null), 1000);
//   };

//   const handleDeleteByPrn = () => {
//     const studentExists = students.some((student) => student.prn === deletePrn);
//     if (!studentExists) {
//       alert("No student found with this PRN!");
//       return;
//     }
//     setStudents(students.filter((student) => student.prn !== deletePrn));
//     setDeletePrn("");
//   };

//   const handleEditStudent = (prn) => {
//     const studentToEdit = students.find((student) => student.prn === prn);
//     if (studentToEdit) {
//       setFormData(studentToEdit);
//       setEditingPrn(prn);
//     }
//   };

//   const handleSaveStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editingPrn ? { ...formData } : student
//       )
//     );
//     setFormData({ prn: "", name: "", email: "" });
//     setEditingPrn(null);
//   };

//   return (
//     <div className="student-modify-page">
//       <h3 className="page-title">Student Management</h3>
//       <div className="form-container">
//         <div className="input-group">
//           <input
//             type="text"
//             name="prn"
//             placeholder="PRN"
//             value={formData.prn}
//             onChange={handleInputChange}
//             disabled={!!editingPrn}
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {!editingPrn ? (
//             <button onClick={handleAddStudent}>Add Student</button>
//           ) : (
//             <button onClick={handleSaveStudent}>Save Changes</button>
//           )}
//         </div>
//         <div className="delete-group">
//           <input
//             type="text"
//             placeholder="Delete by PRN"
//             value={deletePrn}
//             onChange={(e) => setDeletePrn(e.target.value)}
//           />
//           <button onClick={handleDeleteByPrn}>Delete</button>
//         </div>
//       </div>
//       <div className="students-list">
//         <h4>Student List</h4>
//         {students.length === 0 ? (
//           <p>No students available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>PRN</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr
//                   key={student.prn}
//                   className={highlightedRow === student.prn ? "highlight" : ""}
//                 >
//                   <td>{student.prn}</td>
//                   <td>{student.name}</td>
//                   <td>{student.email}</td>
//                   <td>
//                     <button onClick={() => handleEditStudent(student.prn)}>
//                       Edit
//                     </button>
//                     <button onClick={() => handleDeleteByPrn(student.prn)}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentModifyPage;













// import React, { useState } from "react";
// import TablePagination from "@mui/material/TablePagination";
// import "../styles/StudentModifyPage.css";

// function StudentModifyPage() {
//   const [students, setStudents] = useState([
//     { prn: "101", name: "Alice Johnson", email: "alice@example.com" },
//     { prn: "102", name: "Bob Smith", email: "fa@example.com" },
//     { prn: "104", name: "f Brown", email: "sdfd@example.com" },
//     { prn: "105", name: "a Brown", email: "fasg@example.com" },
//     { prn: "106", name: "b Brown", email: "gdsg@example.com" },
//     { prn: "107", name: "c Brown", email: "agh@example.com" },
//     { prn: "108", name: "h Brown", email: "gah@example.com" },
//     { prn: "109", name: "d Brown", email: "example@example.com" },
//     { prn: "110", name: "e Brown", email: "another@example.com" },
//     { prn: "111", name: "g Brown", email: "new@example.com" },
//   ]);

//   const [formData, setFormData] = useState({ prn: "", name: "", email: "" });
//   const [deletePrn, setDeletePrn] = useState("");
//   const [editingPrn, setEditingPrn] = useState(null);
//   const [highlightedRow, setHighlightedRow] = useState(null);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddStudent = () => {
//     if (!formData.prn || !formData.name || !formData.email) {
//       alert("All fields are required!");
//       return;
//     }
//     if (students.some((student) => student.prn === formData.prn)) {
//       alert("Student with this PRN already exists!");
//       return;
//     }
//     const newStudent = { ...formData };
//     setStudents([...students, newStudent]);
//     setFormData({ prn: "", name: "", email: "" });
//     setHighlightedRow(newStudent.prn);
//     setTimeout(() => setHighlightedRow(null), 1000);
//   };

//   const handleDeleteByPrn = () => {
//     if (!students.some((student) => student.prn === deletePrn)) {
//       alert("No student found with this PRN!");
//       return;
//     }
//     setStudents(students.filter((student) => student.prn !== deletePrn));
//     setDeletePrn("");
//   };

//   const handleEditStudent = (prn) => {
//     const studentToEdit = students.find((student) => student.prn === prn);
//     if (studentToEdit) {
//       setFormData(studentToEdit);
//       setEditingPrn(prn);
//     }
//   };

//   const handleSaveStudent = () => {
//     setStudents(
//       students.map((student) =>
//         student.prn === editingPrn ? { ...formData } : student
//       )
//     );
//     setFormData({ prn: "", name: "", email: "" });
//     setEditingPrn(null);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const displayedStudents = students.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <div className="student-modify-page">
//       <h3 className="page-title">Student Management</h3>
//       <div className="form-container">
//         <div className="input-group">
//           <input
//             type="text"
//             name="prn"
//             placeholder="PRN"
//             value={formData.prn}
//             onChange={handleInputChange}
//             disabled={!!editingPrn}
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {!editingPrn ? (
//             <button onClick={handleAddStudent}>Add Student</button>
//           ) : (
//             <button onClick={handleSaveStudent}>Save Changes</button>
//           )}
//         </div>
//         <div className="delete-group">
//           <input
//             type="text"
//             placeholder="Delete by PRN"
//             value={deletePrn}
//             onChange={(e) => setDeletePrn(e.target.value)}
//           />
//           <button onClick={handleDeleteByPrn}>Delete</button>
//         </div>
//       </div>
//       <div className="students-list">
//         <h4>Student List</h4>
//         {students.length === 0 ? (
//           <p>No students available.</p>
//         ) : (
//           <>
//             <table>
//               <thead>
//                 <tr>
//                   <th>PRN</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {displayedStudents.map((student) => (
//                   <tr
//                     key={student.prn}
//                     className={highlightedRow === student.prn ? "highlight" : ""}
//                   >
//                     <td>{student.prn}</td>
//                     <td>{student.name}</td>
//                     <td>{student.email}</td>
//                     <td>
//                       <button onClick={() => handleEditStudent(student.prn)}>
//                         Edit
//                       </button>
//                       <button onClick={() => handleDeleteByPrn(student.prn)}>
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 15]}
//               component="div"
//               count={students.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentModifyPage;







import { useState, useEffect } from "react";
import axios from "axios";
import TablePagination from "@mui/material/TablePagination";
import "../styles/StudentModifyPage.css";

function StudentModifyPage() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ prn: "", name: "", email: "" });
  const [editingPrn, setEditingPrn] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/students/get-all-students", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
        },
      });
      setStudents(response.data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching students:", error);
      alert(`Error fetching students: ${error.response?.data?.message || error.message}`);
    }
  };
  
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddStudent = async () => {
    if (!formData.prn || !formData.name || !formData.email) {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:8081/api/coordinators/add-student", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
          "Content-Type": "application/json",
        },
      });

      alert("Student added successfully!");
      fetchStudents(); // Refresh the list
      setFormData({ prn: "", name: "", email: "" }); // Reset form
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleEditStudent = (prn) => {
    const student = students.find((stud) => stud.prn === prn);
    setFormData(student);
    setEditingPrn(prn);
  };

  const handleSaveStudent = async () => {
    try {
      await axios.put(`http://localhost:8081/api/coordinators/update-student/${editingPrn}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
          "Content-Type": "application/json",
        },
      });

      alert("Student updated successfully!");
      fetchStudents(); // Refresh the list
      setFormData({ prn: "", name: "", email: "" }); // Reset form
      setEditingPrn(null);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleDeleteStudent = async (prn) => {
    try {
      await axios.delete(`http://localhost:8081/api/coordinators/delete-student/${prn}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("studentToken")}` },
      });

      fetchStudents(); // Refresh the list
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const clearForm = () => {
    setFormData({ prn: "", name: "", email: "" });
    setEditingPrn(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedStudents = students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="student-page">
      <div className="content">
        <div className="form-card">
          <h2>{editingPrn ? "Edit Student" : "Add Student"}</h2>
          <form>
            <div className="form-group">
              <label>PRN</label>
              <input
                type="text"
                name="prn"
                placeholder="240840120101"
                value={formData.prn}
                onChange={handleInputChange}
                disabled={!!editingPrn}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Alice Johnson"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="alice@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-actions">
              {editingPrn ? (
                <>
                <button type="button" className="save-btn" onClick={handleSaveStudent}>
                  Save Changes
                </button>
                <button type="button" className="clear-btn" onClick={clearForm}>
                Clear
              </button>
                </>
              ) : (
                <>
                <button type="button" className="add-btn" onClick={handleAddStudent}>
                  Add Student
                </button>
                <button type="button" className="clear-btn" onClick={clearForm}>
                    Clear 
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
        <div className="list-card">
          <h2>Student List</h2>
          {students.length === 0 ? (
            <p className="no-data">No student records available.</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>PRN</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedStudents.map((student) => (
                    <tr key={student.prn}>
                      <td>{student.prn}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>
                        <button className="edit-btn" onClick={() => handleEditStudent(student.prn)}>
                          Edit
                        </button>
                        <button className="delete-btn" onClick={() => handleDeleteStudent(student.prn)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={students.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentModifyPage;