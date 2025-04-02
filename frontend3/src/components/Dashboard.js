// // Assuming you have React and Material-UI installed
// // Install necessary packages: @mui/material @emotion/react @emotion/styled recharts react-qr-reader

// import React from 'react';
// import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, Button, Card, CardContent, Grid } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const drawerWidth = 240;

// const Dashboard = ({ studentName = "Student", attendanceData = { total: 0, present: 0, subjects: [] }, handleLogout }) => {
//   const [selectedPage, setSelectedPage] = useState('home');
//   const [qrResult, setQrResult] = useState(null);

//   const handleScan = (result) => {
//     if (result?.text) {
//       setQrResult(result.text);
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           alert(`QR Code: ${result.text}\nLocation: Latitude ${latitude}, Longitude ${longitude}`);
//         },
//         (error) => {
//           alert('Unable to fetch location. Please enable location services.');
//         }
//       );
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//     alert('Error scanning QR Code.');
//   };

//   const totalAttendance = attendanceData.total || 0;
//   const percentagePresent = totalAttendance > 0 ? (attendanceData.present / totalAttendance) * 100 : 0;
//   const percentageAbsent = 100 - percentagePresent;

//   const barData = attendanceData.subjects || [];
//   const pieData = [
//     { name: 'Present', value: percentagePresent },
//     { name: 'Absent', value: percentageAbsent },
//   ];
//   const colors = ['#4caf50', '#f44336'];

//   const renderHome = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>Welcome, {studentName}</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Total Attendance</Typography>
//               <Typography variant="h5">{totalAttendance}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Percentage Present</Typography>
//               <Typography variant="h5">{percentagePresent.toFixed(2)}%</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Percentage Absent</Typography>
//               <Typography variant="h5">{percentageAbsent.toFixed(2)}%</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Total Subjects</Typography>
//               <Typography variant="h5">{barData.length}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Box mt={4}>
//         <Typography variant="h6">Attendance Overview</Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8}>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={barData}>
//                 <XAxis dataKey="subject" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="attendance" fill="#3f51b5" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={colors[index]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );

//   const renderViewAttendance = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h6">View Attendance</Typography>
//       <Box mt={2}>
//         <label>
//           Subject: <input type="text" placeholder="Enter subject" />
//         </label>
//         <label>
//           Date: <input type="date" />
//         </label>
//         <Button variant="contained" color="primary">Fetch Attendance</Button>
//       </Box>
//     </Box>
//   );

//   const renderQRCodeScanner = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h6">Scan QR Code</Typography>
//       <Box mt={2} sx={{ width: '100%', maxWidth: 400 }}>
//         <QrReader
//           constraints={{
//             facingMode: { ideal: 'environment' }, // Ensures rear camera is prioritized
//           }}
//           onResult={(result, error) => {
//             if (result) handleScan(result);
//             if (error) handleError(error);
//           }}
//           style={{ width: '100%' }}
//         />
//         {qrResult && <Typography variant="body1">Scanned QR Code: {qrResult}</Typography>}
//       </Box>
//     </Box>
//   );
  

//   const renderContent = () => {
//     switch (selectedPage) {
//       case 'home':
//         return renderHome();
//       case 'viewAttendance':
//         return renderViewAttendance();
//       case 'scanQRCode':
//         return renderQRCodeScanner();
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Typography variant="h5" sx={{ p: 2 }}>ScaNMark</Typography>
//         <List>
//           <ListItem button={true} onClick={() => setSelectedPage('home')}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button={true} onClick={() => setSelectedPage('viewAttendance')}>
//             <ListItemText primary="View Attendance" />
//           </ListItem>
//           <ListItem button={true} onClick={() => setSelectedPage('scanQRCode')}>
//             <ListItemText primary="Scan QR Code" />
//           </ListItem>
//           <ListItem button={true} onClick={handleLogout}>
//             <ListItemText primary="Logout" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6">{selectedPage === 'home' ? 'Dashboard' : selectedPage}</Typography>
//           </Toolbar>
//         </AppBar>
//         {renderContent()}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, Button, Card, CardContent, Grid } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library'; // Importing from @zxing/library

// const drawerWidth = 240;

// const Dashboard = ({ studentName = "Student", attendanceData = { total: 0, present: 0, subjects: [] }, handleLogout }) => {
//   const [selectedPage, setSelectedPage] = useState('home');
//   const [qrResult, setQrResult] = useState(null);
//   const [scanner, setScanner] = useState(null);  // For the ZXing scanner instance
//   const [videoStream, setVideoStream] = useState(null);  // To store the video stream

//   // Handle the QR code scan result
//   const handleScan = (result) => {
//     if (result?.text) {
//       setQrResult(result.text);
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           alert(`QR Code: ${result.text}\nLocation: Latitude ${latitude}, Longitude ${longitude}`);
//         },
//         (error) => {
//           alert('Unable to fetch location. Please enable location services.');
//         }
//       );
//     }
//   };

//   // Handle errors
//   const handleError = (error) => {
//     console.error(error);
//     alert('Error scanning QR Code.');
//   };

//   // Initialize scanner and start video stream on component mount
//   useEffect(() => {
//     const codeReader = new BrowserMultiFormatReader();
//     setScanner(codeReader);

//     return () => {
//       // Cleanup: stop video stream on unmount
//       if (videoStream) {
//         const tracks = videoStream.getTracks();
//         tracks.forEach(track => track.stop());
//       }
//     };
//   }, [videoStream]);

//   // Start the scanner and open the camera
//   const startScanner = () => {
//     if (scanner) {
//       scanner
//         .decodeFromVideoDevice(undefined, 'video', (result, error) => {
//           if (result) {
//             handleScan(result); // Handle successful scan
//           }
//           if (error instanceof NotFoundException) {
//             // Handle not found error
//           }
//         })
//         .then((videoStream) => {
//           setVideoStream(videoStream); // Set the video stream for cleanup
//         })
//         .catch(handleError);
//     }
//   };

//   const totalAttendance = attendanceData.total || 0;
//   const percentagePresent = totalAttendance > 0 ? (attendanceData.present / totalAttendance) * 100 : 0;
//   const percentageAbsent = 100 - percentagePresent;

//   const barData = attendanceData.subjects || [];
//   const pieData = [
//     { name: 'Present', value: percentagePresent },
//     { name: 'Absent', value: percentageAbsent },
//   ];
//   const colors = ['#4caf50', '#f44336'];

//   const renderHome = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>Welcome, {studentName}</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Total Attendance</Typography>
//               <Typography variant="h5">{totalAttendance}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Percentage Present</Typography>
//               <Typography variant="h5">{percentagePresent.toFixed(2)}%</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Percentage Absent</Typography>
//               <Typography variant="h5">{percentageAbsent.toFixed(2)}%</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Total Subjects</Typography>
//               <Typography variant="h5">{barData.length}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Box mt={4}>
//         <Typography variant="h6">Attendance Overview</Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8}>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={barData}>
//                 <XAxis dataKey="subject" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="attendance" fill="#3f51b5" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={colors[index]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );

//   const renderViewAttendance = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h6">View Attendance</Typography>
//       <Box mt={2}>
//         <label>
//           Subject: <input type="text" placeholder="Enter subject" />
//         </label>
//         <label>
//           Date: <input type="date" />
//         </label>
//         <Button variant="contained" color="primary">Fetch Attendance</Button>
//       </Box>
//     </Box>
//   );

//   const renderQRCodeScanner = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h6">Scan QR Code</Typography>
//       <Box mt={2} sx={{ width: '100%', maxWidth: 400 }}>
//         <video id="video" width="100%" style={{ maxWidth: '400px' }} />
//         <Button variant="contained" color="primary" onClick={startScanner}>Start Scanner</Button>
//         {qrResult && <Typography variant="body1">Scanned QR Code: {qrResult}</Typography>}
//       </Box>
//     </Box>
//   );

//   const renderContent = () => {
//     switch (selectedPage) {
//       case 'home':
//         return renderHome();
//       case 'viewAttendance':
//         return renderViewAttendance();
//       case 'scanQRCode':
//         return renderQRCodeScanner();
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Typography variant="h5" sx={{ p: 2 }}>ScaNMark</Typography>
//         <List>
//           <ListItem button={true} onClick={() => setSelectedPage('home')}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button={true} onClick={() => setSelectedPage('viewAttendance')}>
//             <ListItemText primary="View Attendance" />
//           </ListItem>
//           <ListItem button={true} onClick={() => setSelectedPage('scanQRCode')}>
//             <ListItemText primary="Scan QR Code" />
//           </ListItem>
//           <ListItem button={true} onClick={handleLogout}>
//             <ListItemText primary="Logout" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6">{selectedPage === 'home' ? 'Dashboard' : selectedPage}</Typography>
//           </Toolbar>
//         </AppBar>
//         {renderContent()}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell ,Tooltip} from 'recharts';
// import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText,ListItemIcon, Button, Card, CardContent, Grid, IconButton,Collapse } from '@mui/material';
// import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library'; // Importing from @zxing/library
// import {Menu as MenuIcon,ChevronLeft as ChevronLeftIcon,} from '@mui/icons-material';
// import { Home, QrCodeScanner, School, AccountCircle, Logout, Menu, MenuOpen } from '@mui/icons-material';
// // import studentbg from '../images/studentbg.jpg';
// import Lottie from 'react-lottie-player';
// import studentAnimation from '../animations/scan.json';

