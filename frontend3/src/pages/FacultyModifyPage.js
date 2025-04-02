// import React from 'react'

// function FacultyModifyPage() {
//   return (
//     <div>
//       <h1>Hello FacultyModifyPage page</h1>
//     </div>
//   )
// }

// export default FacultyModifyPage



// import React, { useState } from "react";
// import "../styles/FacultyModifyPage.css";

// function FacultyModifyPage() {
//   const [faculties, setFaculties] = useState([
//     { facultyCode: "F001", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F002", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F003", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//   ]);

//   const [formData, setFormData] = useState({ facultyCode: "", name: "", email: "", dept: "" });
//   const [deleteFacultyCode, setDeleteFacultyCode] = useState("");
//   const [editingFacultyCode, setEditingFacultyCode] = useState(null);
//   const [highlightedRow, setHighlightedRow] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddFaculty = () => {
//     if (!formData.facultyCode || !formData.name || !formData.email || !formData.dept) {
//       alert("All fields are required!");
//       return;
//     }
//     const facultyExists = faculties.some((faculty) => faculty.facultyCode === formData.facultyCode);
//     if (facultyExists) {
//       alert("Faculty with this code already exists!");
//       return;
//     }
//     const newFaculty = { ...formData };
//     setFaculties([...faculties, newFaculty]);
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setHighlightedRow(newFaculty.facultyCode);

//     setTimeout(() => setHighlightedRow(null), 1000);
//   };

//   const handleDeleteByFacultyCode = () => {
//     const facultyExists = faculties.some((faculty) => faculty.facultyCode === deleteFacultyCode);
//     if (!facultyExists) {
//       alert("No faculty found with this code!");
//       return;
//     }
//     setFaculties(faculties.filter((faculty) => faculty.facultyCode !== deleteFacultyCode));
//     setDeleteFacultyCode("");
//   };

//   const handleEditFaculty = (facultyCode) => {
//     const facultyToEdit = faculties.find((faculty) => faculty.facultyCode === facultyCode);
//     if (facultyToEdit) {
//       setFormData(facultyToEdit);
//       setEditingFacultyCode(facultyCode);
//     }
//   };

//   const handleSaveFaculty = () => {
//     setFaculties(
//       faculties.map((faculty) =>
//         faculty.facultyCode === editingFacultyCode ? { ...formData } : faculty
//       )
//     );
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setEditingFacultyCode(null);
//   };

//   return (
//     <div className="faculty-modify-page">
//       <h3 className="page-title">Faculty Management</h3>
//       <div className="form-container">
//         <div className="input-group">
//           <input
//             type="text"
//             name="facultyCode"
//             placeholder="Faculty Code"
//             value={formData.facultyCode}
//             onChange={handleInputChange}
//             disabled={!!editingFacultyCode}
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
//           <input
//             type="text"
//             name="dept"
//             placeholder="Department"
//             value={formData.dept}
//             onChange={handleInputChange}
//           />
//           {!editingFacultyCode ? (
//             <button onClick={handleAddFaculty}>Add Faculty</button>
//           ) : (
//             <button onClick={handleSaveFaculty}>Save Changes</button>
//           )}
//         </div>
//         <div className="delete-group">
//           <input
//             type="text"
//             placeholder="Delete by Faculty Code"
//             value={deleteFacultyCode}
//             onChange={(e) => setDeleteFacultyCode(e.target.value)}
//           />
//           <button onClick={handleDeleteByFacultyCode}>Delete</button>
//         </div>
//       </div>
//       <div className="faculties-list">
//         <h4>Faculty List</h4>
//         {faculties.length === 0 ? (
//           <p>No faculties available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Faculty Code</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Department</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {faculties.map((faculty) => (
//                 <tr
//                   key={faculty.facultyCode}
//                   className={highlightedRow === faculty.facultyCode ? "highlight" : ""}
//                 >
//                   <td>{faculty.facultyCode}</td>
//                   <td>{faculty.name}</td>
//                   <td>{faculty.email}</td>
//                   <td>{faculty.dept}</td>
//                   <td>
//                     <button onClick={() => handleEditFaculty(faculty.facultyCode)}>
//                       Edit
//                     </button>
//                     <button onClick={() => handleDeleteByFacultyCode(faculty.facultyCode)}>
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

