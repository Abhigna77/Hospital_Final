// import React, { useState } from 'react';
// import '../styles/DoctorDashboard.css';
// import Doctor_Appointments from './Doctor_Appointments'; 
// import Doctor_TreatedPatients from './Doctor_TreatedPatients';
// import Doctor_Prescriptions from './Doctor_Prescriptions';

// const Doctor_Dashboard = () => {
//     const [selectedPage, setSelectedPage] = useState('dashboard');

//     const renderContent = () => {
//         switch (selectedPage) {
//             case 'appointments':
//                 return <Doctor_Appointments />;
//             case 'treated':
//                 return <Doctor_TreatedPatients />;
//             case 'prescriptions':
//                 return <Doctor_Prescriptions />;
//             default:
//                 return (
//                     <div className="dashboard-main">
//                         <div className="doctor-profile-card">
//                             <img src="/images/doctor1.jpg" alt="Dr. Martin Deo" className="doctor-image" />
//                             <div className="doctor-info">
//                                 <h2 className="doctor-name">Dr. Martin Deo</h2>
//                                 <p className="doctor-qual">MBBS, MD (Cardiology)</p>
//                             </div>
//                         </div>

//                         <div className="grid-cards">
//                             <div className="card" onClick={() => setSelectedPage('appointments')}>
//                                 <div className="card-title">Appointments</div>
//                                 <div className="card-subtext">View all scheduled patients</div>
//                             </div>
//                             <div className="card" onClick={() => setSelectedPage('treated')}>
//                                 <div className="card-title">Treated Patients</div>
//                                 <div className="card-subtext">List of recently treated patients</div>
//                             </div>
//                             <div className="card" onClick={() => setSelectedPage('prescriptions')}>
//                                 <div className="card-title">Prescriptions</div>
//                                 <div className="card-subtext">Manage and review prescriptions</div>
//                             </div>
//                         </div>
//                     </div>
//                 );
//         }
//     };

//     const goToLogout = () => {
//         alert("Logged out successfully!");
//     };

//     return (
//         <div className="doctor-dashboard">
//             <header className="header glass">
//                 <div className="logo">🏥 MedPool Hospital</div>
//                 <div>
//                     <button onClick={goToLogout} className="logout-button">Logout</button>
//                 </div>
//             </header>

//             <div className="dashboard-container">
//                 <div className="sidebar">
//                     <div className={`menu-item ${selectedPage === 'dashboard' ? 'active' : ''}`} onClick={() => setSelectedPage('dashboard')}>
//                         Home
//                     </div>
//                     <div className={`menu-item ${selectedPage === 'appointments' ? 'active' : ''}`} onClick={() => setSelectedPage('appointments')}>
//                         Appointments
//                     </div>
//                     <div className={`menu-item ${selectedPage === 'treated' ? 'active' : ''}`} onClick={() => setSelectedPage('treated')}>
//                         Treated Patients
//                     </div>
//                     <div className={`menu-item ${selectedPage === 'prescriptions' ? 'active' : ''}`} onClick={() => setSelectedPage('prescriptions')}>
//                         Prescriptions
//                     </div>
//                 </div>
//                 <div className="main-content">
//                     {renderContent()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Doctor_Dashboard;

import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import '../styles/DoctorDashboard.css';
import Doctor_Appointments from './Doctor_Appointments';
import Doctor_TreatedPatients from './Doctor_TreatedPatients';
import Doctor_Prescriptions from './Doctor_Prescriptions';
import Doctor_Profile from './Doctor_Profile';
import Doctor_Patient_Query from './Doctor_Patient_Query';
import Navbar from './Navbar';

const Doctor_Dashboard = () => {
    const navigate = useNavigate();

    const goToLogout = () => {
        alert("Logged out successfully!");
        // Optional: navigate("/login");
    };

    return (
        <div className="doctor-dashboard">
            {/* Navbar */}
            {/* <header className="header glass">
                <div className="logo">🏥 MedPool Hospital</div>
                <div>
                    <button onClick={goToLogout} className="logout-button">Logout</button>
                </div>
            </header> */}
            <Navbar />

            {/* Main Layout */}
            <div className="dashboard-container">
                <div className="sidebar">
                    <Link to="/doctor" className="menu-item">Home</Link>
                    <Link to="/doctor/appointments" className="menu-item">Appointments</Link>
                    <Link to="/doctor/treated" className="menu-item">Treated Patients</Link>
                    <Link to="/doctor/prescriptions" className="menu-item">Prescriptions</Link>
                    <Link to="/doctor/profile" className="menu-item">Profile</Link>
                    <Link to="/doctor/patient-query" className="menu-item">Patient Query</Link>


                </div>

                <div className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="dashboard-main">
                                    <div className="doctor-profile-card">
                                        <img src="/images/doctor1.jpg" alt="Dr. Martin Deo" className="doctor-image" />
                                        <div className="doctor-info">
                                            <h2 className="doctor-name">Dr. Martin Deo</h2>
                                            <p className="doctor-qual">MBBS, MD (Cardiology)</p>
                                        </div>
                                    </div>

                                    <div className="grid-cards">
                                        <div className="card" onClick={() => navigate('/doctor/appointments')}>
                                            <div className="card-title">Appointments</div>
                                            <div className="card-subtext">View all scheduled patients</div>
                                        </div>
                                        <div className="card" onClick={() => navigate('/doctor/treated')}>
                                            <div className="card-title">Treated Patients</div>
                                            <div className="card-subtext">List of recently treated patients</div>
                                        </div>
                                        <div className="card" onClick={() => navigate('/doctor/prescriptions')}>
                                            <div className="card-title">Prescriptions</div>
                                            <div className="card-subtext">Manage and review prescriptions</div>
                                        </div>
                                        <div className="card" onClick={() => navigate('/doctor/profile')}>
                                            <div className="card-title">Profile</div>
                                            <div className="card-subtext">View Profile</div>
                                        </div>
                                        <div className="card" onClick={() => navigate('/doctor/patient-query')}>
                                            <div className="card-title">Patient Query</div>
                                            <div className="card-subtext">Query a Patient</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <Route path="appointments" element={<Doctor_Appointments />} />
                        <Route path="treated" element={<Doctor_TreatedPatients />} />
                        <Route path="prescriptions" element={<Doctor_Prescriptions />} />
                        <Route path="profile" element={<Doctor_Profile />} />
                        <Route path="patient-query" element={<Doctor_Patient_Query />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Doctor_Dashboard;