// const drawerWidthExpanded = 240;
// const drawerWidthCollapsed = 60;


// const Dashboard = ({ studentName = "Nisha Patil", attendanceData = { total: 0, present: 0, subjects: [] }, handleLogout }) => {
//   const [selectedPage, setSelectedPage] = useState('home');
//   const [qrResult, setQrResult] = useState(null);
//   const [scanner, setScanner] = useState(null); // For the ZXing scanner instance
//   const [videoStream, setVideoStream] = useState(null); // To store the video stream
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
//   const [attendanceMessage, setAttendanceMessage] = useState('');

//   const toggleDrawer = () => {
//     setIsDrawerOpen((prev) => !prev);
//   };
//   // Handle the QR code scan result
//   // const handleScan = (result) => {
//   //   if (result?.text) {
//   //     setQrResult(result.text);
//   //     navigator.geolocation.getCurrentPosition(
//   //       (position) => {
//   //         const { latitude, longitude } = position.coords;
//   //         alert(`QR Code: ${result.text}\nLocation: Latitude ${latitude}, Longitude ${longitude}`);
//   //       },
//   //       (error) => {
//   //         alert('Unable to fetch location. Please enable location services.');
//   //       }
//   //     );
//   //   }
//   // };

//   // const handleScan = (result) => {
//   //   if (result?.text) {
//   //     setQrResult(result.text); // Store the scanned QR code

//   //     navigator.geolocation.getCurrentPosition(
//   //       (position) => {
//   //         const { latitude, longitude } = position.coords;
//   //         console.log(latitude);
//   //         // Send QR code and location to backend for attendance marking
//   //         markAttendance(result.text, latitude, longitude);
//   //       },
//   //       (error) => {
//   //         alert('Unable to fetch location. Please enable location services.');
//   //       }
//   //     );
//   //   }
//   // };

//   // //Function to mark attendance by sending data to the backend
//   // const markAttendance = async (qrCode, latitude, longitude) => {
//   //   try {
//   //     const response = await fetch('http://localhost:8081/api/attendance/mark-attendance', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({
//   //         qrCode,
//   //         latitude,
//   //         longitude,
//   //       }),
//   //     });

//   //     const data = await response.json();

//   //     if (data.success) {
//   //       setAttendanceMessage('Attendance marked successfully!');
//   //     } else {
//   //       setAttendanceMessage('Failed to mark attendance. Please try again.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error marking attendance:', error);
//   //     setAttendanceMessage('An error occurred while marking attendance.');
//   //   }
//   // };

//   const handleScan = (result) => {
//     if (result?.text) {
//       console.log("✅ Scanned QR Data:", result.text);
  
//       // Extract lectureId from QR code
//       const qrParts = result.text.split("|");
//       if (qrParts.length < 4) {  // Check if QR has enough parts
//         setAttendanceMessage("❌ Invalid QR Code");
//         return;
//       }
  
//       const lectureId = qrParts[0];  // Extract lectureId
//       const signedQrContent = result.text;  // Use full scanned QR content
  
//       // Mock student PRN (fetch dynamically in a real app)
//       const studentPrn = "240840120161";
  
//       // Get Student's Location
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log("📍 Location:", { latitude, longitude });
  
//           // Send Attendance Data to Backend
//           markAttendance(lectureId, signedQrContent, latitude, longitude, studentPrn);
//         },
//         (error) => {
//           console.error("❌ Location Error:", error.message);
//           setAttendanceMessage("⚠️ Location access is required to mark attendance.");
//         }
//       );
//     }
//   };
  
//   const markAttendance = async (lectureId, signedQrContent, latitude, longitude, studentPrn) => {
//     try {
//       const response = await fetch("http://localhost:8081/api/attendance/mark-attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({
//           lectureId,
//           signedQrContent,
//           latitude: latitude.toString(),  // Ensure string format
//           longitude: longitude.toString(), // Ensure string format
//           studentPrn
//         }),
//       });
  
//       const data = await response.json();
//       console.log("📥 Backend Response:", data);  // Debugging
  
//       if (data.success) {
//         setAttendanceMessage("✅ Attendance marked successfully!");
//       } else {
//         setAttendanceMessage(`❌ Failed: ${data.error || "Unknown error"}`);
//       }
//     } catch (error) {
//       console.error("❌ Error marking attendance:", error);
//       setAttendanceMessage("❌ An error occurred while marking attendance.");
//     }
//   };
  


//   // Handle errors
//   const handleError = (error) => {
//     console.error(error);
//     alert('Error scanning QR Code.');
//   };

//   // Check and request camera permissions
//   const checkCameraPermissions = async () => {
//     try {
//       const permission = await navigator.permissions.query({ name: 'camera' });
//       if (permission.state === 'denied') {
//         alert('Camera access is denied. Please enable it in your browser settings.');
//       }
//     } catch (err) {
//       console.error('Permission API not supported', err);
//     }
//   };

//   // Initialize scanner and start video stream on component mount
//   // useEffect(() => {
//   //   checkCameraPermissions();
//   //   const codeReader = new BrowserMultiFormatReader();
//   //   setScanner(codeReader);

//   //   return () => {
//   //     // Cleanup: stop video stream on unmount
//   //     if (videoStream) {
//   //       const tracks = videoStream.getTracks();
//   //       tracks.forEach((track) => track.stop());
//   //     }
//   //   };
//   // }, [videoStream]);

//   useEffect(() => {
//     checkCameraPermissions();
//     setScanner(new BrowserMultiFormatReader()); // Initialize scanner only once
  
//     return () => {
//       if (videoStream) {
//         videoStream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   // Start the scanner and open the camera
//   // const startScanner = () => {
//   //   if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//   //     alert('Camera access is not supported in your browser. Please try a modern browser like Chrome or Safari.');
//   //     return;
//   //   }

//   //   const constraints = {
//   //     video: { facingMode: 'environment' }, // Use the back camera
//   //   };

//   //   if (scanner) {
//   //     scanner
//   //       .decodeFromVideoDevice(
//   //         null,
//   //         'video',
//   //         (result, error) => {
//   //           if (result) {
//   //             handleScan(result); // Handle successful scan
//   //           }
//   //           if (error instanceof NotFoundException) {
//   //             console.log('No QR code found'); // Ignore not found errors
//   //           }
//   //         },
//   //         constraints
//   //       )
//   //       .then((videoStream) => setVideoStream(videoStream))
//   //       .catch((error) => {
//   //         console.error('Camera error:', error);
//   //         alert('Unable to access the camera. Please check your permissions.');
//   //       });
//   //   }
//   // };

//   const startScanner = async () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       alert('Camera access is not supported in your browser.');
//       return;
//     }
  
//     try {
//       const constraints = { video: { facingMode: 'environment' } };
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       setVideoStream(stream); // Store the stream
  
//       if (scanner) {
//         scanner.decodeFromVideoDevice(null, 'video', (result, error) => {
//           if (result) handleScan(result);
//           if (error instanceof NotFoundException) console.log('No QR code found');
//         });
//       }
//     } catch (error) {
//       console.error('Camera error:', error);
//       alert('Unable to access the camera.');
//     }
//   };
  

//   const totalAttendance = attendanceData.total || 0;
//   const percentagePresent = totalAttendance > 0 ? (attendanceData.present / totalAttendance) * 100 : 0;
//   const percentageAbsent = 100 - percentagePresent;

//   const barData = attendanceData.subjects || [];
//   const pieData = [
//     { name: 'Present', value: percentagePresent },
//     { name: 'Absent', value: percentageAbsent },
//   ];
//   const colors = ['#4caf50', '#f44336'];

//   const renderHome = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>Welcome, {studentName}</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Total Attendance</Typography>
//               <Typography variant="h5">{totalAttendance}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Percentage Present</Typography>
//               <Typography variant="h5">{percentagePresent.toFixed(2)}%</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Percentage Absent</Typography>
//               <Typography variant="h5">{percentageAbsent.toFixed(2)}%</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography>Total Subjects</Typography>
//               <Typography variant="h5">{barData.length}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* <Box mt={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <img
//           src={studentbg} // Replace with your image URL
//           alt="Example Image"
//           style={{ width: '100%', maxWidth: '700px', borderRadius: '8px' }} // Adjust styles as needed
//         />
//       </Box> */}
//        <Box mt={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Lottie
//         loop
//         animationData={studentAnimation}
//         play
//         style={{ width: 400, height: 300 }} // Adjust size as needed
//       />
//     </Box>
//     </Box>
//   );

//   const renderQRCodeScanner = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h6">Scan QR Code</Typography>
//       <Box mt={2} sx={{ width: '100%', maxWidth: 400 }}>
//         <video
//           id="video"
//           style={{ width: '100%', height: 'auto', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '8px' }}
//         />
//         <Button variant="contained" color="primary" onClick={startScanner}>Start Scanner</Button>
//         {qrResult && <Typography variant="body1">Scanned QR Code: {qrResult}</Typography>}
//       </Box>
//     </Box>
//   );

//   const renderAttendance = () => (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Attendance Details
//       </Typography>
//       {barData.length === 0 ? (
//         <Typography>No attendance data available.</Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {barData.map((subject, index) => {
//             const subjectAttendancePercentage = subject.total
//               ? ((subject.present / subject.total) * 100).toFixed(2)
//               : 0;
//             const absentPercentage = subject.total
//               ? (((subject.total - subject.present) / subject.total) * 100).toFixed(2)
//               : 0;
  