// export default FacultyModifyPage;



// working good till here
// import React, { useState } from "react";
// import "../styles/FacultyModifyPage.css";

// function FacultyModifyPage() {
//   const [faculties, setFaculties] = useState([
//     { facultyCode: "F001", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F002", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F003", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//   ]);

//   const [formData, setFormData] = useState({ facultyCode: "", name: "", email: "", dept: "" });
//   const [deleteFacultyCode, setDeleteFacultyCode] = useState("");
//   const [editingFacultyCode, setEditingFacultyCode] = useState(null);
//   const [highlightedRow, setHighlightedRow] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddFaculty = () => {
//     if (!formData.facultyCode || !formData.name || !formData.email || !formData.dept) {
//       alert("All fields are required!");
//       return;
//     }
//     const facultyExists = faculties.some((faculty) => faculty.facultyCode === formData.facultyCode);
//     if (facultyExists) {
//       alert("Faculty with this code already exists!");
//       return;
//     }
//     const newFaculty = { ...formData };
//     setFaculties([...faculties, newFaculty]);
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setHighlightedRow(newFaculty.facultyCode);

//     setTimeout(() => setHighlightedRow(null), 1000);
//   };

//   const handleDeleteByFacultyCode = () => {
//     const facultyExists = faculties.some((faculty) => faculty.facultyCode === deleteFacultyCode);
//     if (!facultyExists) {
//       alert("No faculty found with this code!");
//       return;
//     }
//     setFaculties(faculties.filter((faculty) => faculty.facultyCode !== deleteFacultyCode));
//     setDeleteFacultyCode("");
//   };

//   const handleEditFaculty = (facultyCode) => {
//     const facultyToEdit = faculties.find((faculty) => faculty.facultyCode === facultyCode);
//     if (facultyToEdit) {
//       setFormData(facultyToEdit);
//       setEditingFacultyCode(facultyCode);
//     }
//   };

//   const handleSaveFaculty = () => {
//     setFaculties(
//       faculties.map((faculty) =>
//         faculty.facultyCode === editingFacultyCode ? { ...formData } : faculty
//       )
//     );
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setEditingFacultyCode(null);
//   };

//   return (
//     <div className="faculty-modify-page">
//       <h3 className="page-title">Faculty Management</h3>
//       <div className="form-container">
//         <div className="input-group">
//           <input
//             type="text"
//             name="facultyCode"
//             placeholder="Faculty Code"
//             value={formData.facultyCode}
//             onChange={handleInputChange}
//             disabled={!!editingFacultyCode}
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
//           <input
//             type="text"
//             name="dept"
//             placeholder="Department"
//             value={formData.dept}
//             onChange={handleInputChange}
//           />
//           {!editingFacultyCode ? (
//             <button onClick={handleAddFaculty}>Add Faculty</button>
//           ) : (
//             <button onClick={handleSaveFaculty}>Save Changes</button>
//           )}
//         </div>
//         <div className="delete-group">
//           <input
//             type="text"
//             placeholder="Delete by Faculty Code"
//             value={deleteFacultyCode}
//             onChange={(e) => setDeleteFacultyCode(e.target.value)}
//           />
//           <button onClick={handleDeleteByFacultyCode}>Delete</button>
//         </div>
//       </div>
//       <div className="faculties-list">
//         <h4>Faculty List</h4>
//         {faculties.length === 0 ? (
//           <p>No faculties available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Faculty Code</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Department</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {faculties.map((faculty) => (
//                 <tr
//                   key={faculty.facultyCode}
//                   className={highlightedRow === faculty.facultyCode ? "highlight" : ""}
//                 >
//                   <td>{faculty.facultyCode}</td>
//                   <td>{faculty.name}</td>
//                   <td>{faculty.email}</td>
//                   <td>{faculty.dept}</td>
//                   <td>
//                     <button onClick={() => handleEditFaculty(faculty.facultyCode)}>
//                       Edit
//                     </button>
//                     <button onClick={() => handleDeleteByFacultyCode(faculty.facultyCode)}>
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

