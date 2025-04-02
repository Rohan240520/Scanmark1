
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // Add this

// const ForgotPassword = () => {
//   const navigate = useNavigate();  // Add this
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');
//     setError('');

//     try {
//       const response = await fetch('http://localhost:8081/api/students/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setMessage(data.message);
//         // Store email for ResetPassword component
//         localStorage.setItem('resetEmail', email);
//         // Navigate after a short delay to show success message
//         setTimeout(() => {
//           navigate('/reset-password');
//         }, 2000);
//       } else {
//         setError(data.message || 'Failed to process request');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
//       <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
//         <div>
//           <h2 className="text-center text-2xl font-bold text-gray-900">
//             Forgot Password
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           {message && (
//             <div className="p-4 rounded-md bg-green-50 text-green-800">
//               {message}
//             </div>
//           )}

//           {error && (
//             <div className="p-4 rounded-md bg-red-50 text-red-800">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//           >
//             {loading ? 'Sending Reset Link...' : 'Reset Password'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const ForgotPassword = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      //const token = 'Bearer ' + localStorage.getItem('studentToken');
      const apiEndpoint = role === 'faculty' 
      ? `http://localhost:8081/api/${role}/forgot-password`
      : `http://localhost:8081/api/${role}s/forgot-password`;
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: token,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        localStorage.setItem("resetEmail", email);
        setTimeout(() => {
          navigate(`/reset-password/${role}`);
        }, 2000);
      } else {
        setError(data.message || "Failed to process request");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "10px", backgroundColor: "#F2F5F9" }}>
        <h2 className="text-center mb-4" style={{ color: "#166534" }}>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold", color: "#166534" }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ backgroundColor: "#E3F2FD", borderColor: "#B0BEC5" }}
            />
          </div>

          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <button
            type="submit"
            className="btn w-100"
            disabled={loading}
            style={{ backgroundColor: "#E25C48", color: "white", fontWeight: "bold" }}
          >
            {loading ? "Sending Reset Link..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;


