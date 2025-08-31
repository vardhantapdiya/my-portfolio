import React from "react";

const projects = [
  {
    title: "Pill Pal - Medicine Alternatives App",
    desc:"Built using MERN stack (MongoDB, Express.js, React.js, Node.js) with Redux and Tailwind CSS. Features include JWT-based authentication, OTP password reset, role-based authorization, RESTful APIs for medicine alternatives and saved medicines, Gemini API integration for intelligent suggestions, and secure password handling with Bcrypt.",
    link: "https://pill-pal-medicinefinder.vercel.app/"
  },
  {
    title: "NetMart - E-Commerce Store",
    desc:"Developed a responsive E-Commerce frontend using React and Redux for efficient state management.Integrated a third party API to dynamically fetch and display product listings. Implemented Add to Cart functionality with real-time updates for item count and total price.",
    link: "https://github.com/vardhantapdiya/Net-Mart-E-Commerce-Front-End-"
  },
  {
    title: "Todo App - REST API",
    desc: "Built robust APIs for, todo creation and management (CRUD) with features scuch as a creating, viewing, editing and updating todos, using MongoDB as the databse with Mongoose, and thoroughly tested using Postman to ensure reliability and performance.",
    link: "https://github.com/vardhantapdiya/Todo-Backend"
  },
  {
    title: "Informative-Blogs",
    desc: "This is a fully responsive blog website built using React and Context API for state management. It features a clean, modern UI where users can browse, read, and explore blog posts seamlessly. The app showcases component-based architecture, state-management and dynamic routing, — all focused on delivering a smooth front-end experience.",
    link: "https://github.com/vardhantapdiya/Informative-Blogs"
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 transition" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col justify-evenly bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.desc}</p>
            <a href={project.link} target="_blank" className="inline-block mt-4 text-indigo-600 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-5 mt-10">
        <a href="https://github.com/vardhantapdiya" target="_blank" className="underline">More On Github</a>
      </h2>
    </section>
  );
}