// export default FacultyModifyPage;

// working good till here













// import React, { useState } from "react";
// import "../styles/FacultyModifyPage.css";

// function FacultyModifyPage() {
//   const [faculties, setFaculties] = useState([
//     { facultyCode: "F001", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F002", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F003", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//   ]);

//   const [formData, setFormData] = useState({ facultyCode: "", name: "", email: "", dept: "" });
//   const [editingFacultyCode, setEditingFacultyCode] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddFaculty = () => {
//     if (!formData.facultyCode || !formData.name || !formData.email || !formData.dept) {
//       alert("All fields are required!");
//       return;
//     }
//     const facultyExists = faculties.some((faculty) => faculty.facultyCode === formData.facultyCode);
//     if (facultyExists) {
//       alert("Faculty with this code already exists!");
//       return;
//     }
//     setFaculties([...faculties, { ...formData }]);
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//   };

//   const handleEditFaculty = (facultyCode) => {
//     const faculty = faculties.find((fac) => fac.facultyCode === facultyCode);
//     setFormData(faculty);
//     setEditingFacultyCode(facultyCode);
//   };

//   const handleSaveFaculty = () => {
//     setFaculties(faculties.map((faculty) => (
//       faculty.facultyCode === editingFacultyCode ? { ...formData } : faculty
//     )));
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setEditingFacultyCode(null);
//   };

//   const handleDeleteFaculty = (facultyCode) => {
//     setFaculties(faculties.filter((faculty) => faculty.facultyCode !== facultyCode));
//   };

//   return (
//     <div className="faculty-page">
//       <div className="tabs">
//         <button className="active-tab">Faculty Management</button>
//         <button>Statistics</button>
//         <button>Settings</button>
//       </div>
//       <div className="content">
//         <div className="form-card">
//           <h2>{editingFacultyCode ? "Edit Faculty" : "Add Faculty"}</h2>
//           <form>
//             <div className="form-group">
//               <label>Faculty Code</label>
//               <input
//                 type="text"
//                 name="facultyCode"
//                 placeholder="E.g., F004"
//                 value={formData.facultyCode}
//                 onChange={handleInputChange}
//                 disabled={!!editingFacultyCode}
//               />
//             </div>
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="E.g., Dr. Jane Doe"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="E.g., jane@univ.com"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Department</label>
//               <input
//                 type="text"
//                 name="dept"
//                 placeholder="E.g., Biology"
//                 value={formData.dept}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-actions">
//               {editingFacultyCode ? (
//                 <button type="button" className="save-btn" onClick={handleSaveFaculty}>
//                   Save Changes
//                 </button>
//               ) : (
//                 <button type="button" className="add-btn" onClick={handleAddFaculty}>
//                   Add Faculty
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="list-card">
//           <h2>Faculty List</h2>
//           {faculties.length === 0 ? (
//             <p className="no-data">No faculty records available.</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Faculty Code</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Department</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {faculties.map((faculty) => (
//                   <tr key={faculty.facultyCode}>
//                     <td>{faculty.facultyCode}</td>
//                     <td>{faculty.name}</td>
//                     <td>{faculty.email}</td>
//                     <td>{faculty.dept}</td>
//                     <td>
//                       <button className="edit-btn" onClick={() => handleEditFaculty(faculty.facultyCode)}>
//                         Edit
//                       </button>
//                       <button className="delete-btn" onClick={() => handleDeleteFaculty(faculty.facultyCode)}>
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FacultyModifyPage;






















// import React, { useState } from "react";
// import "../styles/FacultyModifyPage.css";

// function FacultyModifyPage() {
//   const [faculties, setFaculties] = useState([
//     { facultyCode: "F001", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F002", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F003", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//   ]);

