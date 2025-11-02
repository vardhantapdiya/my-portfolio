import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { NavLink, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleContactClick = () => {
        if (location.pathname === "/") {
            // Already on home, just scroll needed
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to home and scroll after render
            navigate("/");
            setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 py-2 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors">
            <nav className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 sm:gap-0">
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-wide">
                    <Link to="/">Vardhan</Link>
                </div>
                <ul className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base lg:-ml-16">
                    <li>
                        {/* <a href="#experience" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
              Experience
            </a> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <a href="#experience" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
              Experience
            </a> */}
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        {/* <a href="#projects" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
              Projects
            </a> */}
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        {/* <a href="#contact" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
                            Contact Me
                        </a> */}
                        <button
                            onClick={handleContactClick}
                            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300"
                        >
                            Contact Me
                        </button>
                    </li>
                </ul>
                <div className="shrink-0">
                    <DarkModeToggle />
                </div>
            </nav>
        </header>
    );
}
