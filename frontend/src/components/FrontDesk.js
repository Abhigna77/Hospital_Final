import React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import '../styles/FrontDesk.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Navbar from './Navbar';
import axiosInstance from '../utils/axiosInstance';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     alert('Logged out!');
//     navigate('/');
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         🏥 <span className="hospital-name">MedPool Hospitals</span>
//       </div>
//       <div className="navbar-right">
//         <button className="logout-btn" onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// };

const Sidebar = () => (
  <div className="sidebar">
    <h2 className="sidebar-title"><Link to="/frontdesk">Home</Link></h2>
    <ul className="sidebar-nav">
      <li><Link to="/frontdesk/book-appointment">Book Appointment</Link></li>
      <li><Link to="/frontdesk/admit-patient">Admit Patient</Link></li>
      <li><Link to="/frontdesk/doctor-status">Doctor Status</Link></li>
      <li><Link to="/frontdesk/room-status">Room Status</Link></li>
      <li><Link to="/frontdesk/view-appointments">View Appointments</Link></li>
      <li><Link to="/frontdesk/admitted-patients">Admitted Patient List</Link></li>
      <li><Link to="/frontdesk/prescriptions-list">To be Admitted List</Link></li>
      <li><Link to="/frontdesk/view-patient-details">Patient Details List</Link></li>

      <li><Link to="/frontdesk/view-doctor-details">Doctor Details List</Link></li>


    </ul>
  </div>
);

// const ViewPatientDetails = () => (
//   <div className="form-card">
//     <h2>Patient Details</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Patient ID</th>
//           <th>Gender</th>
//           <th>Date of Birth</th>
//           <th>Age</th>
//           <th>Blood Group</th>
//           <th>Phone Number</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>P1001</td>
//           <td>Female</td>
//           <td>2002-06-15</td>
//           <td>22</td>
//           <td>B+</td>
//           <td>9876543210</td>
//         </tr>
//         <tr>
//           <td>P1002</td>
//           <td>Male</td>
//           <td>1998-03-10</td>
//           <td>26</td>
//           <td>O+</td>
//           <td>9123456789</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const ViewPatientDetails = () => {
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     fetch('/api/patient-details')
//       .then((res) => res.json())
//       .then((data) => {
//         setPatients(data.patients);
//       })
//       .catch((err) => {
//         console.error('Error fetching patient details:', err);
//       });
//   }, []);