//   const [formData, setFormData] = useState({ facultyCode: "", name: "", email: "", dept: "" });
//   const [editingFacultyCode, setEditingFacultyCode] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddFaculty = () => {
//     if (!formData.facultyCode || !formData.name || !formData.email || !formData.dept) return alert("All fields are required!");
//     if (faculties.some((faculty) => faculty.facultyCode === formData.facultyCode)) return alert("Faculty with this code already exists!");
//     setFaculties([...faculties, { ...formData }]);
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//   };

//   const handleEditFaculty = (facultyCode) => {
//     const faculty = faculties.find((fac) => fac.facultyCode === facultyCode);
//     setFormData(faculty);
//     setEditingFacultyCode(facultyCode);
//   };

//   const handleSaveFaculty = () => {
//     setFaculties(faculties.map((faculty) => (faculty.facultyCode === editingFacultyCode ? { ...formData } : faculty)));
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setEditingFacultyCode(null);
//   };

//   const handleDeleteFaculty = (facultyCode) => {
//     setFaculties(faculties.filter((faculty) => faculty.facultyCode !== facultyCode));
//   };

//   return (
//     <div className="faculty-page">
//       <div className="tabs">
//         <button className="active-tab">Faculty Management</button>
//         <button>Statistics</button>
//         <button>Settings</button>
//       </div>
//       <div className="content">
//         <div className="form-card">
//           <h2>{editingFacultyCode ? "Edit Faculty" : "Add Faculty"}</h2>
//           <form>
//             <div className="form-group">
//               <label>Faculty Code</label>
//               <input
//                 type="text"
//                 name="facultyCode"
//                 placeholder="E.g., F004"
//                 value={formData.facultyCode}
//                 onChange={handleInputChange}
//                 disabled={!!editingFacultyCode}
//               />
//             </div>
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="E.g., Dr. Jane Doe"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="E.g., jane@univ.com"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Department</label>
//               <input
//                 type="text"
//                 name="dept"
//                 placeholder="E.g., Biology"
//                 value={formData.dept}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-actions">
//               {editingFacultyCode ? (
//                 <button type="button" className="save-btn" onClick={handleSaveFaculty}>
//                   Save Changes
//                 </button>
//               ) : (
//                 <button type="button" className="add-btn" onClick={handleAddFaculty}>
//                   Add Faculty
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="list-card">
//           <h2>Faculty List</h2>
//           {faculties.length === 0 ? (
//             <p className="no-data">No faculty records available.</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Faculty Code</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Department</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {faculties.map((faculty) => (
//                   <tr key={faculty.facultyCode}>
//                     <td>{faculty.facultyCode}</td>
//                     <td>{faculty.name}</td>
//                     <td>{faculty.email}</td>
//                     <td>{faculty.dept}</td>
//                     <td>
//                       <button className="edit-btn" onClick={() => handleEditFaculty(faculty.facultyCode)}>
//                         Edit
//                       </button>
//                       <button className="delete-btn" onClick={() => handleDeleteFaculty(faculty.facultyCode)}>
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FacultyModifyPage;











// import React, { useState } from "react";
// import "../styles/FacultyModifyPage.css";

// function FacultyModifyPage() {
//   const [faculties, setFaculties] = useState([
//     { facultyCode: "F001", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F002", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F003", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//     { facultyCode: "F004", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F005", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F006", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//     { facultyCode: "F007", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F008", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F009", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//   ]);

//   const [formData, setFormData] = useState({ facultyCode: "", name: "", email: "", dept: "" });
//   const [editingFacultyCode, setEditingFacultyCode] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddFaculty = () => {
//     if (!formData.facultyCode || !formData.name || !formData.email || !formData.dept) return alert("All fields are required!");
//     if (faculties.some((faculty) => faculty.facultyCode === formData.facultyCode)) return alert("Faculty with this code already exists!");
//     setFaculties([...faculties, { ...formData }]);
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//   };

//   const handleEditFaculty = (facultyCode) => {
//     const faculty = faculties.find((fac) => fac.facultyCode === facultyCode);
//     setFormData(faculty);
//     setEditingFacultyCode(facultyCode);
//   };

