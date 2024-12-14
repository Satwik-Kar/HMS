import {motion} from "framer-motion";
import {useState} from "react";

const initialDoctorsData = [
    {
        id: 1,
        name: "Dr. Aditi Sharma",
        specialty: "Cardiology",
        experience: "15 years",
        qualification: "MBBS, MD (Cardiology)",
        department: "Cardiology",
        shift: "Day Shift (9 AM - 5 PM)",
        salary: "₹1,50,000",
        contact: "aditi.sharma@hospital.com",
        employmentStatus: "Active",
    },
    {
        id: 2,
        name: "Dr. Rajesh Kapoor",
        specialty: "Neurology",
        experience: "12 years",
        qualification: "MBBS, DM (Neurology)",
        department: "Neurology",
        shift: "Night Shift (8 PM - 8 AM)",
        salary: "₹1,80,000",
        contact: "rajesh.kapoor@hospital.com",
        employmentStatus: "Active",
    },
    {
        id: 3,
        name: "Dr. Priya Menon",
        specialty: "Pediatrics",
        experience: "8 years",
        qualification: "MBBS, DCH (Pediatrics)",
        department: "Pediatrics",
        shift: "Day Shift (10 AM - 6 PM)",
        salary: "₹1,20,000",
        contact: "priya.menon@hospital.com",
        employmentStatus: "On Leave",
    },
    {
        id: 4,
        name: "Dr. Arjun Mehta",
        specialty: "Orthopedics",
        experience: "10 years",
        qualification: "MBBS, MS (Orthopedics)",
        department: "Orthopedics",
        shift: "Evening Shift (2 PM - 10 PM)",
        salary: "₹1,40,000",
        contact: "arjun.mehta@hospital.com",
        employmentStatus: "Active",
    },
];

export default function Doctors() {
    const [doctors, setDoctors] = useState(initialDoctorsData);

    const handleDelete = (id) => {
        const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);
        setDoctors(updatedDoctors);
    };

    const handleEdit = (id) => {
        alert(`Edit doctor with ID: ${id}`);
        // Implement edit logic/modal here
    };

    const handleAddDoctor = () => {
        alert("Add new doctor");
        // Implement add doctor form/modal here
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
                {/* Header */}
                <motion.h1
                    className="text-3xl font-bold text-primary mb-6 text-center"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    Doctor Management
                </motion.h1>

                {/* Add Doctor Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleAddDoctor}
                        className="bg-accent text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                    >
                        + Add Doctor
                    </button>
                </div>

                {/* Responsive Table Container */}
                <div className="overflow-x-auto">
                    <motion.table
                        className="w-full border-collapse bg-gray-50 shadow rounded-md max-w-full"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8}}
                    >
                        <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-3 text-left">ID</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Specialty</th>
                            <th className="p-3 text-left">Experience</th>
                            <th className="p-3 text-left">Qualification</th>
                            <th className="p-3 text-left">Department</th>
                            <th className="p-3 text-left">Shift</th>
                            <th className="p-3 text-left">Salary</th>
                            <th className="p-3 text-left">Contact</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {doctors.map((doctor, index) => (
                            <tr
                                key={doctor.id}
                                className={`${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                } hover:bg-gray-200 transition`}
                            >
                                <td className="p-3">{doctor.id}</td>
                                <td className="p-3">{doctor.name}</td>
                                <td className="p-3">{doctor.specialty}</td>
                                <td className="p-3">{doctor.experience}</td>
                                <td className="p-3">{doctor.qualification}</td>
                                <td className="p-3">{doctor.department}</td>
                                <td className="p-3">{doctor.shift}</td>
                                <td className="p-3">{doctor.salary}</td>
                                <td className="p-3">{doctor.contact}</td>
                                <td
                                    className={`p-3 font-semibold ${
                                        doctor.employmentStatus === "Active"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {doctor.employmentStatus}
                                </td>
                                <td className="p-3 flex justify-center gap-4">
                                    <button
                                        onClick={() => handleEdit(doctor.id)}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(doctor.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </motion.table>
                </div>
            </div>
        </div>
    );
}
