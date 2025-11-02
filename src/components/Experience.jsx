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
            Product Engineer - UI | 09/2024 - Present
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-1">
            <li>
              <b>Developed dynamic, scalable, and responsive UI components</b> for TCS BaNCS 2.0 using <b>ReactJS and Redux</b>,
              ensuring smooth state management and enhanced user experience for global banking clients. Implemented
              reusable components and optimized rendering performance for high-traffic modules.
            </li>
            <li>
              <b>Integrated RESTful APIs with React components</b>, leveraging <b>Redux</b> for centralized state management, to
              fetch, display, and update banking data in real-time, improving application interactivity and responsiveness.
            </li>
            <li>
              <b>Managed code integration and version control using Git and Gerrit</b>, ensuring smooth code reviews, branch
              management, and collaborative development.
            </li>
            <li>
              <b>Rehosted and transformed multiple banking APIs</b> by configuring <b>service.xml</b> files, designing <b>Jolt and 
                JSON</b> mappings, and implementing custom <b>Java transformer functions</b>, enabling seamless integration of legacy APIs
              into modern UI workflows.
            </li>
            <li>
              <b>Collaborated in an Agile Scrum environment</b>, participating in daily stand-ups, sprint planning, backlog
              refinement, and code reviews, delivering high-quality features in iterative sprints. Actively <b>coordinated with
              backend developers, QA engineers, and business analysts</b> to ensure cohesive delivery across modules.
            </li>
            <li>
              <b>Enhanced UI styling and layout using CSS (Flexbox, Grid, and responsive design techniques)</b> to create visually
              appealing, responsive interfaces across devices and screen sizes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
