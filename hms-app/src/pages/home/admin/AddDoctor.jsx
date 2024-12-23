import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {toast, ToastContainer} from "react-toastify";

export default function AddDoctor() {
    const [formData, setFormData] = useState({
        id: '', // Initially empty, will be autogenerated
        name: '',
        specialty: '',
        experience: 0,
        qualification: '',
        department: '',
        shift_: '',
        salary: 0,
        contact: '',
        email: '',
        status: '',
    });

    useEffect(() => {
        // Generate the ID when the component mounts
        const newId = generateId();
        setFormData((prevFormData) => ({
            ...prevFormData,
            id: newId,
        }));
    }, []);

    const generateId = () => {
        return uuidv4().slice(0, 8);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    function performCheck(formData) {
        let idx = 0
        let idx_ = 9
        let errors = []
        const id = formData.id
        const name = formData.name
        const specialty = formData.specialty
        const experience = formData.experience
        const qualification = formData.qualification
        const department = formData.department
        const shift = formData.shift_
        const salary = formData.salary
        const contact = formData.contact
        const email = formData.email
        const status = formData.status
        const phoneRegex = /^\+\d+/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name.length > 0) {
            idx++
        } else {
            errors.push("Fill up Name field")
        }
        if (specialty.length > 0) {
            idx++
        } else {
            errors.push("Fill up Specialty field")
        }
        if (parseInt(experience) > 0) {
            idx++
        } else {
            errors.push("Fill up Experience field")
        }
        if (qualification.length > 0) {
            idx++
        } else {
            errors.push("Fill up Qualification field")
        }
        if (department.length > 0) {
            idx++
        } else {
            errors.push("Fill up Department field")
        }
        if (shift.length > 0) {
            idx++
        } else {
            errors.push("Fill up Shift field")
        }
        if (parseInt(salary) > 0) {
            idx++
        } else {
            errors.push("Fill up Salary field")
        }
        console.log(contact)
        console.log(String(contact))
        if (phoneRegex.test(contact)) {
            idx++
        } else {
            errors.push("Fill up Contact field")
        }
        if (emailRegex.test(email)) {
            idx++
        } else {
            errors.push("Fill up Email field")
        }

        if (idx === idx_ && errors.length === 0) {

            return {success: true}
        } else {
            return {success: false, errors: errors}
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const check = performCheck(formData)
        console.log(check)
        if (check.success) {
            formData.status = "Active"
            console.log(formData.status)
            toast("SUCCESS", {style: {backgroundColor: '#214a20', color: '#fff'}})
            console.log(formData.status)


        } else {
            for (let i = 0; i < check.errors.length; i++) {

                toast(check.errors[i], {style: {backgroundColor: '#FF4D4F', color: '#fff'}})

            }
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-r from-accent to-primary flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Add Doctor</h1>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate={true}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* ID */}
                        <div>
                            <label htmlFor="id" className="block text-sm font-bold text-gray-600">
                                Doctor ID
                            </label>
                            <input
                                type="text"
                                name="id"
                                id="id"
                                value={formData.id}
                                className="mt-1 w-full rounded-md border-gray-300 font-bold text-black focus:border-blue-500 focus:ring-blue-500"
                                readOnly
                                required
                            />
                        </div>
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter Full Name"
                                required
                            />
                        </div>
                    </div>
                    {/* Specialty */}
                    <div>
                        <label htmlFor="specialty" className="block text-sm font-bold text-gray-600">
                            Specialty
                        </label>
                        <select
                            name="specialty"
                            id="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Specialty</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Orthopedic">Orthopedic</option>
                            <option value="Pediatrician">Pediatrician</option>
                            <option value="General Surgeon">General Surgeon</option>
                            <option value="Dermatologist">Dermatologist</option>
                        </select>
                    </div>
                    {/* Qualification */}
                    <div>
                        <label htmlFor="qualification" className="block text-sm font-bold text-gray-600">
                            Qualification
                        </label>
                        <select
                            name="qualification"
                            id="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Qualification</option>
                            <option value="MBBS">MBBS</option>
                            <option value="MBBS, MD">MBBS, MD</option>
                            <option value="MBBS, MS">MBBS, MS</option>
                            <option value="MBBS, DNB">MBBS, DNB</option>
                            <option value="MBBS, DM">MBBS, DM</option>
                        </select>
                    </div>
                    {/* Department */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-bold text-gray-600">
                            Department
                        </label>
                        <select
                            name="department"
                            id="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="Surgery">Surgery</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Dermatology">Dermatology</option>
                        </select>
                    </div>
                    {/* Shift */}
                    <div>
                        <label htmlFor="shift" className="block text-sm font-bold text-gray-600">
                            Shift
                        </label>
                        <select
                            name="shift_"
                            id="shift"
                            value={formData.shift_}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Shift</option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                            <option value="Night">Night</option>
                        </select>
                    </div>
                    {/* Salary */}
                    <div>
                        <label htmlFor="salary" className="block text-sm font-bold text-gray-600">
                            Salary (₹)
                        </label>
                        <input
                            type="number"
                            name="salary"
                            id="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter Salary Amount"
                            required
                        />
                    </div>
                    {/* Contact */}
                    <div>
                        <label htmlFor="contact" className="block text-sm font-bold text-gray-600">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter Contact Number"
                            required
                        />
                    </div>
                    {/* email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-600">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="email@pulse360.com"
                            required
                        />
                    </div>
                    {/* email */}
                    <div>
                        <label htmlFor="experience" className="block text-sm font-bold text-gray-600">
                            Experience
                        </label>
                        <input
                            type="number"
                            name="experience"
                            id="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border-gray-300 font-bold text-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter number of years"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Add Doctor
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
}
