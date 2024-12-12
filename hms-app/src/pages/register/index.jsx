"use client";
import '../../app/globals.css'

export default function Registration() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-accent to-primary">
            <div className="border-2 border-black bg-transparent backdrop-blur-lg p-8 rounded-lg shadow-md max-w-md w-full justify-center items-center">
                <img className={"bg-transparent mx-auto rounded-2xl"} src={"/logos/secondary.webp"} alt="logo" width={100} height={100}/>
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Pulse360 Registration</h2>

                <form>
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
                            className=" text-primaryw-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your password"
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
                            className=" text-primaryw-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Confirm your password"
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
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            Register
                        </button>
                    </div>
                </form>

                {/* Login Link */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
}
