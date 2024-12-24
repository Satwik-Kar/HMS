import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Doctors from "@/pages/home/admin/Doctors";
import Patients from "@/pages/home/admin/Patients";
import Billing from "@/pages/home/admin/Billing";
import Inventory from "@/pages/home/admin/Inventory";
import Reports from "@/pages/home/admin/Reports";

export default function Home() {
    const router = useRouter();
    const [userData, setUserData] = useState({});
    const [activeView, setActiveView] = useState("Doctors"); // Default view

    useEffect(() => {
        const {id, role,sessionId} = router.query;
        if (id && role && sessionId) {
            setUserData({id, role,sessionId});
            sessionStorage.setItem("sessionID", sessionId);

        } else {
            router.push("/login");
        }
    }, []);

    const navLinks = () => {
        switch (userData.role) {
            case "admin":
                return [
                    {label: "Doctors", view: "Doctors"},
                    {label: "Patients", view: "Patients"},
                    {label: "Billing", view: "Billing"},
                    {label: "Inventory", view: "Inventory"},
                    {label: "Reports", view: "Reports"},
                ];
            case "doctor":
                return [
                    {label: "Schedule", view: "Schedule"},
                    {label: "Patients", view: "Patients"},
                    {label: "Diagnoses", view: "Diagnoses"},
                    {label: "Telemedicine", view: "Telemedicine"},
                ];
            case "patient":
                return [
                    {label: "Appointments", view: "Appointments"},
                    {label: "Medical History", view: "Medical History"},
                    {label: "Bills", view: "Bills"},
                ];
            case "staff":
                return [
                    {label: "Inventory", view: "Inventory"},
                    {label: "Schedules", view: "Schedules"},
                    {label: "Support", view: "Support"},
                ];
            default:
                return [];
        }
    };

    const renderDashboard = () => {
        switch (activeView) {
            case "Doctors":
                return <Doctors/>;
            case "Patients":
                return <Patients/>;
            case "Billing":
                return <Billing/>;
            case "Inventory":
                return <Inventory/>;
            case "Reports":
                return <Reports/>;
            default:
                return <p className="text-red-500">Invalid view selected.</p>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                <h1 className="text-2xl font-bold text-primary mb-4">Welcome to Pulse360</h1>
                <p className="mb-4 text-gray-700">
                    User: <span className="font-medium">{userData.id}</span> | Role:{" "}
                    <span className="font-medium capitalize">{userData.role}</span> | Session:{" "}
                    <span className="font-medium capitalize">{userData.sessionId}</span>
                </p>
                <hr className="border-t border-gray-300 mb-6"/>

                {/* Navbar */}
                <nav className="bg-primary text-white font-extrabold rounded-lg shadow-md mb-6">
                    <ul className="flex space-x-4 p-4">
                        {navLinks().map((link) => (
                            <li key={link.label}>
                                <button
                                    onClick={() => setActiveView(link.view)}
                                    className={`px-4 py-2 rounded transition ${
                                        activeView === link.view ? "bg-accent" : "hover:bg-accent"
                                    }`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Placeholder for Dashboard Content */}
                <div className="text-gray-700">{renderDashboard()}</div>
            </div>
        </div>
    );
}
