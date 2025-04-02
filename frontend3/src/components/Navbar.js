// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Attendance System
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/attendance">
          Mark Attendance
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import QrScanner from "react-qr-scanner";

// const QRScanner = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState("");

//   const handleScan = (result) => {
//     if (result?.text) {
//       console.log("✅ Scanned QR Data:", result.text);
      
//       // Extract lectureId and QR content
//       const qrParts = result.text.split("|");
//       if (qrParts.length < 5) {
//         setAttendanceMessage("❌ Invalid QR Code");
//         return;
//       }
      
//       const lectureId = qrParts[0]; // Extract lectureId
//       const signedQrContent = result.text; // Full signed QR content
      
//       // Mock student PRN (In a real app, fetch from session or API)
//       const studentPrn = "240840120101";

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
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ lectureId, signedQrContent, latitude, longitude, studentPrn }),
//       });
      
//       const data = await response.json();
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
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h2>📸 Scan QR Code for Attendance</h2>
//       <QrScanner 
//         delay={300} 
//         onScan={handleScan} 
//         onError={(error) => console.error("QR Scanner Error:", error)}
//         style={{ width: "100%" }} 
//       />
//       <h3>{attendanceMessage}</h3>
//     </div>
//   );
// };

// export default QRScanner;