//   const handleSaveFaculty = () => {
//     setFaculties(faculties.map((faculty) => (faculty.facultyCode === editingFacultyCode ? { ...formData } : faculty)));
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setEditingFacultyCode(null);
//   };

//   const handleDeleteFaculty = (facultyCode) => {
//     setFaculties(faculties.filter((faculty) => faculty.facultyCode !== facultyCode));
//   };

//   return (
//     <div className="faculty-page">
//       <div className="tabs">
//         <button className="active-tab">Faculty Management</button>
//         <button>Statistics</button>
//         <button>Settings</button>
//       </div>
//       <div className="content">
//         <div className="form-card">
//           <h2>{editingFacultyCode ? "Edit Faculty" : "Add Faculty"}</h2>
//           <form>
//             <div className="form-group">
//               <label>Faculty Code</label>
//               <input
//                 type="text"
//                 name="facultyCode"
//                 placeholder="E.g., F004"
//                 value={formData.facultyCode}
//                 onChange={handleInputChange}
//                 disabled={!!editingFacultyCode}
//               />
//             </div>
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="E.g., Dr. Jane Doe"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="E.g., jane@univ.com"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Department</label>
//               <input
//                 type="text"
//                 name="dept"
//                 placeholder="E.g., Biology"
//                 value={formData.dept}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-actions">
//               {editingFacultyCode ? (
//                 <button type="button" className="save-btn" onClick={handleSaveFaculty}>
//                   Save Changes
//                 </button>
//               ) : (
//                 <button type="button" className="add-btn" onClick={handleAddFaculty}>
//                   Add Faculty
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="list-card">
//           <h2>Faculty List</h2>
//           {faculties.length === 0 ? (
//             <p className="no-data">No faculty records available.</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Faculty Code</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Department</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {faculties.map((faculty) => (
//                   <tr key={faculty.facultyCode}>
//                     <td>{faculty.facultyCode}</td>
//                     <td>{faculty.name}</td>
//                     <td>{faculty.email}</td>
//                     <td>{faculty.dept}</td>
//                     <td>
//                       <button className="edit-btn" onClick={() => handleEditFaculty(faculty.facultyCode)}>
//                         Edit
//                       </button>
//                       <button className="delete-btn" onClick={() => handleDeleteFaculty(faculty.facultyCode)}>
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FacultyModifyPage;











// import React, { useState } from "react";
// import TablePagination from "@mui/material/TablePagination";
// import "../styles/FacultyModifyPage.css";

// function FacultyModifyPage() {
//   const [faculties, setFaculties] = useState([
//     { facultyCode: "F001", name: "Dr. Alice Johnson", email: "alice@univ.com", dept: "Physics" },
//     { facultyCode: "F002", name: "Dr. Bob Smith", email: "bob@univ.com", dept: "Mathematics" },
//     { facultyCode: "F003", name: "Dr. Charlie Brown", email: "charlie@univ.com", dept: "Chemistry" },
//     { facultyCode: "F004", name: "Dr. Diana Prince", email: "diana@univ.com", dept: "History" },
//     { facultyCode: "F005", name: "Dr. Bruce Wayne", email: "bruce@univ.com", dept: "Engineering" },
//     { facultyCode: "F006", name: "Dr. Clark Kent", email: "clark@univ.com", dept: "Journalism" },
//     { facultyCode: "F007", name: "Dr. Barry Allen", email: "barry@univ.com", dept: "Physics" },
//     { facultyCode: "F008", name: "Dr. Hal Jordan", email: "hal@univ.com", dept: "Astronomy" },
//     { facultyCode: "F009", name: "Dr. Arthur Curry", email: "arthur@univ.com", dept: "Marine Biology" },
//     { facultyCode: "F010", name: "Dr. Victor Stone", email: "victor@univ.com", dept: "Computer Science" },
//     { facultyCode: "F011", name: "Dr. John Stewart", email: "john@univ.com", dept: "Physics" },
//   ]);

