"use client";
import {useState} from "react";
import "../../app/globals.css";

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {decrypt} from "@/app/security/cryptography";
import User from "@/app/models/User";
import Hashing from "@/app/security/Hashing";
import Loader from "@/app/components/loader_component";
import {db} from "../../../firebase.config";
import {collection, getDocs} from "firebase/firestore";
import {useRouter} from "next/navigation";


export default function Login() {
    // State variables for form inputs
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

    function getSnapshotDocument(querySnapShot, email) {

        for (const doc of querySnapShot.docs) {
            const encryptedEmail = doc.data().email;
            const decryptedEmail = decrypt(encryptedEmail);

            if (decryptedEmail === email) {
                console.log("User exists:", doc.id);
                return doc.data();
            }

        }
        return -1
    }

    async function checkUserExists(user) {
        console.log(user);
        const usersCollection = collection(db, "users");
        const email = user.email
        const password = user.password
        const role = user.role
        const querySnapshot = await getDocs(usersCollection);
        let userDoc = getSnapshotDocument(querySnapshot, email)
        if (userDoc !== -1) {
            const storedHashedPassword = userDoc.password;
            const storedRole = userDoc.role;
            const comparePassword = Hashing.compareHash(password, storedHashedPassword);

            let roleMatch = role === storedRole;
            if (comparePassword && roleMatch) {
                toast("Login successful", {style: {backgroundColor: '#4caf50', color: '#fff'}})
                return true;

            } else {
                toast("Credentials mismatch", {style: {backgroundColor: '#FF4D4F', color: '#fff'}})
                return false;

            }
        } else {

            toast("User do not exist", {style: {backgroundColor: '#FF4D4F', color: '#fff'}})
            return false;
        }


    }

    // Handle form submission
    const submitLogin = (e) => {
        e.preventDefault();
        setLoading(true);


        let email = formData.email;
        const password = formData.password;
        const role = formData.role;
        let status = performCheck(email, password, role);
        if (status.success) {
            console.log("success");
            let user = User.createBasic(email, password, role)
            checkUserExists(user).then((status) => {
                console.log(status);
                if (status) {
                    const router = useRouter();
                    router.push('/home');
                }
                setLoading(false)

            }).catch((err) => {
                toast(err);
                setLoading(false);
            })


        } else {
            let errors = status.errors;
            for (let i = 0; i < errors.length; i++) {
                toast(errors[i], {style: {backgroundColor: '#FF4D4F', color: '#fff'}})

            }
            setLoading(false);


        }

    };

    function performCheck(email, password, role) {
        let idx = 0;
        let _idx = 3;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let roles = ['admin', "doctor", "nurse", "receptionist", "patient"]
        let errors = []

        if (emailRegex.test(email)) {
            idx++;
        } else {
            errors.push("Wrong email format")
        }
        if (password > 0) {
            idx++
        }
        if (roles.includes(role)) {
            idx++;
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
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Pulse360 Login</h2>

                <form onSubmit={submitLogin}>


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
                            Login
                        </button>)}


                    </div>
                </form>

                {/* Login Link */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Do not have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register here
                    </a>
                </p>
            </div>
            <ToastContainer/>
        </div>
    );
}
