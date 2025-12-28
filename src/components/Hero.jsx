import React from "react";
import VardhanPhoto_Cropped from "../assets/VardhanPhoto_Cropped.jpg"
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center -mt-4 px-6 bg-gradient-to-t from-indigo-200 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500" id="home">
      <img
        src={VardhanPhoto_Cropped}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-700 shadow-lg mb-6"
      />
      <h1 className="text-5xl font-extrabold mb-2 text-gray-900 dark:text-white">
        Vardhan Tapdiya
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-6 text-gray-700 dark:text-gray-300">
        Full-Stack Developer | React & Node.js | Turning Ideas into Scalable Products
      </p>
      <div className="-mt-2 mb-3 flex items-center justify-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
        </span>

        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Open to opportunities
        </span>
      </div>
      <div className="mt-1 flex flex-row gap-5">
        <Link to="/projects"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-3xl shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300"
          >My Projects</Link>
        <a
          href="https://drive.google.com/file/d/1jjP3b9ynQGeTP69lKu6DOdYlCaDGDJt9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-3xl shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300"
        >
          My Resume
        </a>
      </div>
      <div className=" mt-6 flex space-x-6">
        <a
          href="https://github.com/vardhantapdiya"
          target="_blank"
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-xl"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vardhantapdiya/"
          target="_blank"
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-xl"
        >
          LinkedIn
        </a>
      </div>

    </section>
  );
}