//   const [formData, setFormData] = useState({ facultyCode: "", name: "", email: "", dept: "" });
//   const [editingFacultyCode, setEditingFacultyCode] = useState(null);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddFaculty = () => {
//     if (!formData.facultyCode || !formData.name || !formData.email || !formData.dept) return alert("All fields are required!");
//     if (faculties.some((faculty) => faculty.facultyCode === formData.facultyCode)) return alert("Faculty with this code already exists!");
//     setFaculties([...faculties, { ...formData }]);
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//   };

//   const handleEditFaculty = (facultyCode) => {
//     const faculty = faculties.find((fac) => fac.facultyCode === facultyCode);
//     setFormData(faculty);
//     setEditingFacultyCode(facultyCode);
//   };

//   const handleSaveFaculty = () => {
//     setFaculties(faculties.map((faculty) => (faculty.facultyCode === editingFacultyCode ? { ...formData } : faculty)));
//     setFormData({ facultyCode: "", name: "", email: "", dept: "" });
//     setEditingFacultyCode(null);
//   };

//   const handleDeleteFaculty = (facultyCode) => {
//     setFaculties(faculties.filter((faculty) => faculty.facultyCode !== facultyCode));
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const displayedFaculties = faculties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <div className="faculty-page">
//       <div className="content">
//         <div className="form-card">
//           <h2>{editingFacultyCode ? "Edit Faculty" : "Add Faculty"}</h2>
//           <form>
//             <div className="form-group">
//               <label>Faculty Code</label>
//               <input
//                 type="text"
//                 name="facultyCode"
//                 placeholder="E.g., F012"
//                 value={formData.facultyCode}
//                 onChange={handleInputChange}
//                 disabled={!!editingFacultyCode}
//               />
//             </div>
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="E.g., Dr. Jane Doe"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="E.g., jane@univ.com"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Department</label>
//               <input
//                 type="text"
//                 name="dept"
//                 placeholder="E.g., Biology"
//                 value={formData.dept}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-actions">
//               {editingFacultyCode ? (
//                 <button type="button" className="save-btn" onClick={handleSaveFaculty}>
//                   Save Changes
//                 </button>
//               ) : (
//                 <button type="button" className="add-btn" onClick={handleAddFaculty}>
//                   Add Faculty
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="list-card">
//           <h2>Faculty List</h2>
//           {faculties.length === 0 ? (
//             <p className="no-data">No faculty records available.</p>
//           ) : (
//             <>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Faculty Code</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Department</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {displayedFaculties.map((faculty) => (
//                     <tr key={faculty.facultyCode}>
//                       <td>{faculty.facultyCode}</td>
//                       <td>{faculty.name}</td>
//                       <td>{faculty.email}</td>
//                       <td>{faculty.dept}</td>
//                       <td>
//                         <button className="edit-btn" onClick={() => handleEditFaculty(faculty.facultyCode)}>
//                           Edit
//                         </button>
//                         <button className="delete-btn" onClick={() => handleDeleteFaculty(faculty.facultyCode)}>
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 15]}
//                 component="div"
//                 count={faculties.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FacultyModifyPage;
















import { useState, useEffect } from "react";
import axios from "axios";
import TablePagination from "@mui/material/TablePagination";
import "../styles/FacultyModifyPage.css";