//             return (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h6" gutterBottom>
//                       {subject.name}
//                     </Typography>
//                     <ResponsiveContainer width="100%" height={200}>
//                       <PieChart>
//                         <Pie
//                           data={[
//                             { name: 'Present', value: subject.present },
//                             { name: 'Absent', value: subject.total - subject.present },
//                           ]}
//                           dataKey="value"
//                           outerRadius={80}
//                           innerRadius={50}
//                           fill="#8884d8"
//                         >
//                           <Cell key="Present" fill="#4caf50" />
//                           <Cell key="Absent" fill="#f44336" />
//                         </Pie>
//                         <Tooltip
//                           formatter={(value, name) => {
//                             // Customize the tooltip content
//                             if (name === 'Present') {
//                               return [`${value} (${subjectAttendancePercentage}%)`, name];
//                             } else {
//                               return [`${value} (${absentPercentage}%)`, name];
//                             }
//                           }}
//                           labelFormatter={() => ''}
//                           contentStyle={{
//                             backgroundColor: 'white',
//                             border: '1px solid #ddd',
//                             borderRadius: '5px',
//                             padding: '10px',
//                           }}
//                         />
//                       </PieChart>
//                     </ResponsiveContainer>
//                     <Typography variant="body2" color="textSecondary">
//                       Total Classes: {subject.total}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Present: {subject.present}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Absent: {subject.total - subject.present}
//                     </Typography>
//                     <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
//                       {subjectAttendancePercentage}%
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             );
//           })}
//         </Grid>
//       )}
//     </Box>
//   );
  

//   const renderContent = () => {
//     switch (selectedPage) {
//       case 'home':
//         return renderHome();
//       case 'scanQRCode':
//         return renderQRCodeScanner();
//       case 'viewAttendance':
//         return renderAttendance();
//       default:
//         return null;
//     }
//   };