//   return (
//     <div className="form-card">
//       <h2>Patient Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Patient ID</th>
//             <th>Gender</th>
//             <th>Date of Birth</th>
//             <th>Age</th>
//             <th>Blood Group</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((p) => (
//             <tr key={p.patient_id}>
//               <td>{p.patient_id}</td>
//               <td>{p.gender}</td>
//               <td>{p.dob}</td>
//               <td>{p.age}</td>
//               <td>{p.blood_group}</td>
//               <td>{p.phone_number}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
const ViewPatientDetails = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const res = await axiosInstance.get('/api/patient-details', {
          withCredentials: true, // ✅ To send cookies (token)
        });

        if (res.status === 200) {
          setPatients(res.data.patients);
        } else {
          console.error('Error fetching patient details:', res.status);
        }
      } catch (err) {
        console.error('Error fetching patient details:', err);
      }
    };

    fetchPatientDetails();
  }, []);

  return (
    <div className="form-card">
      <h2>Patient Details</h2>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.patient_id}>
              <td>{p.patient_id}</td>
              <td>{p.gender}</td>
              <td>{p.dob}</td>
              <td>{p.age}</td>
              <td>{p.blood_group}</td>
              <td>{p.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



// const ViewDoctorDetails = () => {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     fetch('/api/doctor-details')
//       .then((res) => res.json())
//       .then((data) => {
//         setDoctors(data.doctors);
//       })
//       .catch((err) => {
//         console.error('Error fetching doctor details:', err);
//       });
//   }, []);

//   return (
//     <div className="form-card">
//       <h2>Doctor Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Doctor ID</th>
//             <th>Name</th>
//             <th>Specialization</th>
//             <th>Phone</th>
//             <th>Gender</th>
//             <th>Experience</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doc) => (
//             <tr key={doc.doctor_id}>
//               <td>{doc.doctor_id}</td>
//               <td>{doc.name}</td>
//               <td>{doc.specialization}</td>
//               <td>{doc.phone}</td>
//               <td>{doc.gender}</td>
//               <td>{doc.experience_years} yrs</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const ViewDoctorDetails = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const res = await axiosInstance.get('/api/doctor-details', {
          withCredentials: true, // ✅ To send cookies (token)
        });

        if (res.status === 200) {
          setDoctors(res.data.doctors);
        } else {
          console.error('Error fetching doctor details:', res.status);
        }
      } catch (err) {
        console.error('Error fetching doctor details:', err);
      }
    };

    fetchDoctorDetails();
  }, []);

  return (
    <div className="form-card">
      <h2>Doctor Details</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc.doctor_id}>
              <td>{doc.doctor_id}</td>
              <td>{doc.name}</td>
              <td>{doc.specialization}</td>
              <td>{doc.phone}</td>
              <td>{doc.gender}</td>
              <td>{doc.experience_years} yrs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const ViewDoctorDetails = () => {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     // Replace this with your actual backend fetch
//     setDoctors([
//       {
//         doctor_id: 'D001',
//         name: 'Dr. John Smith',
//         specialization: 'Cardiology',
//         phone: '9876543210',
//         gender: 'Male',
//         experience_years: 12,
//       },
//       {
//         doctor_id: 'D002',
//         name: 'Dr. Priya Mehta',
//         specialization: 'Dermatology',
//         phone: '9123456789',
//         gender: 'Female',
//         experience_years: 7,
//       },
//     ]);
//   }, []);

//   return (
//     <div className="form-card">
//       <h2>Doctor Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Doctor ID</th>
//             <th>Name</th>
//             <th>Specialization</th>
//             <th>Phone</th>
//             <th>Gender</th>
//             <th>Experience</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doc) => (
//             <tr key={doc.doctor_id}>
//               <td>{doc.doctor_id}</td>
//               <td>{doc.name}</td>
//               <td>{doc.specialization}</td>
//               <td>{doc.phone}</td>
//               <td>{doc.gender}</td>
//               <td>{doc.experience_years} yrs</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


const BookAppointment = () => {
  const [formData, setFormData] = useState({
    appointment_number:'',
    patient_id: '',
   // patient_name:'',
    doctor_id: '',
   // doctor_name:'',
    date: '',
    time: '',
    consultation_room_number: '',
    reason: '',
    previous_medication: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/api/book-delete-appointment', formData, {
        withCredentials: true // Include the cookies with the request
      });

      // Reset form data
      setFormData({
        appointment_number:'',
        patient_id: '',
       // patient_name:'',
        doctor_id: '',
        //doctor_name:'',
        date: '',
        time: '',
        consultation_room_number: '',
        reason: '',
        previous_medication: ''
      });

      // Set success message
      setSuccessMessage('Appointment booked successfully!');
      setErrorMessage(''); // Clear any previous error message
    } catch (err) {
      console.error('Error booking appointment:', err.response?.data || err.message);
      // Set error message
      setErrorMessage('Error booking appointment. Please try again.');
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className="form-card">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
      <label>Appointment Number</label>
        <input
          type="number"
          name="appointment_number"
          value={formData.appointment_number}
          onChange={handleChange}
          placeholder="Enter appointment number"
        />
        <label>Patient ID</label>
        <input
          type="text"
          name="patient_id"
          value={formData.patient_id}
          onChange={handleChange}
          placeholder="Enter patient ID"
        />

        {/* <label>Patient Name</label>
        <input
          type="text"
          name="patient_name"
          value={formData.patient_name}
          onChange={handleChange}
          placeholder="Enter patient name"
        /> */}

        <label>Doctor ID</label>
        <input
          type="text"
          name="doctor_id"
          value={formData.doctor_id}
          onChange={handleChange}
          placeholder="Enter doctor ID"
        />

        {/* <label>Doctor's Name</label>
        <input
          type="text"
          name="doctor_name"
          value={formData.doctor_name}
          onChange={handleChange}
          placeholder="Enter doctor's name"
        /> */}

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <label>Consultation Room Number</label>
        <input
          type="text"
          name="consultation_room_number"
          value={formData.consultation_room_number}
          onChange={handleChange}
          placeholder="Enter consultation room number"
        />

        <label>Reason</label>
        <input
          type="text"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Enter reason for visit"
        />

        <label>Previous Medication</label>
        <input
          type="text"
          name="previous_medication"
          value={formData.previous_medication}
          onChange={handleChange}
          placeholder="Enter previous medication details"
        />

        <button type="submit">Submit</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

// const AdmitPatient = () => (
//   <div className="form-card">
//     <h2>Admit Patient</h2>
//     <form>
//       <label>Patient ID</label>
//       <input type="text" placeholder="Enter patient ID" />
//       {/* <label>Patient Name</label>
//       <input type="text" placeholder="Enter patient name" /> */}
//       <label>Doctor ID</label>
//       <input type="text" placeholder="Enter doctor ID" />
//       {/* <label>Doctor Name</label>
//       <input type="text" placeholder="Enter doctor name" /> */}
//       <label>Reason</label>
//       <input type="text" placeholder="Enter reason for admission" />
//       <label>Admission Room No.</label>
//       <input type="text" placeholder="Enter room number" />
//       <label>Start Date</label>
//       <input type="date" />
//       <label>End Date</label>
//       <input type="date" />
//       <button type="submit">Admit</button>
//     </form>
//   </div>
// );

const AdmitPatient = () => {
  const [formData, setFormData] = useState({
    prescription_number:"",
    patient_id: "",
    doctor_id: "",
    reason: "",
    admission_room_no: "",
    start_date: "",
    end_date: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("/api/admit-patient", formData, {
  //       withCredentials: true, // to include the token cookie
  //     });
  //     setMessage(res.data.message);
  //   } catch (err) {
  //     console.error(err);
  //     setMessage(err.response?.data?.message || "Error admitting patient");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axiosInstance.post("/api/admit-patient", formData, {
        withCredentials: true,
      });
      setMessage(res.data.message);
  
      // Reset form after success
      setFormData({
        prescription_number:"",
        patient_id: "",
        doctor_id: "",
        reason: "",
        admission_room_no: "",
        start_date: "",
        end_date: ""
      });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error admitting patient");
    }
  };
  

  return (
    <div className="form-card">
      <h2>Admit Patient</h2>
      <form onSubmit={handleSubmit}>

      <label>Prescription Number</label>
        <input
          type="text"
          name="prescription_number"
          value={formData.prescription_number}
          onChange={handleChange}
          placeholder="Enter prescription number"
        />

        <label>Patient ID</label>
        <input
          type="text"
          name="patient_id"
          value={formData.patient_id}
          onChange={handleChange}
          placeholder="Enter patient ID"
        />

        <label>Doctor ID</label>
        <input
          type="text"
          name="doctor_id"
          value={formData.doctor_id}
          onChange={handleChange}
          placeholder="Enter doctor ID"
        />

        <label>Reason</label>
        <input
          type="text"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Enter reason for admission"
        />

        <label>Admission Room No.</label>
        <input
          type="text"
          name="admission_room_no"
          value={formData.admission_room_no}
          onChange={handleChange}
          placeholder="Enter room number"
        />

        <label>Start Date</label>
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
        />

        <label>End Date</label>
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
        />

        <button type="submit">Admit</button>
      </form>
      {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}
    </div>
  );
};


const DoctorStatus = () => (
  <div className="form-card">
    <h2>Doctor Status</h2>
    <table>
      <thead>
        <tr>
          <th>Doctor</th>
          <th>Specialization</th>
          <th>Next Slot</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dr. Smith</td>
          <td>Cardiology</td>
          <td>11:00 AM</td>
        </tr>
        <tr>
          <td>Dr. Adams</td>
          <td>Neurology</td>
          <td>Tomorrow 2:00 PM</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// const ViewAppointments = () => (
//   <div className="form-card">
//     <h2>Upcoming Appointments</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Patient Name</th>
//           <th>Patient ID</th>
//           <th>Age</th>
//           <th>Specialization</th>
//           <th>Reason</th>
//           <th>Previous Medication</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>John Doe</td>
//           <td>P123</td>
//           <td>34</td>
//           <td>Cardiology</td>
//           <td>Chest Pain</td>
//           <td>Aspirin</td>
//         </tr>
//         <tr>
//           <td>Jane Roe</td>
//           <td>P456</td>
//           <td>29</td>
//           <td>Neurology</td>
//           <td>Migraine</td>
//           <td>Paracetamol</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );


const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axiosInstance.get('/api/appointments')
      .then(res => {
        console.log('Fetched appointments:', res.data)
        setAppointments(res.data);
      })
      .catch(err => {
      
        console.error('Error fetching appointments:', err);
      });
  }, []); 
  
 

  
 // console.log(appointments)

  return (
    <div className="form-card">
      <h2>Upcoming Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Appointment Number</th>
            <th>Patient Name</th>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Specialization</th>
            <th>Reason</th>
            <th>Previous Medication</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.appt_id}</td>
                <td>{appointment.name || ''}</td>
                <td>{appointment.patient_id || ''}</td>
                <td>{appointment.age || ''}</td>
                <td>{appointment.specialization || ''}</td>
                <td>{appointment.problem || ''}</td>
                <td>{appointment.medications || ''}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No appointments found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


// const To_Be_Admitted = () => {
//   const [prescriptions, setPrescriptions] = useState([]);

//   useEffect(() => {
//     axios.get('/api/prescriptions-dashboard')
//       .then(res => {
//         console.log('Fetched prescriptions:', res.data);
//         setPrescriptions(res.data);
//       })
//       .catch(err => {
//         console.error('Error fetching prescriptions:', err);
//       });
//   }, []);

//   return (
//     <div className="form-card">
//       <h2>To Be Admitted List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Prescription Number</th>
//             <th>Consultation ID</th>
//             <th>Patient ID</th>
//             <th>Doctor ID</th>
//             <th>Diagnosis</th>
//             <th>Recommended Tests</th>
//             <th>Additional Notes</th>
//             <th>Admit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {prescriptions.length > 0 ? (
//             prescriptions.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.p_id}</td>
//                 <td>{item.c_id}</td>
//                 <td>{item.patient_id}</td>
//                 <td>{item.doctor_id}</td>
//                 <td>{item.diagnosis}</td>
//                 <td>{item.recommended_tests}</td>
//                 <td>{item.additional_notes}</td>
//                 <td>{item.admit === 1 ? 'Yes' : 'No'}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7">No prescriptions found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const To_Be_Admitted = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/prescriptions-dashboard')
      .then(res => {
        console.log('Fetched prescriptions:', res.data);
        setPrescriptions(res.data);
      })
      .catch(err => {
        console.error('Error fetching prescriptions:', err);
      });
  }, []);

  const filteredPrescriptions = prescriptions.filter(item => item.status === "pending" && item.admit === 1);

  return (
    <div className="form-card">
      <h2>To Be Admitted List</h2>
      <table>
        <thead>
          <tr>
            <th>Prescription Number</th>
            <th>Consultation ID</th>
            <th>Patient ID</th>
            <th>Doctor ID</th>
            <th>Diagnosis</th>
            <th>Recommended Tests</th>
            <th>Additional Notes</th>
            <th>Admit</th>
          </tr>
        </thead>
        <tbody>
          {filteredPrescriptions.length > 0 ? (
            filteredPrescriptions.map((item, index) => (
              <tr key={index}>
                <td>{item.p_id}</td>
                <td>{item.c_id}</td>
                <td>{item.patient_id}</td>
                <td>{item.doctor_id}</td>
                <td>{item.diagnosis}</td>
                <td>{item.recommended_tests}</td>
                <td>{item.additional_notes}</td>
                <td>Yes</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No patients to be admitted.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const RoomStatus = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/rooms')
      .then(res => {
        setRooms(res.data);
      })
      .catch(err => {
        console.error("Error fetching room data:", err);
      });
  }, []);

  return (
    <div className="form-card">
      <h2>Room Status</h2>
      <div className="room-grid">
        {rooms.map((room) => (
          <div
            key={room.room_number}
            className={`room-box ${room.status === 'not available' ? 'occupied' : 'available'}`}
          >
            {room.room_number}
          </div>
        ))}
      </div>
    </div>
  );
};


const AdmittedPatients = () => {
  const [patients, setPatients] = useState([]);

  // Fetch admitted patients data
  useEffect(() => {
    axiosInstance
      .get("http://localhost:5000/api/admitted-patients")  // Explicitly target backend
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => {
        console.error("Error fetching admitted patients:", err);
      });
  }, []);

  // Handle discharge button click
  const handleDischarge = async (admno) => {
    try {
      // Make API call to discharge patient and update room status
      await axiosInstance.patch(`http://localhost:5000/api/discharge/${admno}`);  // Explicitly target backend

      // Refresh the patient data
      const res = await axiosInstance.get('http://localhost:5000/api/admitted-patients');  // Explicitly target backend
      setPatients(res.data);
    } catch (err) {
      console.error("Discharge failed:", err);
    }
  };

  return (
    <div className="form-card">
      <h2>Admitted Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Admission Number</th>
            <th>Patient Name</th>
            <th>Patient ID</th>
            <th>Doctor ID</th>
            <th>Admission Room No</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.admno}>
              <td>{p.admno}</td>
              <td>{p.patient_name}</td>
              <td>{p.patient_id}</td>
              <td>{p.doctor_id || "N/A"}</td>
              <td>{p.admission_room_no}</td>
              <td>{p.start_date?.slice(0, 10)}</td>
              <td>{p.end_date?.slice(0, 10)}</td>
              <td>{p.status}</td>
              <td>
                {p.status === "admitted" ? (
                  <button onClick={() => handleDischarge(p.admno)}>Discharge</button>
                ) : (
                  <span>Discharged</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const DashboardMain = () => {
  const navigate = useNavigate();
  return (
    <div className="main-cards">
      <h2 className="welcome-text">WELCOME FRONT DESK</h2>
      <div className="card-container">
        <div className="card" onClick={() => navigate("/frontdesk/book-appointment")}> <h3>Book Appointment</h3><p>Schedule a patient</p> </div>
        <div className="card" onClick={() => navigate("/frontdesk/admit-patient")}> <h3>Admit Patient</h3><p>Admit to a ward</p> </div>
        <div className="card" onClick={() => navigate("/frontdesk/doctor-status")}> <h3>Doctor Status</h3><p>Check availability</p> </div>
        <div className="card" onClick={() => navigate("/frontdesk/room-status")}> <h3>Room Status</h3><p>See free rooms</p> </div>
        <div className="card" onClick={() => navigate("/frontdesk/view-appointments")}> <h3>View Appointments</h3><p>Upcoming visits</p> </div>
        <div className="card" onClick={() => navigate("/frontdesk/admitted-patients")}> <h3>Admitted Patient List</h3><p>Current admissions</p> </div>
        <div className="card" onClick={() => navigate("/frontdesk/view-patient-details")}> <h3>Patient Details List</h3><p>View details</p> </div>
        <div className="card" onClick={() => navigate("/frontdesk/view-doctor-details")}> <h3>Doctor Details List</h3><p>View details</p> </div>

      </div>
    </div>
  );
};

const FrontDesk = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<DashboardMain />} />
            <Route path="book-appointment" element={<BookAppointment />} />
            <Route path="admit-patient" element={<AdmitPatient />} />
            <Route path="view-patient-details" element={<ViewPatientDetails />} />

            <Route path="view-doctor-details" element={<ViewDoctorDetails/>} />

            <Route path="doctor-status" element={<DoctorStatus />} />
            <Route path="room-status" element={<RoomStatus />} />
            <Route path="view-appointments" element={<ViewAppointments />} />
            <Route path="admitted-patients" element={<AdmittedPatients />} />
            <Route path="prescriptions-list" element={<To_Be_Admitted />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default FrontDesk;