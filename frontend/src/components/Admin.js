
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import '../styles/Admin.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Navbar from './Navbar';

// Components
const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
                <li onClick={() => navigate("/admin/doctors")}>Doctor List</li>
                <li onClick={() => navigate("/admin/patients")}>Patient List</li>
                <li onClick={() => navigate("/admin/frontdesk")}>Front Desk List</li>
                 <li onClick={() => navigate("/admin/dataentry")}>DataEntry List</li> 
                <li onClick={() => navigate("/admin/manage-member")}>Manage Members</li>
            </ul>
        </div>
    );
};

// const Topbar = () => (
//     <div className="topbar">
//         <span>🏥 Medpool</span>
//         <a href="#" className="logout">Logout</a>
//     </div>
// );

// Pages
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="dashboard-main">
            <h2>WELCOME ADMIN</h2>
            <div className="card-container">
                <div className="card" onClick={() => navigate("/admin/doctors")}><div>🩺</div><p>Doctor List</p></div>
                <div className="card" onClick={() => navigate("/admin/patients")}><div>👥</div><p>Patient List</p></div>
                <div className="card" onClick={() => navigate("/admin/frontdesk")}><div>📅</div><p>Front Desk List</p></div>
                <div className="card" onClick={() => navigate("/admin/manage-member")}><div>➕</div><p>Manage Members</p></div>
                {/* <div className="card" onClick={() => navigate("/admin/dataentry")}><div>➕</div><p>DataEntry</p></div> */}
                <div className="card" onClick={() => navigate("/admin/dataentry")}>
  <div>🧾</div> {/* clipboard icon */}
  <p>DataEntry</p>
</div>
            </div>
        </div>
    );
};



const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
      const fetchDoctors = async () => {
        try {
          const res = await axiosInstance.get('/api/registrations');
          const allUsers = res.data;
          const filteredDoctors = allUsers.filter(user => user.role === 'doctor');
          setDoctors(filteredDoctors);
        } catch (err) {
          console.error("Error fetching doctors:", err);
        }
      };
  
      fetchDoctors();
    }, []);
  
    return (
      <div className="doctor-list-container">
        <h2>Doctor List</h2>
        <div className="search-bar">
          <input type="text" placeholder="Enter Email ID" />
          <button>Search</button>
        </div>
        <table className="doctor-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Doctor Name</th>
              <th>Email</th>
              {/* <th>Password</th>  You can uncomment if needed, but avoid showing passwords */}
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.name}</td>
                <td>{doc.email}</td>
                {/* <td>{doc.password}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const DataEntryList = () => {
    const [dataEntryUsers, setDataEntryUsers] = useState([]);
  
    useEffect(() => {
      const fetchDataEntryUsers = async () => {
        try {
          const res = await axiosInstance.get('/api/registrations');
          const allUsers = res.data;
          const filteredDataEntry = allUsers.filter(user => user.role === 'dataentry');
          setDataEntryUsers(filteredDataEntry);
        } catch (err) {
          console.error("Error fetching data entry users:", err);
        }
      };
  
      fetchDataEntryUsers();
    }, []);
  
    return (
      <div className="doctor-list-container">
        <h2>Data Entry User List</h2>
        <div className="search-bar">
          <input type="text" placeholder="Enter Email ID" />
          <button>Search</button>
        </div>
        <table className="doctor-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {dataEntryUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

const PatientList = () => {
    const [patients, setPatients] = useState([]);
  
    useEffect(() => {
      const fetchPatients = async () => {
        try {
          const res = await axiosInstance.get('/api/registrations');
          const allData = res.data;
          const filtered = allData.filter((user) => user.role === 'patient');
          setPatients(filtered);
        } catch (err) {
          console.error("Error fetching patients:", err);
        }
      };
  
      fetchPatients();
    }, []);
  
    return (
      <div className="patient-list-container">
        <h2>Patient List</h2>
        <table className="patient-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


const FrontDeskList = () => {
    const [frontDesks, setFrontDesks] = useState([]);
  
    useEffect(() => {
      const fetchFrontDesks = async () => {
        try {
          const res = await axiosInstance.get('/api/registrations');
          const allUsers = res.data;
          const filteredFrontDesks = allUsers.filter(user => user.role === 'frontdesk');
          setFrontDesks(filteredFrontDesks);
        } catch (err) {
          console.error("Error fetching front desk staff:", err);
        }
      };
  
      fetchFrontDesks();
    }, []);
  
    return (
      <div className="frontdesk-list-container">
        <h2>Front Desk Staff</h2>
        <table className="frontdesk-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Shift</th> */}
            </tr>
          </thead>
          <tbody>
            {frontDesks.map((fd) => (
              <tr key={fd.id}>
                <td>{fd.id}</td>
                <td>{fd.name}</td>
                <td>{fd.email}</td>
                {/* <td>{fd.shift}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


const ManageMember = () => {
    const [action, setAction] = useState("add");
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        role: "patient", // default role
    });
    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle adding a new member
    const handleAddMember = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post("/api/register", formData);
            console.log("Member added successfully:", response.data);
            
            // Show success message
            setSuccessMessage("Member added successfully!");

            // Clear the form after successful submission
            setFormData({
                name: "",
                email: "",
                password: "",
                role: "patient", // reset to default role
                id: "", // clear id after adding
            });

            // Optional: Hide success message after a few seconds
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000); // hide after 3 seconds
        } catch (error) {
            console.error("Error adding member:", error);
            setSuccessMessage("Error adding member, please try again.");
        }
    };

    // Handle deleting a member by ID
    const handleDeleteMember = async (e) => {
        e.preventDefault();

        const { id } = formData;

        if (!id) {
            setSuccessMessage("Please enter a valid ID.");
            return;
        }

        try {
            const response = await axiosInstance.delete("/api/delete-member", { data: { id } });
            console.log("Member deleted successfully:", response.data);

            // Show success message
            setSuccessMessage("Member deleted successfully!");

            // Clear the form after successful deletion
            setFormData({
                name: "",
                email: "",
                password: "",
                role: "patient", // reset to default role
                id: "", // clear id after deletion
            });

            // Optional: Hide success message after a few seconds
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000); // hide after 3 seconds
        } catch (error) {
            console.error("Error deleting member:", error);
            setSuccessMessage("Error deleting member, please try again.");
        }
    };

    return (
        <div className="manage-member">
            <h2>Manage Members</h2>
            <div className="action-tabs">
                <button onClick={() => setAction("add")}>Add Member</button>
                <button onClick={() => setAction("delete")}>Delete Member</button>
            </div>

            {action === "add" ? (
                <form className="member-form" onSubmit={handleAddMember}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="frontdesk">Front Desk</option>
                    </select>
                    <button type="submit">Add Member</button>
                </form>
            ) : (
                <form className="member-form" onSubmit={handleDeleteMember}>
                    <input
                        type="number"
                        name="id"
                        placeholder="ID"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="frontdesk">Front Desk</option>
                    </select>
                    <button type="submit">Delete Member</button>
                </form>
            )}

            {/* Display success message */}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

// Layout component
const Layout = ({ children }) => (
    <div className="layout">
        <Sidebar />
        <div className="main-content">
            <Navbar />
            <div className="page-content">{children}</div>
        </div>
    </div>
);

// Admin Main Component with Routing
const Admin = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="doctors" element={<DoctorList />} />
                <Route path="patients" element={<PatientList />} />
                <Route path="frontdesk" element={<FrontDeskList />} />
                <Route path="dataentry" element={<DataEntryList />} />
                <Route path="manage-member" element={<ManageMember />} />
            </Routes>
        </Layout>
    );
};

export default Admin;
