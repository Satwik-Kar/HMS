"use client";
import {useState} from "react";
import "../../app/globals.css";
import {v4 as uuidv4} from 'uuid';
import {addDoc, collection} from 'firebase/firestore';

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {encrypt} from "@/app/security/cryptography";
import User from "@/app/models/User";
import {db} from "../../../firebase.config";
import Hashing from "@/app/security/Hashing";
import Loader from "@/app/components/loader_component";

const addUser = async (details) => {
    try {
        const docRef = await addDoc(collection(db, "users"), details);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
export default function Registration() {
    // State variables for form inputs
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: "",
        role: "",
    });

    // Handle input change
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle form submission
    const submit = (e) => {
        setLoading(true);
        e.preventDefault();


        const name = formData.fullName;
        let email = formData.email;
        const password = formData.password;
        let confirmPassword = formData.confirmPassword;
        const phone = formData.contact
        const role = formData.role;
        let status = performCheck(name, email, password, confirmPassword, phone, role);
        if (status.success) {
            console.log("success");
            let uid = uuidv4();
            email = encrypt(email)
            confirmPassword = Hashing.hashPassword(confirmPassword)
            let user = new User(uid, name, email, confirmPassword, role, phone, "", {})
            let obj = user.toFirestore()
            addUser(obj).then(() => {
                toast("SUCCESS")
                setLoading(false);

            }).catch((err) => {
                toast("FAILED")
                setLoading(false);


            })


        } else {
            let errors = status.errors;
            for (let i = 0; i < errors.length; i++) {
                toast(errors[i])

            }
            setLoading(false);


        }

    };

    function performCheck(name, email, password, confirmPassword, phone, role) {
        let idx = 0;
        let _idx = 5;
        const phoneRegex = /^\+\d+/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let roles = ['admin', "doctor", "nurse", "receptionist", "patient"]
        let errors = []
        if (name.length > 0) {
            idx += 1;
        } else {
            errors.push("Name should not be empty")
        }
        if (emailRegex.test(email)) {
            idx += 1;
        } else {
            errors.push("Wrong email format")
        }
        if (password === confirmPassword) {
            idx += 1;
        } else {
            errors.push("Confirm password mismatch")
        }

        if (phoneRegex.test(phone)) {
            idx += 1
        } else {
            errors.push("Add country code to phone number")
        }
        if (roles.includes(role)) {
            idx += 1;
        } else {
            errors.push("Select a role")
        }

        if ((errors.length === 0) && (idx === _idx)) {
            return {success: true}
        } else {

            return {success: false, errors: errors}
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-accent to-primary">
            <div
                className="border-2 border-black bg-transparent backdrop-blur-lg p-8 rounded-lg shadow-md max-w-md w-full justify-center items-center">
                <img
                    className="bg-transparent mx-auto rounded-2xl"
                    src="/logos/secondary.webp"
                    alt="logo"
                    width={100}
                    height={100}
                />
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Pulse360 Registration</h2>

                <form onSubmit={submit}>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-primary"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="text-primary w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="text-primary w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="text-primary w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="mb-4">
                        <label
                            htmlFor="contact"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contact"
                            className="text-primary w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your contact number"
                            value={formData.contact}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Role Dropdown */}
                    <div className="mb-4">
                        <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Role
                        </label>
                        <select
                            id="role"
                            className="text-primary w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="">Select your role</option>
                            <option value="admin">Admin</option>
                            <option value="doctor">Doctor</option>
                            <option value="nurse">Nurse</option>
                            <option value="receptionist">Receptionist</option>
                            <option value="patient">Patient</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center items-center">
                        {loading ? (<Loader/>) : (<button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            Register
                        </button>)}


                    </div>
                </form>

                {/* Login Link */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
            <ToastContainer/>
        </div>
    );
}
