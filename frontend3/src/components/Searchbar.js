// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SearchBar = ({ onSearch, onNavigate }) => {
//   const [query, setQuery] = useState("");
//   const [showProfile, setShowProfile] = useState(false);

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
//         <div className="container-fluid">
//           <div className="d-flex align-items-center mx-auto">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               alt="Profile Icon"
//               className="rounded-circle me-2"
//               style={{ width: "40px", height: "40px", cursor: "pointer" }}
//               onClick={() => setShowProfile(!showProfile)}
//             />
//             <span className="profile_name">Swati Salunkhe</span>
//           </div>
//           <div className="d-flex">
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search by PRN"
//                 aria-label="Search"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//               <button
//                 className="btn btn-outline-success"
//                 type="button"
//                 onClick={handleSearch}
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//           {/* Add navigation buttons */}
//           <div className="ms-auto">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => onNavigate("students")}
//             >
//               Students
//             </button>
//             <button
//               className="btn btn-secondary me-2"
//               onClick={() => onNavigate("faculty")}
//             >
//               Faculty
//             </button>
//           </div>
//         </div>
//       </nav>
//       {/* {showProfile && <AdminProfile className="admin-profile" />} */}
//     </div>
//   );
// };

// export default SearchBar;






// 





import { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const SearchBar = ({ onSearch, onNavigate }) => {
  const [query, setQuery] = useState("")
  const [showProfile, setShowProfile] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query) 
  }
   const [profileData, setProfileData] = useState({
      name: "",
      email: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("studentToken");
        const fetchProfileData = async () => {
          try {
            const response = await fetch("http://localhost:8081/api/coordinators/profile",
              {
                method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            }
              }
            );
            if (!response.ok) {
              throw new Error("Failed to fetch profile data");
            }
            const data = await response.json();
            setProfileData(data);
          } catch (error) {
            console.error("Error fetching profile data:", error);
          }
        };
    
        fetchProfileData();
      }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center mx-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile Icon"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={() => setShowProfile(!showProfile)}
            />
            <span className="profile_name">{profileData.name}</span>
          </div>
          <div className="d-flex">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by PRN"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="ms-auto">
            {/* <button className="btn btn-primary me-2" onClick={() => onNavigate("students")}>
              Students
            </button>
            <button className="btn btn-secondary me-2" onClick={() => onNavigate("faculty")}>
              Faculty
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SearchBar

