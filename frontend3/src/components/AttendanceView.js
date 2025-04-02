// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Define colors for different subjects
//   const COLORS = ['#28a745', '#007bff', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1', '#fd7e14'];

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();
      
//       // Transform the data for the pie chart
//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         name: subject,
//         value: percentage
//       }));
      
//       setSubjectAttendance(chartData);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-2 border rounded shadow">
//           <p className="font-medium">{payload[0].name}</p>
//           <p className="text-sm">{`Attendance: ${payload[0].value.toFixed(2)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="p-4">
//       <h4 className="mb-4">Subject-wise Attendance Details</h4>
//       <div className="row g-4">
//         <div className="col-md-12">
//           <div className="card" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//             <div className="card-body">
//               <ResponsiveContainer width="100%" height={400}>
//                 <PieChart>
//                   <Pie
//                     data={subjectAttendance}
//                     dataKey="value"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={150}
//                     innerRadius={70}
//                     label={({ name, value }) => `${name} (${value.toFixed(1)}%)`}
//                   >
//                     {subjectAttendance.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip content={<CustomTooltip />} />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
              
//               {/* Detailed breakdown cards */}
//               <div className="row mt-4 g-3">
//                 {subjectAttendance.map((subject, index) => (
//                   <div className="col-md-4" key={subject.name}>
//                     <div className="card h-100" style={{ backgroundColor: 'white', borderRadius: '8px' }}>
//                       <div className="card-body">
//                         <h6 className="card-title text-muted">{subject.name}</h6>
//                         <div className="d-flex align-items-center mt-2">
//                           <div 
//                             className="me-2" 
//                             style={{ 
//                               width: '12px', 
//                               height: '12px', 
//                               backgroundColor: COLORS[index % COLORS.length],
//                               borderRadius: '50%' 
//                             }} 
//                           />
//                           <h3 className="card-text mb-0" style={{ color: COLORS[index % COLORS.length] }}>
//                             {subject.value.toFixed(2)}%
//                           </h3>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceView;

// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Define colors for attended vs missed
//   const COLORS = ['#28a745', '#dc3545']; // Green for attended, Red for missed

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();
      
//       // Transform the data for multiple pie charts
//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         subject: subject,
//         data: [
//           { name: 'Attended', value: percentage },
//           { name: 'Missed', value: 100 - percentage }
//         ]
//       }));
      
//       setSubjectAttendance(chartData);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-2 border rounded shadow">
//           <p className="font-medium">{payload[0].name}</p>
//           <p className="text-sm">{`${payload[0].value.toFixed(2)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="p-4">
//       <h4 className="mb-4">Subject-wise Attendance Details</h4>
//       <div className="row g-4">
//         {subjectAttendance.map((subject, index) => (
//           <div className="col-md-4" key={subject.subject}>
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
//               <div className="card-body">
//                 <h5 className="card-title text-center mb-3">{subject.subject}</h5>
//                 <div style={{ height: '250px' }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={subject.data}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={80}
//                         innerRadius={60}
//                         label={({ name, value }) => `${name} (${value.toFixed(1)}%)`}
//                       >
//                         {subject.data.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip content={<CustomTooltip />} />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//                 <div className="text-center mt-3">
//                   <h6 className="mb-2">Total Attendance</h6>
//                   <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
//                     {subject.data[0].value.toFixed(2)}%
//                   </h4>
//                   {subject.data[0].value < 75 && (
//                     <small className="text-danger">
//                       Attendance below 75% threshold
//                     </small>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AttendanceView;


//final
// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';


// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();
      
//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         subject: subject,
//         data: [
//           { name: 'Present', value: percentage },
//           { name: 'Absent', value: 100 - percentage }
//         ]
//       }));
      
//       setSubjectAttendance(chartData);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div style={{ 
//           backgroundColor: 'white', 
//           padding: '10px', 
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}>
//           <p>{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (loading) {
//     return (
//       <div className="text-center p-4">
//         Loading attendance data...
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h4 className="mb-4 text-center">Subject-wise Attendance Dashboard</h4>
      
//       <div className="row g-4">
//         {subjectAttendance.map((subject) => (
//           <div className="col-md-6 col-lg-4" key={subject.subject}>
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
//               <div className="card-body">
//                 <h5 className="card-title text-center mb-3">{subject.subject}</h5>
                
//                 <div style={{ height: '200px', width: '100%' }}>
//                   <ResponsiveContainer>
//                     <PieChart>
//                     <Pie
//                         data={subject.data}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={70}
//                             innerRadius={50}
//                             startAngle={90}  // Start from 0°
//                             endAngle={-270}  // End at 360° forming a full circle
//                             isAnimationActive={true}  // Enable animation
//                             animationBegin={0}  // Start animation immediately
//                             animationDuration={2000}  // Adjust speed (increase for slower effect)
//                             animationEasing="ease-in-out"  // Smooth transition
//                         >
//                         <Cell fill="#28a745" /> {/* Present */}
//                         <Cell fill="#dc3545" /> {/* Absent */}
//                       </Pie>
//                       <Tooltip content={<CustomTooltip />} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
                