function FacultyModifyPage() {
  const [faculties, setFaculties] = useState([]);
  const [formData, setFormData] = useState({ facultyCode: "", name: "", email: "", dept: "" });
  const [editingFacultyCode, setEditingFacultyCode] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  // Fetch faculties on component mount
  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/faculty/get-all-faculties", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
        },
      });
      setFaculties(response.data);
    } catch (error) {
      console.error("Error fetching faculties:", error);
      alert(`Error fetching faculties: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddFaculty = async () => {
    if (!formData.facultyCode || !formData.name || !formData.email || !formData.dept) {
      alert("All fields are required!");
      return;
    }
    try {
      const addFacultyRequest = {
        facultyCode: formData.facultyCode,
        name: formData.name,
        email: formData.email,
        department: formData.dept, // Backend expects "department"
      };

      const response = await axios.post(
        "http://localhost:8081/api/coordinators/add-faculty",
        addFacultyRequest,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Add Faculty Response:", response.data);
      alert("Faculty added successfully!");
      fetchFaculties(); // Refresh the list
      setFormData({ facultyCode: "", name: "", email: "", dept: "" }); // Reset form
    } catch (error) {
      console.error("Error adding faculty:", error);

      // Handle errors gracefully
      const errorMessage = error.response?.data || "An unexpected error occurred.";
      // alert(`Error adding faculty: ${errorMessage}`);
    }
  };

  const handleEditFaculty = (facultyCode) => {
    const faculty = faculties.find((fac) => fac.facultyCode === facultyCode);
    //setFormData(faculty);
    setFormData({
      facultyCode: faculty.facultyCode,
      name: faculty.name,
      email: faculty.email,
      dept: faculty.department // Map department to dept
    });
    setEditingFacultyCode(facultyCode);
  };

  const handleSaveFaculty = async () => {
    try {
      const updateFacultyRequest = {
        facultyCode: formData.facultyCode,
        name: formData.name,
        email: formData.email,
        department: formData.dept, // Backend expects "department"
      };

      await axios.put(
        `http://localhost:8081/api/coordinators/update-faculty/${editingFacultyCode}`,
        updateFacultyRequest,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Faculty updated successfully!");
      fetchFaculties(); // Refresh the list
      setFormData({ facultyCode: "", name: "", email: "", dept: "" }); // Reset form
      setEditingFacultyCode(null);
    } catch (error) {
      console.error("Error updating faculty:", error);
      const errorMessage = error.response?.data || "An unexpected error occurred.";
      // alert(`Error updating faculty: ${errorMessage}`);
    }
  };

  const handleDeleteFaculty = async (facultyCode) => {
    try {
      await axios.delete(`http://localhost:8081/api/coordinators/delete-faculty/${facultyCode}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
        },
      });

      // alert("Faculty deleted successfully!");
      fetchFaculties(); // Refresh the list
    } catch (error) {
      console.error("Error deleting faculty:", error);
      const errorMessage = error.response?.data || "An unexpected error occurred.";
      // alert(`Error deleting faculty: ${errorMessage}`);
    }
  };

  const clearForm = () => {
    setFormData({ facultyCode: "", name: "", email: "" ,dept:""});
    setEditingFacultyCode(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedFaculties = faculties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="faculty-page">
      <div className="content">
        <div className="form-card">
          <h2>{editingFacultyCode ? "Edit Faculty" : "Add Faculty"}</h2>
          <form>
            <div className="form-group">
              <label>Faculty Code</label>
              <input
                type="text"
                name="facultyCode"
                placeholder="F012"
                value={formData.facultyCode}
                onChange={handleInputChange}
                disabled={!!editingFacultyCode}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Dr. Jane Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="jane@univ.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                name="dept"
                placeholder="DAC"
                value={formData.dept}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-actions">
              {editingFacultyCode ? (
                <>
                <button type="button" className="save-btn" onClick={handleSaveFaculty}>
                  Save Changes
                </button>
                <button type="button" className="clear-btn" onClick={clearForm}>
                Clear
              </button>
              </>
              ) : (
                <>
                <button type="button" className="add-btn" onClick={handleAddFaculty}>
                  Add Faculty
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
          <h2>Faculty List</h2>
          {faculties.length === 0 ? (
            <p className="no-data">No faculty records available.</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Faculty Code</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedFaculties.map((faculty) => (
                    <tr key={faculty.facultyCode}>
                      <td>{faculty.facultyCode}</td>
                      <td>{faculty.name}</td>
                      <td>{faculty.email}</td>
                      <td>{faculty.department}</td>

                      <td>
                        <button className="edit-btn" onClick={() => handleEditFaculty(faculty.facultyCode)}>
                          Edit
                        </button>
                        <button className="delete-btn" onClick={() => handleDeleteFaculty(faculty.facultyCode)}>
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
                count={faculties.length}
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

export default FacultyModifyPage;


