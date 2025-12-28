import React from "react";

export default function Experience() {
  return (
    <section
      className="min-h-screen py-20 flex flex-col justify-center px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 transition overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-8">
          Experience
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Tata Consultancy Services
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Software Engineer (Frontend - React.js) | 09/2024 - Present
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-1">
            <li>
              Developed and maintained scalable <b>React</b> applications for core banking systems used by global clients,
focusing on performance and reusability.
            </li>
            <li>
              Built reusable React components and managed application state using <b>Redux</b>, improving UI consistency and
reducing redundant code.
            </li>
            <li>
              <b>Integrated RESTful APIs with frontend components</b> using Axios, enabling real-time data fetching and updates.
            </li>
            <li>
             <b>Optimized UI performance</b> by minimizing unnecessary re-renders and improving component structure.
            </li>
            <li>
              Worked closely with backend teams to integrate and modernize legacy APIs into frontend workflows.
            </li>
            <li>
              Followed <b>Agile practices (Scrum)</b>, actively participating in sprint planning, stand-ups, and code reviews.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