//                 <div className="text-center mt-3">
//                   <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
//                     {subject.data[0].value.toFixed(1)}%
//                   </h4>
//                   {subject.data[0].value >= 75 ? (
//                     <div className="text-success">Out Standing ✓</div>
//                   ) : (
//                     <div className="text-danger">Needs Attention !</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AttendanceView;



//final second
// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [endAngles, setEndAngles] = useState({}); // Stores the end angle for each subject

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();

//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         subject: subject,
//         data: [
//           { name: 'Present', value: percentage },
//           { name: 'Absent', value: 100 - percentage }
//         ]
//       }));

//       setSubjectAttendance(chartData);
//       setLoading(false);

//       // Initialize animation angles
//       const initialAngles = {};
//       chartData.forEach(({ subject }) => {
//         initialAngles[subject] = 0; // Start from 0°
//       });
//       setEndAngles(initialAngles);

//       // Animate pie charts
//       chartData.forEach(({ subject }) => animatePieChart(subject));
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const animatePieChart = (subject) => {
//     let angle = 0;
//     const interval = setInterval(() => {
//       angle += 10; // Increase angle gradually
//       if (angle > 360) {
//         clearInterval(interval);
//         angle = 360; // Stop exactly at 360°
//       }
//       setEndAngles((prev) => ({ ...prev, [subject]: angle }));
//     }, 50); // Adjust speed (lower = faster, higher = slower)
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div style={{ 
//           backgroundColor: 'white', 
//           padding: '10px', 
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}>
//           <p>{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (loading) {
//     return (
//       <div className="text-center p-4">
//         Loading attendance data...
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h4 className="mb-4 text-center">Subject-wise Attendance Dashboard</h4>
      
//       <div className="row g-4">
//         {subjectAttendance.map((subject) => (
//           <div className="col-md-6 col-lg-4" key={subject.subject}>
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
//               <div className="card-body">
//                 <h5 className="card-title text-center mb-3">{subject.subject}</h5>
                
//                 <div style={{ height: '200px', width: '100%' }}>
//                   <ResponsiveContainer>
//                     <PieChart>
//                       <Pie
//                         data={subject.data}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={70}
//                         innerRadius={50}
//                         startAngle={0}  // Start from 0°
//                         isAnimationActive={true}
//                         animationBegin={0}
//                         endAngle={endAngles[subject.subject] || 0}  // Dynamic animation
//                         animationDuration={800}
//                         animationEasing='linear'
//                       >
//                         <Cell fill="#28a745" /> {/* Present */}
//                         <Cell fill="#dc3545" /> {/* Absent */}
//                       </Pie>
//                       <Tooltip content={<CustomTooltip />} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
                
//                 <div className="text-center mt-3">
//                   <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
//                     {subject.data[0].value.toFixed(1)}%
//                   </h4>
//                   {subject.data[0].value >= 75 ? (
//                     <div className="text-success">Outstanding ✓</div>
//                   ) : (
//                     <div className="text-danger">Needs Attention !</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AttendanceView;

// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [animationComplete, setAnimationComplete] = useState({});

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();

//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         subject: subject,
//         data: [
//           { name: 'Present', value: percentage },
//           { name: 'Absent', value: 100 - percentage }
//         ]
//       }));

//       setSubjectAttendance(chartData);
      
//       // Initialize animation state
//       const initialAnimationState = {};
//       chartData.forEach(({ subject }) => {
//         initialAnimationState[subject] = false;
//       });
//       setAnimationComplete(initialAnimationState);

//       setLoading(false);

//       // Animate charts sequentially
//       const animateCharts = async () => {
//         for (const subject of chartData) {
//           await animatePieChart(subject.subject);
//         }
//       };

//       animateCharts();
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const animatePieChart = (subject) => {
//     return new Promise((resolve) => {
//       let angle = 0;
//       const interval = setInterval(() => {
//         angle += 10;
//         if (angle > 360) {
//           clearInterval(interval);
//           setAnimationComplete(prev => ({...prev, [subject]: true}));
//           resolve();
//         }
//       }, 20);
//     });
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div style={{ 
//           backgroundColor: 'white', 
//           padding: '10px', 
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}>
//           <p>{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (loading) {
//     return (
//       <div className="text-center p-4">
//         Loading attendance data...
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h4 className="mb-4 text-center">Subject-wise Attendance Dashboard</h4>
      
//       <div className="row g-4">
//         {subjectAttendance.map((subject) => (
//           <div className="col-md-6 col-lg-4" key={subject.subject}>
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
//               <div className="card-body">
//                 <h5 className="card-title text-center mb-3">{subject.subject}</h5>
                
//                 <div style={{ height: '200px', width: '100%' }}>
//                   <ResponsiveContainer>
//                     <PieChart>
//                       <Pie
//                         data={subject.data}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={70}
//                         innerRadius={50}
//                         startAngle={0}
//                         endAngle={animationComplete[subject.subject] ? 360 : 0}
//                         isAnimationActive={true}
//                         animationBegin={0}
//                         animationDuration={800}
//                         animationEasing='linear'
//                       >
//                         <Cell fill="#28a745" /> {/* Present */}
//                         <Cell fill="#dc3545" /> {/* Absent */}
//                       </Pie>
//                       <Tooltip content={<CustomTooltip />} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
                
//                 <div className="text-center mt-3">
//                   <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
//                     {subject.data[0].value.toFixed(1)}%
//                   </h4>
//                   {subject.data[0].value >= 75 ? (
//                     <div className="text-success">Outstanding ✓</div>
//                   ) : (
//                     <div className="text-danger">Needs Attention !</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AttendanceView;


import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import Lottie from 'react-lottie-player';
import studentAnimation from '../animations/scan.json';

const AttendanceView = ({ studentPrn }) => {
  const [subjectAttendance, setSubjectAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDataReady, setIsDataReady] = useState(false); // Control first render

  useEffect(() => {
    fetchSubjectAttendance();
  }, [studentPrn]);

  const fetchSubjectAttendance = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
      if (!response.ok) throw new Error('Failed to fetch attendance data');
      const data = await response.json();
      
      const chartData = Object.entries(data).map(([subject, percentage]) => ({
        subject: subject,
        data: [
          { name: 'Present', value: percentage },
          { name: 'Absent', value: 100 - percentage }
        ]
      }));
      
      setSubjectAttendance(chartData);
      setLoading(false);
      
      // Introduce a slight delay before setting data ready to prevent flickering
      setTimeout(() => setIsDataReady(true), 100);
      
    } catch (err) {
      console.error('Error fetching attendance:', err);
      setLoading(false);
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ 
          backgroundColor: 'white', 
          padding: '10px', 
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}>
          <p>{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  if (loading || !isDataReady) {
    return (
      <div className="text-center p-4">
        Loading attendance data...
        <Lottie
            loop
            animationData={studentAnimation}
            play
            style={{ width: '300px', height: '300px', margin: '0 auto' }}
          />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h4 className="mb-4 text-center">Subject-wise Attendance</h4>
      
      <div className="row g-4">
        {subjectAttendance.map((subject) => (
          <div className="col-md-6 col-lg-4" key={subject.subject}>
            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-body">
                <h5 className="card-title text-center mb-3">{subject.subject}</h5>
                
                <div style={{ height: '200px', width: '100%' }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={subject.data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={70}
                        innerRadius={50}
                        startAngle={90} 
                        endAngle={-270} 
                        isAnimationActive={true} 
                        animationBegin={0} 
                        animationDuration={2000} 
                        animationEasing="ease-in-out"
                      >
                        <Cell fill="#28a745" /> {/* Present */}
                        <Cell fill="#dc3545" /> {/* Absent */}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="text-center mt-3">
                  <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
                    {subject.data[0].value.toFixed(1)}%
                  </h4>
                  {subject.data[0].value >= 75 ? (
                    <div className="text-success">Outstanding ✓</div>
                  ) : (
                    <div className="text-danger">Needs Attention !</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceView;



// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
// import { motion } from 'framer-motion';

// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();
      
//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         subject: subject,
//         data: [
//           { name: 'Present', value: percentage },
//           { name: 'Absent', value: 100 - percentage }
//         ]
//       }));
      
//       setSubjectAttendance(chartData);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div style={{ 
//           backgroundColor: 'white', 
//           padding: '10px', 
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}>
//           <p>{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (loading) {
//     return (
//       <motion.div className="text-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//         Loading attendance data...
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
//       <h4 className="mb-4 text-center">Subject-wise Attendance Dashboard</h4>
      
//       <div className="row g-4">
//         {subjectAttendance.map((subject) => (
//           <motion.div className="col-md-6 col-lg-4" key={subject.subject} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
//               <div className="card-body">
//                 <h5 className="card-title text-center mb-3">{subject.subject}</h5>
                
//                 <motion.div style={{ height: '200px', width: '100%' }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
//                   <ResponsiveContainer>
//                     <PieChart>
//                       <Pie
//                         data={subject.data}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={70}
//                         innerRadius={50}
//                         fill="#8884d8"
//                         animationDuration={800}
//                       >
//                         <Cell fill="#28a745" /> {/* Present */}
//                         <Cell fill="#dc3545" /> {/* Absent */}
//                       </Pie>
//                       <Tooltip content={<CustomTooltip />} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </motion.div>
                
//                 <div className="text-center mt-3">
//                   <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
//                     {subject.data[0].value.toFixed(1)}%
//                   </h4>
//                   {subject.data[0].value >= 75 ? (
//                     <div className="text-success">Outstanding ✓</div>
//                   ) : (
//                     <div className="text-danger">Needs Attention !</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default AttendanceView;

// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
// import { motion } from 'framer-motion';

// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();
      
//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         subject: subject,
//         data: [
//           { name: 'Present', value: percentage },
//           { name: 'Absent', value: 100 - percentage }
//         ]
//       }));
      
//       setSubjectAttendance(chartData);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div style={{ 
//           backgroundColor: 'white', 
//           padding: '10px', 
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}>
//           <p>{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (loading) {
//     return (
//       <motion.div className="text-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//         Loading attendance data...
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
//       <h4 className="mb-4 text-center">Subject-wise Attendance Dashboard</h4>
      
//       <div className="row g-4">
//         {subjectAttendance.map((subject) => (
//           <motion.div className="col-md-6 col-lg-4" key={subject.subject} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
//               <div className="card-body">
//                 <h5 className="card-title text-center mb-3">{subject.subject}</h5>
                
//                 <motion.div style={{ height: '200px', width: '100%' }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
//                   <ResponsiveContainer>
//                     <PieChart>
//                       <Pie
//                         data={subject.data}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={70}
//                         innerRadius={50}
//                         fill="#8884d8"
//                         animationDuration={800}
//                         startAngle={0}
//                         endAngle={360}
//                       >
//                         <Cell fill="#28a745" /> {/* Present */}
//                         <Cell fill="#dc3545" /> {/* Absent */}
//                       </Pie>
//                       <Tooltip content={<CustomTooltip />} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </motion.div>
                
//                 <div className="text-center mt-3">
//                   <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
//                     {subject.data[0].value.toFixed(1)}%
//                   </h4>
//                   {subject.data[0].value >= 75 ? (
//                     <div className="text-success">Outstanding ✓</div>
//                   ) : (
//                     <div className="text-danger">Needs Attention !</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default AttendanceView;

// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
// import { motion } from 'framer-motion';

// const AttendanceView = ({ studentPrn }) => {
//   const [subjectAttendance, setSubjectAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSubjectAttendance();
//   }, [studentPrn]);

//   const fetchSubjectAttendance = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/students/${studentPrn}/attendance-percentage/subject-wise`);
//       if (!response.ok) throw new Error('Failed to fetch attendance data');
//       const data = await response.json();
      
//       const chartData = Object.entries(data).map(([subject, percentage]) => ({
//         subject: subject,
//         data: [
//           { name: 'Present', value: percentage },
//           { name: 'Absent', value: 100 - percentage }
//         ]
//       }));
      
//       setSubjectAttendance(chartData);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching attendance:', err);
//       setLoading(false);
//     }
//   };

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div style={{ 
//           backgroundColor: 'white', 
//           padding: '10px', 
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}>
//           <p>{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (loading) {
//     return (
//       <motion.div className="text-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//         Loading attendance data...
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
//       <h4 className="mb-4 text-center">Subject-wise Attendance Dashboard</h4>
      
//       <div className="row g-4">
//         {subjectAttendance.map((subject) => (
//           <motion.div className="col-md-6 col-lg-4" key={subject.subject} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//             <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
//               <div className="card-body">
//                 <h5 className="card-title text-center mb-3">{subject.subject}</h5>
                
//                 <motion.div style={{ height: '200px', width: '100%' }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
//                   <ResponsiveContainer>
//                     <PieChart>
//                       <Pie
//                         data={subject.data}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={80}
//                         innerRadius={60}
//                         fill="#8884d8"
//                          startAngle={90}
//                          endAngle={-270}
//                         isAnimationActive={true}
//                         animationBegin={0}
//                         animationDuration={1000}
//                         animationEasing="ease-out"
//                       >
//                         <Cell fill="#28a745" /> {/* Present */}
//                         <Cell fill="#dc3545" /> {/* Absent */}
//                       </Pie>
//                       <Tooltip content={<CustomTooltip />} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </motion.div>
                
//                 <div className="text-center mt-3">
//                   <h4 className={subject.data[0].value >= 75 ? 'text-success' : 'text-danger'}>
//                     {subject.data[0].value.toFixed(1)}%
//                   </h4>
//                   {subject.data[0].value >= 75 ? (
//                     <div className="text-success">Outstanding ✓</div>
//                   ) : (
//                     <div className="text-danger">Needs Attention !</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default AttendanceView;
