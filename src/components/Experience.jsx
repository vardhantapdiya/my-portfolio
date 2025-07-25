import React from "react";

export default function Experience() {
  return (
    <section
      className="min-h-screen py-20 flex flex-col justify-center px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 transition overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="-mt-20 text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-8">
          Experience
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Tata Consultancy Services
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Product Engineer - UI | 09/2024 - Present
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-1">
            <li>
              Developed dynamic, scalable, and responsive UI components for TCS BaNCS 2.0 using React.js, enhancing user experience and system usability for global banking clients.
            </li>
            <li>
              Collaborated in an Agile Scrum team to deliver high-quality features in iterative sprints, participating in daily stand-ups, sprint planning, and code reviews.
            </li>
            <li>
              Integrated RESTful APIs with React components to fetch, display, and update banking data in real-time, improving application interactivity and performance.
            </li>
            <li>
              Worked closely with cross-functional teams including back-end developers, QA engineers, and business analysts to deliver seamless user experiences across different modules.
            </li>
            <li>
              Utilized Git for version control, ensuring smooth project delivery.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
