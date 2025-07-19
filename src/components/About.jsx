import React from "react";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800 transition" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center leading-relaxed">
           I'm a 23-year-old Full Stack Developer who loves turning ideas into sleek, scalable web apps 
           using the MERN stack. By day, I'm a Product Engineer at TCS, building responsive, modern interfaces 
           with React. I'm all about clean code, smooth user experiences, and building software that actually 
           makes a difference.
        </p>
      </div>
    </section>
  );
}