//   const menuItems = [
//     { text: 'Home', icon: <Home />, page: 'home' },
//     { text: 'Scan QR Code', icon: <QrCodeScanner />, page: 'scanQRCode' },
//     { text: 'View Attendance', icon: <School />, page: 'viewAttendance' },
//     // { text: 'Update Profile', icon: <AccountCircle />, page: 'updateProfile' },
//     { text: 'Logout', icon: <Logout />, page: 'logout', action: handleLogout },
//   ];

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         sx={{width: isDrawerOpen ? drawerWidthExpanded : drawerWidthCollapsed,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: isDrawerOpen ? drawerWidthExpanded : drawerWidthCollapsed,
//             boxSizing: 'border-box',
//             transition: 'width 0.3s',
//           }, }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             p: 1,
//           }}
//         >
//            <IconButton onClick={toggleDrawer}>
//             {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
//           </IconButton>
//         </Box>
//         {/* <Typography variant="h5" sx={{ p: 2 }}>ScaNMark</Typography> */}
//         <Typography
//           variant={isDrawerOpen ? 'h5' : 'h6'}
//           sx={{
//             p: isDrawerOpen ? 2 : 0,
//             whiteSpace: 'nowrap', // Prevent text wrapping when minimized
//             overflow: 'hidden', // Hide overflowed text
//             textAlign: 'center', // Center align for consistency
//             visibility: isDrawerOpen ? 'visible' : 'hidden', // Hide when minimized
//           }}
//         >
//           ScaNMark
//         </Typography>
//         <List>
//           {menuItems.map((item, index) => (
//             <ListItem
//               button
//               key={index}
//               selected={selectedPage === item.page}
//               onClick={() => {
//                 if (item.action) {
//                   item.action();
//                 } else {
//                   setSelectedPage(item.page);
//                 }
//               }}
//             >
//                <ListItemIcon>{item.icon}</ListItemIcon>
//               <Collapse in={isDrawerOpen} orientation="horizontal">
//                 <ListItemText primary={item.text} />
//               </Collapse>
//             </ListItem>
//           ))}
//         </List>
//         {/* <List>
//           <ListItem  button
//             selected={selectedPage === 'home'} onClick={() => setSelectedPage('home')}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button={true} onClick={() => setSelectedPage('scanQRCode')}>
//             <ListItemText primary="Scan QR Code" />
//           </ListItem>
//           <ListItem button={true} onClick={() => setSelectedPage('viewAttendance')}>
//             <ListItemText primary="View Attendance" />
//           </ListItem>
//           <ListItem button={true} onClick={() => setSelectedPage('updateProfile')}>
//             <ListItemText primary="Update Profile" />
//           </ListItem>
//           <ListItem button={true} onClick={handleLogout}>
//             <ListItemText primary="Logout" />
//           </ListItem>
//         </List> */}
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
//         <AppBar position="static" sx={{bgcolor:'black'}}>
//           <Toolbar>
//             <Typography variant="h6">{selectedPage === 'home' ? 'Dashboard' : selectedPage}</Typography>
//           </Toolbar>
//         </AppBar>
//         {renderContent()}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

// import { useState } from "react";
// import { BrowserQRCodeReader, NotFoundException } from "@zxing/library";
// import { Box, Button, Typography } from "@mui/material";


// const Dashboard = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState("");
//   const [qrResult, setQrResult] = useState("");
//   const [videoStream, setVideoStream] = useState(null);
//   const scanner = new BrowserQRCodeReader();
//   const [scannerActive, setScannerActive] = useState(false);


//   // Function to start the QR Code scanner
//   // const startScanner = async () => {
//   //   if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//   //     alert("Camera access is not supported in your browser.");
//   //     return;
//   //   }

//   //   try {
//   //     const constraints = { video: { facingMode: "environment" } };
//   //     const stream = await navigator.mediaDevices.getUserMedia(constraints);
//   //     setVideoStream(stream); // Store video stream

//   //     scanner.decodeFromVideoDevice(null, "video", (result, error) => {
//   //       if (result) {
//   //         handleScan(result);
//   //         stopScanner(); // Stop scanner after successful scan
//   //       }
//   //       if (error instanceof NotFoundException) {
//   //         console.log("No QR code found");
//   //       }
//   //     });
//   //   } catch (error) {
//   //     console.error("Camera error:", error);
//   //     alert("Unable to access the camera.");
//   //   }
//   // };

//   const startScanner = async () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       alert("Camera access is not supported in your browser.");
//       return;
//     }
  
//     try {
//       const constraints = { video: { facingMode: "environment" } };
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       setVideoStream(stream); // Store video stream
//       setScannerActive(true); // Set scanner as active
  
//       scanner.decodeFromVideoDevice(null, "video", (result, error) => {
//         if (result && scannerActive) {
//           handleScan(result);
//         }
//         if (error instanceof NotFoundException) {
//           console.log("No QR code found");
//         }
//       });
//     } catch (error) {
//       console.error("Camera error:", error);
//       alert("Unable to access the camera.");
//     }
//   };
  
//   // // Function to stop the camera stream
//   // const stopScanner = () => {
//   //   if (videoStream) {
//   //     videoStream.getTracks().forEach((track) => track.stop()); // Stop camera
//   //   }
//   // };

//   const stopScanner = () => {
//     if (videoStream) {
//       videoStream.getTracks().forEach((track) => track.stop()); // Stop camera
//     }
//     scanner.reset(); // Reset the scanner to stop further decoding
//   };
  

//   // Function to handle scanned QR code
//   // const handleScan = (result) => {
//   //   if (result?.text) {
//   //     console.log("✅ Scanned QR Data:", result.text);
//   //     setQrResult(result.text); // Store QR result
  
//   //     // Extract lectureId from QR code
//   //     const qrParts = result.text.split("|");
//   //     if (qrParts.length < 4) {
//   //       setAttendanceMessage("❌ Invalid QR Code");
//   //       return;
//   //     }
  
//   //     const lectureId = qrParts[0]; // Extract lectureId
//   //     const signedQrContent = "3|2025-02-01T00:37:24.965344|19.0514|72.9065|l9waQHynbXf+PH/imu5usiWDX/rQwkxENmk5ZCb8qQbYO9lq7EWODyIJvOB6V9xvE0P7TuA9yCy6/cJyUwDrH2SOagKJyCeQoC+kf+eRDlSgFdTYwlXHROPeAzBbWj6pMti7Nhx0Nk5RrD1WSgOLzXlrqvnpikV5+nyQEoFNcPP+6z5txSGrtJn90Adx7xjJQ4Gw5kU3QOKu5elW+22u98yzx1uU/fGtCYXUG5l+kbLzM4Y2U0qTmL11eUSoeTJ+Ej8T7xb+c6zq7R4EkKMZ6Y5/hZMFtmryAYcEJR86nkk4Bl/TZE5vqUs7ipaveGDRX3yjdlx5ufxJbuK0WUh7WQ==";
  
//   //     // Mock student PRN (fetch dynamically in a real app)
//   //     const studentPrn = "240840120161";
  
//   //     // Get Student's Location
//   //     navigator.geolocation.getCurrentPosition(
//   //       (position) => {
//   //         const { latitude, longitude } = position.coords;
//   //         console.log("📍 Location:", { latitude, longitude });
  
//   //         // Send Attendance Data to Backend
//   //         markAttendance(lectureId, signedQrContent, latitude, longitude, studentPrn);
//   //       },
//   //       (error) => {
//   //         console.error("❌ Location Error:", error.message);
//   //         setAttendanceMessage("⚠️ Location access is required to mark attendance.");
//   //       }
//   //     );
//   //   }
//   // };

//   const handleScan = (result) => {
//     if (result?.text) {
//       console.log("✅ Scanned QR Data:", result.text);
//       setQrResult(result.text); 
  
//       // Extract lectureId from QR code
//       const qrParts = result.text.split("|");
//       if (qrParts.length < 4) {
//         setAttendanceMessage("❌ Invalid QR Code");
//         return;
//       }
  
//       const lectureId = qrParts[0]; 
//       const signedQrContent = "3|2025-02-01T00:37:24.965344|19.0514|72.9065|l9waQHynbXf+PH/imu5usiWDX/rQwkxENmk5ZCb8qQbYO9lq7EWODyIJvOB6V9xvE0P7TuA9yCy6/cJyUwDrH2SOagKJyCeQoC+kf+eRDlSgFdTYwlXHROPeAzBbWj6pMti7Nhx0Nk5RrD1WSgOLzXlrqvnpikV5+nyQEoFNcPP+6z5txSGrtJn90Adx7xjJQ4Gw5kU3QOKu5elW+22u98yzx1uU/fGtCYXUG5l+kbLzM4Y2U0qTmL11eUSoeTJ+Ej8T7xb+c6zq7R4EkKMZ6Y5/hZMFtmryAYcEJR86nkk4Bl/TZE5vqUs7ipaveGDRX3yjdlx5ufxJbuK0WUh7WQ=="; 
//       const studentPrn = "240840120161"; 
  
//       // Stop the scanner immediately
//       stopScanner();
//       setScannerActive(false);
  
//       // Get Student's Location
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log("📍 Location:", { latitude, longitude });
  
//          // Send Attendance Data to Backend
//           markAttendance(lectureId, signedQrContent, latitude, longitude, studentPrn);
//         },
//         (error) => {
//           console.error("❌ Location Error:", error.message);
//           setAttendanceMessage("⚠️ Location access is required to mark attendance.");
//         }
//       );
//     }
//   };
  
  
//   // Function to send attendance data to the backend
//   const markAttendance = async (lectureId, signedQrContent, latitude, longitude, studentPrn) => {
//     const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbjIwMTk3MTI1QGdpdC1pbmRpYS5lZHUuaW4iLCJyb2xlIjoiUk9MRV9TVFVERU5UIiwiaWF0IjoxNzM4MzUwNTY2LCJleHAiOjE3MzgzNTQxNjZ9.WuoVWzIlCosKAYPREABYCTuMJa7uxJXJ8ZAY40c1rkd28Vxxgcucj6rFLK-oG0HEICSaZJ6uvPWnWfbcL28zwQ";  // Replace this with the actual token
  
//     try {
//       const response = await fetch("http://localhost:8081/api/attendance/mark-attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           "Authorization": `Bearer ${token}`, // Add Authorization header
//         },
//         body: JSON.stringify({
//           lectureId,
//           signedQrContent,
//           latitude,  // Send as number
//           longitude, // Send as number
//           studentPrn,
//         }),
//       });
  
//       const data = await response.json();
//       console.log("📥 Backend Response:", data);
  
//       if (data.success) {
//         setAttendanceMessage("✅ Attendance marked successfully!");
//       } else {
//         setAttendanceMessage(`❌ Failed: ${data.error || "Unknown error"}`);
//       }
//     } catch (error) {
//       console.error("❌ Error marking attendance:", error);
//       setAttendanceMessage("❌ An error occurred while marking attendance.");
//     }
//   };

//   return(
//     <Box sx={{ p: 3, textAlign: "center" }}>
//       <Typography variant="h6">📌 Scan QR Code to Mark Attendance</Typography>
//       <Box mt={2} sx={{ width: "100%", maxWidth: 400 }}>
//         <video
//           id="video"
//           style={{ width: "100%", height: "auto", maxWidth: "400px", border: "1px solid #ccc", borderRadius: "8px" }}
//         />
//         <Button variant="contained" color="primary" onClick={startScanner}>
//           Start Scanner
//         </Button>
//         {qrResult && <Typography variant="body1">Scanned QR Code: {qrResult}</Typography>}
//         {attendanceMessage && <Typography variant="body1">{attendanceMessage}</Typography>}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


// import { useState, useEffect } from "react";
// import { BrowserQRCodeReader, NotFoundException } from "@zxing/library";
// import { Box, Button, Typography } from "@mui/material";

// const Dashboard = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState("");
//   const [qrResult, setQrResult] = useState("");
//   const [videoStream, setVideoStream] = useState(null);
//   const [scannerActive, setScannerActive] = useState(false);
//   const scanner = new BrowserQRCodeReader();

//   useEffect(() => {
//     return () => {
//       stopScanner(); // Cleanup scanner on unmount
//     };
//   }, []);

//   const startScanner = async () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       alert("Camera access is not supported in your browser.");
//       return;
//     }

//     try {
//       // Reset scanner to avoid conflicts
//       scanner.reset();
//       setQrResult("");
//       setAttendanceMessage("");
  
//       const constraints = { video: { facingMode: "environment" } };
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       setVideoStream(stream);
//       setScannerActive(true);

//       scanner.decodeFromVideoDevice(undefined, "video", (result, error) => {
//         if (result) {
//           console.log("✅ Scanned QR Data:", result.text);
//           handleScan(result);
//         } else if (error instanceof NotFoundException) {
//           console.log("No QR code found");
//         }
//       });
//     } catch (error) {
//       console.error("Camera error:", error);
//       alert("Unable to access the camera.");
//     }
//   };

//   const stopScanner = () => {
//     if (videoStream) {
//       videoStream.getTracks().forEach((track) => track.stop()); // Stop camera
//     }
//     scanner.reset(); // Reset the scanner to stop further decoding
//     setScannerActive(false);
//   };

//   const handleScan = (result) => {
//     if (result?.text) {
//       setQrResult(result.text);
//       stopScanner(); // Stop scanner immediately after a successful scan
  
//       const qrParts = result.text.split("|");
//       if (qrParts.length < 4) {
//         setAttendanceMessage("❌ Invalid QR Code");
//         return;
//       }

//       const lectureId = qrParts[0]; 
//       const signedQrContent = "3|2025-02-01T00:37:24.965344|19.0514|72.9065|l9waQHynbXf+PH/imu5usiWDX/rQwkxENmk5ZCb8qQbYO9lq7EWODyIJvOB6V9xvE0P7TuA9yCy6/cJyUwDrH2SOagKJyCeQoC+kf+eRDlSgFdTYwlXHROPeAzBbWj6pMti7Nhx0Nk5RrD1WSgOLzXlrqvnpikV5+nyQEoFNcPP+6z5txSGrtJn90Adx7xjJQ4Gw5kU3QOKu5elW+22u98yzx1uU/fGtCYXUG5l+kbLzM4Y2U0qTmL11eUSoeTJ+Ej8T7xb+c6zq7R4EkKMZ6Y5/hZMFtmryAYcEJR86nkk4Bl/TZE5vqUs7ipaveGDRX3yjdlx5ufxJbuK0WUh7WQ=="; 
//       const studentPrn = "240840120161"; 
  
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log("📍 Location:", { latitude, longitude });
//           markAttendance(lectureId, signedQrContent, latitude, longitude, studentPrn);
//         },
//         (error) => {
//           console.error("❌ Location Error:", error.message);
//           setAttendanceMessage("⚠️ Location access is required to mark attendance.");
//         }
//       );
//     }
//   };

//   const markAttendance = async (lectureId, signedQrContent, latitude, longitude, studentPrn) => {
//     const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbjIwMTk3MTI1QGdpdC1pbmRpYS5lZHUuaW4iLCJyb2xlIjoiUk9MRV9TVFVERU5UIiwiaWF0IjoxNzM4MzUwNTY2LCJleHAiOjE3MzgzNTQxNjZ9.WuoVWzIlCosKAYPREABYCTuMJa7uxJXJ8ZAY40c1rkd28Vxxgcucj6rFLK-oG0HEICSaZJ6uvPWnWfbcL28zwQ";  

//     try {
//       const response = await fetch("http://localhost:8081/api/attendance/mark-attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           lectureId,
//           signedQrContent,
//           latitude,
//           longitude,
//           studentPrn,
//         }),
//       });

//       const data = await response.json();
//       console.log("📥 Backend Response:", data);

//       if (data.success) {
//         setAttendanceMessage("✅ Attendance marked successfully!");
//       } else {
//         setAttendanceMessage(`❌ Failed: ${data.error || "Unknown error"}`);
//       }
//     } catch (error) {
//       console.error("❌ Error marking attendance:", error);
//       setAttendanceMessage("❌ An error occurred while marking attendance.");
//     }
//   };

//   return (
//     <Box sx={{ p: 3, textAlign: "center" }}>
//       <Typography variant="h6">📌 Scan QR Code to Mark Attendance</Typography>
//       <Box mt={2} sx={{ width: "100%", maxWidth: 400 }}>
//         <video
//           id="video"
//           style={{
//             width: "100%",
//             height: "auto",
//             maxWidth: "400px",
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//           }}
//         />
//         {!scannerActive ? (
//           <Button variant="contained" color="primary" onClick={startScanner}>
//             Start Scanner
//           </Button>
//         ) : (
//           <Button variant="contained" color="secondary" onClick={stopScanner}>
//             Stop Scanner
//           </Button>
//         )}
//         {qrResult && <Typography variant="body1">Scanned QR Code: {qrResult}</Typography>}
//         {attendanceMessage && <Typography variant="body1">{attendanceMessage}</Typography>}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

//dynamic prn and token
// import { useState, useEffect } from "react";
// import { BrowserQRCodeReader, NotFoundException } from "@zxing/library";
// import { Box, Button, Typography } from "@mui/material";

// const Dashboard = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState("");
//   const [qrResult, setQrResult] = useState("");
//   const [videoStream, setVideoStream] = useState(null);
//   const [scannerActive, setScannerActive] = useState(false);
//   const [studentPrn, setStudentPrn] = useState(null);
//   const scanner = new BrowserQRCodeReader();

//   useEffect(() => {
//     fetchStudentPrn();
//     return () => {
//       stopScanner(); // Cleanup scanner on unmount
//     };
//   }, []);

//   const fetchStudentPrn = async () => {
//     const token = localStorage.getItem("studentToken");
//     if (!token) {
//       console.error("❌ No authentication token found");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:8081/api/students/getPrn", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) throw new Error("Failed to fetch PRN");
//       const prn = await response.json();
//       setStudentPrn(prn);
//     } catch (error) {
//       console.error("❌ Error fetching PRN:", error);
//     }
//   };

//   const startScanner = async () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       alert("Camera access is not supported in your browser.");
//       return;
//     }

//     try {
//       scanner.reset();
//       setQrResult("");
//       setAttendanceMessage("");
  
//       const constraints = { video: { facingMode: "environment" } };
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       setVideoStream(stream);
//       setScannerActive(true);

//       scanner.decodeFromVideoDevice(undefined, "video", (result, error) => {
//         if (result) {
//           console.log("✅ Scanned QR Data:", result.text);
//           handleScan(result);
//         } else if (error instanceof NotFoundException) {
//           console.log("No QR code found");
//         }
//       });
//     } catch (error) {
//       console.error("Camera error:", error);
//       alert("Unable to access the camera.");
//     }
//   };

//   const stopScanner = () => {
//     if (videoStream) {
//       videoStream.getTracks().forEach((track) => track.stop()); // Stop camera
//     }
//     scanner.reset(); // Reset the scanner to stop further decoding
//     setScannerActive(false);
//   };

//   const handleScan = (result) => {
//     if (result?.text) {
//       setQrResult(result.text);
//       stopScanner();
  
//       const qrParts = result.text.split("|");
//       if (qrParts.length < 4) {
//         setAttendanceMessage("❌ Invalid QR Code");
//         return;
//       }

//       const [lectureId, , , ] = qrParts; 
//       const signedQrContent = "6|2025-02-03T00:38:06.693690200|18.529457|73.81212|kLBkKOVYy5X5yZQ9AZkgqGIWKII28gs/F7T1miaMM/M95VAAqoX5XIa2jK0itF9iNPaCfjCgS5q3AqtbyRKBxRgyamNFezgIX3JW8tls6UzhbyDfebmjPTClc4mMe8FbUo8nfchColR6o7+10Gl3gUSKQ6eP47q7Xe58ax8ffqN++zr3oQQILIER05lYVEhRbMfp4ggasJ61CeRufAw3j+rPFRPNRPxhQV8aMEkv0z4CnyjX/NA9JvS2Iin9TiXFD9aa8RR3EnFyGLt81YBsEggAjE9t9ZMlX/R/V/EjlAeYk4QySJHF5d0tZny28+zpkZafuklJ8OZgptIFdQOUFg=="; 
  
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log("📍 Location:", { latitude, longitude });
//           markAttendance(lectureId, signedQrContent, latitude, longitude, studentPrn);
//         },
//         (error) => {
//           console.error("❌ Location Error:", error.message);
//           setAttendanceMessage("⚠️ Location access is required to mark attendance.");
//         }
//       );
//     }
//   };

//   const markAttendance = async (lectureId, signedQrContent, latitude, longitude, studentPrn) => {
//     const token = localStorage.getItem("studentToken");  
//     if (!token || !studentPrn) {
//       console.error("❌ Missing authentication token or PRN");
//       setAttendanceMessage("❌ Authentication error. Please log in again.");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:8081/api/attendance/mark-attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           lectureId,
//           signedQrContent,
//           latitude,
//           longitude,
//           studentPrn,
//         }),
//       });

//       const data = await response.json();
//       console.log("📥 Backend Response:", data);

//       setAttendanceMessage(data.success ? "✅ Attendance marked successfully!" : `❌ Failed: ${data.error || "Unknown error"}`);
//     } catch (error) {
//       console.error("❌ Error marking attendance:", error);
//       setAttendanceMessage("❌ An error occurred while marking attendance.");
//     }
//   };

//   return (
//     <Box sx={{ p: 3, textAlign: "center" }}>
//       <Typography variant="h6">📌 Scan QR Code to Mark Attendance</Typography>
//       <Box mt={2} sx={{ width: "100%", maxWidth: 400 }}>
//         <video
//           id="video"
//           style={{
//             width: "100%",
//             height: "auto",
//             maxWidth: "400px",
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//           }}
//         />
//         {!scannerActive ? (
//           <Button variant="contained" color="primary" onClick={startScanner}>
//             Start Scanner
//           </Button>
//         ) : (
//           <Button variant="contained" color="secondary" onClick={stopScanner}>
//             Stop Scanner
//           </Button>
//         )}
//         {qrResult && <Typography variant="body1">Scanned QR Code: {qrResult}</Typography>}
//         {attendanceMessage && <Typography variant="body1">{attendanceMessage}</Typography>}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

//final mark attendance dynamic
// import { useState, useEffect } from "react";
// import { BrowserQRCodeReader, NotFoundException } from "@zxing/library";
// import { Box, Button, Typography } from "@mui/material";

// const Dashboard = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState("");
//   const [qrResult, setQrResult] = useState("");
//   const [videoStream, setVideoStream] = useState(null);
//   const [scannerActive, setScannerActive] = useState(false);
//   const [studentPrn, setStudentPrn] = useState(null);
//   const scanner = new BrowserQRCodeReader();

//   useEffect(() => {
//     fetchStudentPrn();
//     return () => {
//       stopScanner(); // Cleanup scanner on unmount
//     };
//   }, []);

//   const fetchStudentPrn = async () => {
//     const token = localStorage.getItem("studentToken");
//     if (!token) {
//       console.error("❌ No authentication token found");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:8081/api/students/getPrn", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) throw new Error("Failed to fetch PRN");
//       const prn = await response.json();
//       setStudentPrn(prn);
//     } catch (error) {
//       console.error("❌ Error fetching PRN:", error);
//     }
//   };

//   const startScanner = async () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       alert("Camera access is not supported in your browser.");
//       return;
//     }

//     try {
//       scanner.reset();
//       setQrResult("");
//       setAttendanceMessage("");
  
//       const constraints = { video: { facingMode: "environment" } };
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       setVideoStream(stream);
//       setScannerActive(true);

//       scanner.decodeFromVideoDevice(undefined, "video", (result, error) => {
//         if (result) {
//           console.log("✅ Scanned QR Data:", result.text);
//           handleScan(result);
//         } else if (error instanceof NotFoundException) {
//           console.log("No QR code found");
//         }
//       });
//     } catch (error) {
//       console.error("Camera error:", error);
//       alert("Unable to access the camera.");
//     }
//   };

//   const stopScanner = () => {
//     if (videoStream) {
//       videoStream.getTracks().forEach((track) => track.stop()); // Stop camera
//     }
//     scanner.reset(); // Reset the scanner to stop further decoding
//     setScannerActive(false);
//   };

//   const handleScan = async (result) => {
//     if (result?.text) {
//       setQrResult(result.text);
//       stopScanner();

//       const qrParts = result.text.split("|");
//       if (qrParts.length < 4) {
//         setAttendanceMessage("❌ Invalid QR Code");
//         return;
//       }

//       const [lectureId] = qrParts;

//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log("📍 Location:", { latitude, longitude });
          
//           try {
//             // Get signed QR content from backend
//             const token = localStorage.getItem("studentToken");
//             const signResponse = await fetch("http://localhost:8081/api/qr/sign", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`,
//               },
//               body: JSON.stringify({
//                 lectureId,
//                 timestamp: new Date().toISOString(),
//                 latitude,
//                 longitude,
//                 studentPrn
//               }),
//             });

//             if (!signResponse.ok) {
//               throw new Error("Failed to get signed QR content");
//             }

//             const { signedContent } = await signResponse.json();
            
//             // Use the signed content to mark attendance
//             await markAttendance(lectureId, signedContent, latitude, longitude, studentPrn);
            
//           } catch (error) {
//             console.error("❌ Error getting signed QR content:", error);
//             setAttendanceMessage("❌ Failed to process QR code");
//           }
//         },
//         (error) => {
//           console.error("❌ Location Error:", error.message);
//           setAttendanceMessage("⚠️ Location access is required to mark attendance.");
//         }
//       );
//     }
//   };

//   const markAttendance = async (lectureId, signedQrContent, latitude, longitude, studentPrn) => {
//     const token = localStorage.getItem("studentToken");  
//     if (!token || !studentPrn) {
//       console.error("❌ Missing authentication token or PRN");
//       setAttendanceMessage("❌ Authentication error. Please log in again.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8081/api/attendance/mark-attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           lectureId,
//           signedQrContent,
//           latitude,
//           longitude,
//           studentPrn,
//         }),
//       });

//       const data = await response.json();
//       console.log("📥 Backend Response:", data);

//       setAttendanceMessage(data.success ? 
//         "✅ Attendance marked successfully!" : 
//         `❌ Failed: ${data.error || "Unknown error"}`
//       );
//     } catch (error) {
//       console.error("❌ Error marking attendance:", error);
//       setAttendanceMessage("❌ An error occurred while marking attendance.");
//     }
//   };

//   return (
//     <Box sx={{ p: 3, textAlign: "center" }}>
//       <Typography variant="h6" gutterBottom>
//         📌 Scan QR Code to Mark Attendance
//       </Typography>
      
//       <Box mt={2} sx={{ 
//         width: "100%", 
//         maxWidth: 400, 
//         margin: "0 auto",
//         display: "flex",
//         flexDirection: "column",
//         gap: 2 
//       }}>
//         <video
//           id="video"
//           style={{
//             width: "100%",
//             height: "auto",
//             maxWidth: "400px",
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             marginBottom: "16px"
//           }}
//         />
        
//         <Button 
//           variant="contained" 
//           color={scannerActive ? "secondary" : "primary"}
//           onClick={scannerActive ? stopScanner : startScanner}
//           sx={{ width: "200px", margin: "0 auto" }}
//         >
//           {scannerActive ? "Stop Scanner" : "Start Scanner"}
//         </Button>

//         {qrResult && (
//           <Typography variant="body1" sx={{ mt: 2 }}>
//             Scanned QR Code: {qrResult}
//           </Typography>
//         )}

//         {attendanceMessage && (
//           <Typography 
//             variant="body1" 
//             sx={{ 
//               mt: 2,
//               color: attendanceMessage.includes("✅") ? "success.main" : "error.main",
//               fontWeight: "medium"
//             }}
//           >
//             {attendanceMessage}
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


//claude
// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
// import { Card, Button, Container, Row, Col, Nav } from 'react-bootstrap';
// import { BrowserQRCodeReader, NotFoundException } from '@zxing/library';
// import Lottie from 'react-lottie-player';
// import studentAnimation from '../animations/scan.json';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = ({ studentName = "Nisha Patil", attendanceData = { total: 0, present: 0, subjects: [] } }) => {
//   const [selectedPage, setSelectedPage] = useState('home');
//   const [attendanceMessage, setAttendanceMessage] = useState("");
//   const [qrResult, setQrResult] = useState("");
//   const [videoStream, setVideoStream] = useState(null);
//   const [scannerActive, setScannerActive] = useState(false);
//   const [studentPrn, setStudentPrn] = useState(null);
//   const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
//   const scanner = new BrowserQRCodeReader();

//   useEffect(() => {
//     fetchStudentPrn();
//     return () => {
//       stopScanner();
//     };
//   }, []);

//   const fetchStudentPrn = async () => {
//     const token = localStorage.getItem("studentToken");
//     if (!token) {
//       console.error("❌ No authentication token found");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:8081/api/students/getPrn", {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) throw new Error("Failed to fetch PRN");
//       const prn = await response.json();
//       setStudentPrn(prn);
//     } catch (error) {
//       console.error("❌ Error fetching PRN:", error);
//     }
//   };

//   const startScanner = async () => {
//     if (!navigator.mediaDevices?.getUserMedia) {
//       alert("Camera access is not supported in your browser.");
//       return;
//     }

//     try {
//       scanner.reset();
//       setQrResult("");
//       setAttendanceMessage("");
      
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "environment" }
//       });
//       setVideoStream(stream);
//       setScannerActive(true);

//       scanner.decodeFromVideoDevice(undefined, "video", (result, error) => {
//         if (result) {
//           console.log("✅ Scanned QR Data:", result.text);
//           handleScan(result);
//         }
//       });
//     } catch (error) {
//       console.error("Camera error:", error);
//       alert("Unable to access the camera.");
//     }
//   };

//   const stopScanner = () => {
//     if (videoStream) {
//       videoStream.getTracks().forEach(track => track.stop());
//     }
//     scanner.reset();
//     setScannerActive(false);
//   };

//   const handleScan = async (result) => {
//     if (result?.text) {
//       setQrResult(result.text);
//       stopScanner();

//       const qrParts = result.text.split("|");
//       if (qrParts.length < 4) {
//         setAttendanceMessage("❌ Invalid QR Code");
//         return;
//       }

//       const [lectureId] = qrParts;

//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           try {
//             const token = localStorage.getItem("studentToken");
//             const signResponse = await fetch("http://localhost:8081/api/qr/sign", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`,
//               },
//               body: JSON.stringify({
//                 lectureId,
//                 timestamp: new Date().toISOString(),
//                 latitude,
//                 longitude,
//                 studentPrn
//               }),
//             });

//             if (!signResponse.ok) {
//               throw new Error("Failed to get signed QR content");
//             }

//             const { signedContent } = await signResponse.json();
//             await markAttendance(lectureId, signedContent, latitude, longitude, studentPrn);
//           } catch (error) {
//             console.error("❌ Error:", error);
//             setAttendanceMessage("❌ Failed to process QR code");
//           }
//         },
//         (error) => {
//           setAttendanceMessage("⚠️ Location access is required to mark attendance.");
//         }
//       );
//     }
//   };

//   const markAttendance = async (lectureId, signedQrContent, latitude, longitude, studentPrn) => {
//     const token = localStorage.getItem("studentToken");
//     if (!token || !studentPrn) {
//       setAttendanceMessage("❌ Authentication error. Please log in again.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8081/api/attendance/mark-attendance", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           lectureId,
//           signedQrContent,
//           latitude,
//           longitude,
//           studentPrn,
//         }),
//       });

//       const data = await response.json();
//       setAttendanceMessage(data.success ? 
//         "✅ Attendance marked successfully!" : 
//         `❌ Failed: ${data.error || "Unknown error"}`
//       );
//     } catch (error) {
//       setAttendanceMessage("❌ An error occurred while marking attendance.");
//     }
//   };

//   const renderHome = () => (
//     <div className="p-4">
//       <h2 className="mb-4">Welcome, {studentName}</h2>
//       <div className="row g-4 mb-4">
//         {/* Stats Cards Row */}
//         <div className="col-md-4">
//           <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//             <div className="card-body">
//               <h5 className="card-title text-muted">Total Attendance</h5>
//               <h3 className="card-text text-primary">{attendanceData.total}</h3>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//             <div className="card-body">
//               <h5 className="card-title text-muted">Present Percentage</h5>
//               <h3 className="card-text text-success">
//                 {((attendanceData.present / attendanceData.total) * 100 || 0).toFixed(2)}%
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//             <div className="card-body">
//               <h5 className="card-title text-muted">Total Subjects</h5>
//               <h3 className="card-text text-info">{attendanceData.subjects?.length || 0}</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animation Card */}
//       <div className="card mt-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//         <div className="card-body text-center">
//           <Lottie
//             loop
//             animationData={studentAnimation}
//             play
//             style={{ width: '300px', height: '300px', margin: '0 auto' }}
//           />
//         </div>
//       </div>
//     </div>
//   );

//   const renderQRScanner = () => (
//     <div className="p-4">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <div className="card shadow-sm" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//             <div className="card-body text-center">
//               <h4 className="mb-4">Scan QR Code</h4>
//               <div className="d-flex flex-column align-items-center">
//                 <video
//                   id="video"
//                   className="mb-3"
//                   style={{
//                     width: '100%',
//                     maxWidth: '400px',
//                     borderRadius: '8px',
//                     border: '1px solid #dee2e6'
//                   }}
//                 />
//                 <button
//                   className={`btn ${scannerActive ? 'btn-danger' : 'btn-primary'} mb-3`}
//                   onClick={scannerActive ? stopScanner : startScanner}
//                 >
//                   {scannerActive ? "Stop Scanner" : "Start Scanner"}
//                 </button>
//                 {qrResult && (
//                   <p className="mt-3">Scanned QR Code: {qrResult}</p>
//                 )}
//                 {attendanceMessage && (
//                   <div className={`alert ${attendanceMessage.includes("✅") ? "alert-success" : "alert-danger"} mt-3`}>
//                     {attendanceMessage}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderAttendance = () => (
//     <div className="p-4">
//       <h4 className="mb-4">Attendance Details</h4>
//       <div className="row g-4">
//         {attendanceData.subjects?.map((subject, index) => (
//           <div key={index} className="col-md-6 col-lg-4">
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//               <div className="card-body">
//                 <h5 className="card-title mb-4">{subject.name}</h5>
//                 <ResponsiveContainer width="100%" height={200}>
//                   <PieChart>
//                     <Pie
//                       data={[
//                         { name: 'Present', value: subject.present },
//                         { name: 'Absent', value: subject.total - subject.present }
//                       ]}
//                       dataKey="value"
//                       outerRadius={80}
//                       innerRadius={50}
//                     >
//                       <Cell fill="#28a745" />
//                       <Cell fill="#dc3545" />
//                     </Pie>
//                     <Tooltip />
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="mt-3">
//                   <p className="mb-2">Total Classes: {subject.total}</p>
//                   <p className="mb-2">Present: {subject.present}</p>
//                   <p className="mb-0 text-success fw-bold">
//                     Attendance: {((subject.present / subject.total) * 100).toFixed(2)}%
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <div 
//         className="sidebar bg-dark"
//         style={{ 
//           width: isMenuCollapsed ? '80px' : '240px',
//           minHeight: '100vh',
//           transition: 'width 0.3s ease'
//         }}
//       >
//         <div className="p-3">
//           <button 
//             className="btn btn-link text-white d-flex align-items-center border-0"
//             onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
//             style={{ textDecoration: 'none' }}
//           >
//             <i className={`fas fa-${isMenuCollapsed ? 'bars' : 'times'} me-2`}></i>
//             {!isMenuCollapsed && <span>ScaNMark</span>}
//           </button>
          
//           <div className="nav flex-column mt-4">
//             <button 
//               className={`btn btn-link text-white text-start mb-2 ${selectedPage === 'home' ? 'active' : ''}`}
//               onClick={() => setSelectedPage('home')}
//               style={{ textDecoration: 'none' }}
//             >
//               <i className="fas fa-home me-2"></i>
//               {!isMenuCollapsed && 'Home'}
//             </button>
//             <button 
//               className={`btn btn-link text-white text-start mb-2 ${selectedPage === 'scanQRCode' ? 'active' : ''}`}
//               onClick={() => setSelectedPage('scanQRCode')}
//               style={{ textDecoration: 'none' }}
//             >
//               <i className="fas fa-qrcode me-2"></i>
//               {!isMenuCollapsed && 'Scan QR Code'}
//             </button>
//             <button 
//               className={`btn btn-link text-white text-start mb-2 ${selectedPage === 'viewAttendance' ? 'active' : ''}`}
//               onClick={() => setSelectedPage('viewAttendance')}
//               style={{ textDecoration: 'none' }}
//             >
//               <i className="fas fa-chart-pie me-2"></i>
//               {!isMenuCollapsed && 'View Attendance'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 bg-white">
//         {selectedPage === 'home' && renderHome()}
//         {selectedPage === 'scanQRCode' && renderQRScanner()}
//         {selectedPage === 'viewAttendance' && renderAttendance()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
























//Dashboard.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("studentToken");
//     console.log("Token",storedToken);
//     if (storedToken) {
//       setToken(storedToken); // If token is present, set it in the state
//     } else {
//       // If no token is found, redirect to sign-in page
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleForgotPassword = () => {
//     if (token) {
//       navigate("/forgot-password"); // Redirect to forgot password page
//     }
//   };

//   const handleLogout = () => {
//     // Remove the token and navigate to the sign-in page
//     localStorage.removeItem("studentToken");
//     navigate("/");
//   };

//   return (
//     <div className="container">
//       <h2>Welcome to your Dashboard!</h2>
//       <div>
//         <button onClick={handleForgotPassword} className="btn btn-primary">
//           Forgot Password
//         </button>
//         <button onClick={handleLogout} className="btn btn-danger">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Card, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserQRCodeReader, NotFoundException } from '@zxing/library';
import Lottie from 'react-lottie-player';
import studentAnimation from '../animations/scan.json';
import AttendanceView from './AttendanceView';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [attendanceMessage, setAttendanceMessage] = useState("");
  const [qrResult, setQrResult] = useState("");
  const [videoStream, setVideoStream] = useState(null);
  const [scannerActive, setScannerActive] = useState(false);
  const [studentPrn, setStudentPrn] = useState(null);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
const [studentName, setStudentName] = useState("");
const [lectureId, setLectureId] = useState(null);
const [attendanceData, setAttendanceData] = useState({
  attendedLectures: 0,
  totalLectures: 0,
  attendancePercentage: 0
});
  const scanner = new BrowserQRCodeReader();

  // useEffect(() => {
  //   fetchStudentPrn();
  //   fetchStudentProfile();
  //   fetchAttendanceData();
  //   return () => {
  //     stopScanner();
  //   };
  // }, []);

  useEffect(() => {
    fetchStudentPrn();
    fetchStudentProfile();
    return () => {
      stopScanner();
    };
  }, []);

  useEffect(() => {
    if (studentPrn) {
      fetchAttendanceData();
    }
  }, [studentPrn]);

  const fetchStudentProfile = async () => {
    const token = localStorage.getItem("studentToken");
    if (!token) {
      console.error("❌ No authentication token found");
      return;
    }
    try {
      const response = await fetch("http://localhost:8081/api/students/getName", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch name");
      const sname = await response.text();
      console.log(sname);
      setStudentName(sname);
    } catch (error) {
      console.error("❌ Error fetching name:", error);
    }
  };

  const fetchAttendanceData = async () => {
    //const token = localStorage.getItem("studentToken");
    //if (!token || !studentPrn) return;
  
    try {
      const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage`, {
        headers: {
          //"Authorization": `Bearer ${token}`,
        },
      });
      
      if (!response.ok) throw new Error("Failed to fetch attendance");
      const attendanceStats = await response.json();
  
      // Update state with attendance data
      setAttendanceData({
        attendedLectures: attendanceStats.attendedLectures,
        totalLectures: attendanceStats.totalLectures,
        attendancePercentage: attendanceStats.attendancePercentage
      });
  
    } catch (error) {
      console.error("❌ Error fetching attendance:", error);
    }
  };


  const fetchStudentPrn = async () => {
    const token = localStorage.getItem("studentToken");
    if (!token) {
      console.error("❌ No authentication token found");
      return;
    }
    try {
      const response = await fetch("http://localhost:8081/api/students/get-prn-through-token", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch PRN");
      const prn = await response.json();
      setStudentPrn(prn);
    } catch (error) {
      console.error("❌ Error fetching PRN:", error);
    }
  };


  const startScanner = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      alert("Camera access is not supported in your browser.");
      return;
    }

    try {
      scanner.reset();
      setQrResult("");
      setAttendanceMessage("");
      
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      setVideoStream(stream);
      setScannerActive(true);

      scanner.decodeFromVideoDevice(undefined, "video", (result, error) => {
        if (result) {
          console.log("✅ Scanned QR Data:", result.text);
          handleScan(result);
        }
      });
    } catch (error) {
      console.error("Camera error:", error);
      alert("Unable to access the camera.");
    }
  };

  const stopScanner = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
    }
    scanner.reset();
    setScannerActive(false);
  };

  const handleScan = async (result) => {
    if (result?.text) {
      setQrResult(result.text);
      stopScanner();

      const qrParts = result.text.split("|");
      if (qrParts.length < 4) {
        setAttendanceMessage("❌ Invalid QR Code");
        return;
      }

      const [lectureId] = qrParts;

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const token = localStorage.getItem("studentToken");
            const signResponse = await fetch("http://localhost:8081/api/qr/sign", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
              body: JSON.stringify({
                lectureId,
                timestamp: new Date().toISOString(),
                latitude,
                longitude,
                studentPrn
              }),
            });

            if (!signResponse.ok) {
              throw new Error("Failed to get signed QR content");
            }

            const { signedContent } = await signResponse.json();
            await markAttendance(lectureId, signedContent, latitude, longitude, studentPrn);
          } catch (error) {
            console.error("❌ Error:", error);
            setAttendanceMessage("❌ Failed to process QR code");
          }
        },
        (error) => {
          setAttendanceMessage("⚠️ Location access is required to mark attendance.");
        }
      );
    }
  };

  const markAttendance = async (lectureId, signedQrContent, latitude, longitude, studentPrn) => {
    const token = localStorage.getItem("studentToken");
    if (!token || !studentPrn) {
      setAttendanceMessage("❌ Authentication error. Please log in again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/api/attendance/mark-attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          lectureId,
          signedQrContent,
          latitude,
          longitude,
          studentPrn,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.message.includes("50 meters")) {
          setAttendanceMessage("❌ You are not within 50 meters of the classroom.");
        } else {
          setAttendanceMessage(`❌ Failed: ${data.message || "Unknown error"}`);
        }
        return;
      }
      setAttendanceMessage(data.success ? 
        "✅ Attendance marked successfully!" : 
        `❌ Failed: ${data.error || "Unknown error"}`
      );
    } catch (error) {
      setAttendanceMessage("❌ An error occurred while marking attendance.");
    }
  };

  // const renderHome = () => (
  //   <div className="p-4">
  //     <h2 className="mb-4">Welcome, {studentName}</h2>
  //     <div className="row g-4 mb-4">
  //       <div className="col-md-4">
  //         <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
  //           <div className="card-body">
  //             <h5 className="card-title text-muted">Total Lectures</h5>
  //             <h3 className="card-text text-primary">{attendanceData.totalLectures}</h3>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-4">
  //         <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
  //           <div className="card-body">
  //             <h5 className="card-title text-muted">Attendance Percentage</h5>
  //             <h3 className="card-text text-success">
  //               {attendanceData.attendancePercentage.toFixed(2)}%
  //             </h3>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-4">
  //         <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
  //           <div className="card-body">
  //             <h5 className="card-title text-muted">Attended Lectures</h5>
  //             <h3 className="card-text text-info">{attendanceData.attendedLectures}</h3>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Animation Card */}
  //     <div className="card mt-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
  //       <div className="card-body text-center">
  //         <Lottie
  //           loop
  //           animationData={studentAnimation}
  //           play
  //           style={{ width: '300px', height: '300px', margin: '0 auto' }}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderHome = () => (
    <div className="container-fluid py-4">
      <h2 className="mb-4 fw-bold">Welcome, {studentName}</h2>
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-white mb-3">Attended Lectures</h5>
              <h3 className="card-text text-white mb-0 fw-bold">{attendanceData.attendedLectures}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0" style={{ background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' }}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-dark mb-3">Total Lectures</h5>
              <h3 className="card-text text-dark mb-0 fw-bold">
                {attendanceData.totalLectures}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0" style={{ background: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)' }}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-dark mb-3">Attended Percentage</h5>
              <h3 className="card-text text-dark mb-0 fw-bold">{attendanceData.attendancePercentage.toFixed(2)}%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 shadow-sm border-0" style={{ backgroundColor: '#f8fafd' }}>
        <div className="card-body text-center">
          {/*<Lottie
            loop
            animationData={studentAnimation}
            play
            style={{ width: '300px', height: '300px', margin: '0 auto' }}
          />*/}
          <AttendanceView studentPrn={studentPrn} />
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    // <div className="p-4">
    //   <h4 className="mb-4">Attendance Details</h4>
    //   <div className="row g-4">
    //     <div className="col-md-12">
    //       <div className="card" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
    //         <div className="card-body">
    //           <ResponsiveContainer width="100%" height={300}>
    //             <PieChart>
    //               <Pie
    //                 data={[
    //                   { name: 'Attended', value: attendanceData.attendedLectures },
    //                   { name: 'Missed', value: attendanceData.totalLectures - attendanceData.attendedLectures }
    //                 ]}
    //                 dataKey="value"
    //                 outerRadius={100}
    //                 innerRadius={70}
    //               >
    //                 <Cell fill="#28a745" />
    //                 <Cell fill="#dc3545" />
    //               </Pie>
    //               <Tooltip />
    //             </PieChart>
    //           </ResponsiveContainer>
    //           <div className="text-center mt-3">
    //             <h5>Overall Attendance</h5>
    //             <p className="mb-2">Total Lectures: {attendanceData.totalLectures}</p>
    //             <p className="mb-2">Attended Lectures: {attendanceData.attendedLectures}</p>
    //             <p className="mb-0 text-success fw-bold">
    //               Attendance Percentage: {attendanceData.attendancePercentage.toFixed(2)}%
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <AttendanceView studentPrn={studentPrn} />
  );

  const renderQRScanner = () => (
    <div className="p-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
            <div className="card-body text-center">
              <h4 className="mb-4">Scan QR Code</h4>
              <div className="d-flex flex-column align-items-center">
                <video
                  id="video"
                  className="mb-3"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '8px',
                    border: '1px solid #dee2e6'
                  }}
                />
                <button
                  className={`btn ${scannerActive ? 'btn-danger' : 'btn-primary'} mb-3`}
                  onClick={scannerActive ? stopScanner : startScanner}
                >
                  {scannerActive ? "Stop Scanner" : "Start Scanner"}
                </button>
                {qrResult && (
                  <p className="mt-3">Scanned QR Code: {qrResult}</p>
                )}
                {attendanceMessage && (
                  <div className={`alert ${attendanceMessage.includes("✅") ? "alert-success" : "alert-danger"} mt-3`}>
                    {attendanceMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // const renderAttendance = () => (
  //   <div className="p-4">
  //     <h4 className="mb-4">Attendance Details</h4>
  //     <div className="row g-4">
  //       {attendanceData.subjects?.map((subject, index) => (
  //         <div key={index} className="col-md-6 col-lg-4">
  //           <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
  //             <div className="card-body">
  //               <h5 className="card-title mb-4">{subject.name}</h5>
  //               <ResponsiveContainer width="100%" height={200}>
  //                 <PieChart>
  //                   <Pie
  //                     data={[
  //                       { name: 'Present', value: subject.present },
  //                       { name: 'Absent', value: subject.total - subject.present }
  //                     ]}
  //                     dataKey="value"
  //                     outerRadius={80}
  //                     innerRadius={50}
  //                   >
  //                     <Cell fill="#28a745" />
  //                     <Cell fill="#dc3545" />
  //                   </Pie>
  //                   <Tooltip />
  //                 </PieChart>
  //               </ResponsiveContainer>
  //               <div className="mt-3">
  //                 <p className="mb-2">Total Classes: {subject.total}</p>
  //                 <p className="mb-2">Present: {subject.present}</p>
  //                 <p className="mb-0 text-success fw-bold">
  //                   Attendance: {((subject.present / subject.total) * 100).toFixed(2)}%
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  const handleLogout = () => {
    // Remove the student token from local storage
    localStorage.removeItem("studentToken");
    
    // Redirect to login page
    window.location.href = "/";
  };

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <div 
//         className="sidebar bg-dark"
//         style={{ 
//           width: isMenuCollapsed ? '80px' : '240px',
//           minHeight: '100vh',
//           transition: 'width 0.3s ease'
//         }}
//       >
//         <div className="p-3">
//           <button 
//             className="btn btn-link text-white d-flex align-items-center border-0"
//             onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
//             style={{ textDecoration: 'none' }}
//           >
//             <i className={`fas fa-${isMenuCollapsed ? 'bars' : 'times'} me-2`}></i>
//             {!isMenuCollapsed && <span>ScaNMark</span>}
//           </button>
          
//           <div className="nav flex-column mt-4">
//             <button 
//               className={`btn btn-link text-white text-start mb-2 ${selectedPage === 'home' ? 'active' : ''}`}
//               onClick={() => setSelectedPage('home')}
//               style={{ textDecoration: 'none' }}
//             >
//               <i className="fas fa-home me-2"></i>
//               {!isMenuCollapsed && 'Home'}
//             </button>
//             <button 
//               className={`btn btn-link text-white text-start mb-2 ${selectedPage === 'scanQRCode' ? 'active' : ''}`}
//               onClick={() => setSelectedPage('scanQRCode')}
//               style={{ textDecoration: 'none' }}
//             >
//               <i className="fas fa-qrcode me-2"></i>
//               {!isMenuCollapsed && 'Scan QR Code'}
//             </button>
//             <button 
//               className={`btn btn-link text-white text-start mb-2 ${selectedPage === 'viewAttendance' ? 'active' : ''}`}
//               onClick={() => setSelectedPage('viewAttendance')}
//               style={{ textDecoration: 'none' }}
//             >
//               <i className="fas fa-chart-pie me-2"></i>
//               {!isMenuCollapsed && 'View Attendance'}
//             </button>
//             <button 
//             className="btn btn-link text-white text-start mb-2"
//             onClick={handleLogout}
//             style={{ textDecoration: 'none' }}
//             >
//             <i className="fas fa-sign-out-alt me-2"></i>
//             {!isMenuCollapsed && 'Logout'}
//           </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 bg-white">
//         {selectedPage === 'home' && renderHome()}
//         {selectedPage === 'scanQRCode' && renderQRScanner()}
//         {selectedPage === 'viewAttendance' && renderAttendance()}
//       </div>
//     </div>
//   );
// };

return (
  <div className="d-flex h-100">
    {/* Modern Sidebar */}
    <div 
      className={`bg-dark text-white ${isMenuCollapsed ? 'collapsed' : ''}`}
      style={{ 
        width: isMenuCollapsed ? '80px' : '240px',
        minHeight: '100vh',
        transition: 'width 0.3s ease'
      }}
    >
      <div className="p-3">
        <button 
          className="btn btn-link text-white d-flex align-items-center border-0 text-decoration-none w-100"
          onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
          style={{backgroundColor:'#143864'}}
        >
          <i className={`fas fa-${isMenuCollapsed ? 'bars' : 'times'} me-2`}></i>
          {!isMenuCollapsed && <span className="fw-bold">ScaNMark</span>}
        </button>
        
        <div className="nav flex-column mt-4">
          {[
            { id: 'home', icon: 'home', label: 'Home' },
            { id: 'scanQRCode', icon: 'qrcode', label: 'Scan QR Code' },
            // { id: 'viewAttendance', icon: 'chart-pie', label: 'View Attendance' }
          ].map(item => (
            <button 
              key={item.id}
              className={`btn btn-link text-white text-start mb-2 text-decoration-none ${selectedPage === item.id ? 'active' : ''}`}
              onClick={() => setSelectedPage(item.id)}
              style={{
                backgroundColor: selectedPage === item.id ? '#6c757d' : '#143864'
              }}
            >
              <i className={`fas fa-${item.icon} me-2`}></i>
              {!isMenuCollapsed && item.label}
            </button>
          ))}
          <button 
            className="btn btn-link text-white text-start mb-2 text-decoration-none"
            onClick={handleLogout}
            style={{backgroundColor:'#143864'}}
          >
            <i className="fas fa-sign-out-alt me-2"></i>
            {!isMenuCollapsed && 'Logout'}
          </button>
        </div>
      </div>
    </div>

    {/* Main Content Area */}
    <div className="flex-grow-1 bg-light">
      {selectedPage === 'home' && renderHome()}
      {selectedPage === 'scanQRCode' && renderQRScanner()}
      {selectedPage === 'viewAttendance' && renderAttendance()}
    </div>
  </div>
);
};

export default Dashboard;

