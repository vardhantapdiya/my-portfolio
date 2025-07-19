import React from "react";

const skills = [
  "React", "Node.js", "Express.js", "MongoDB","JavaScript", "TypeScript", "TailwindCSS", "HTML5", 
  "CSS", "Git", "Redux","C++"];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 transition" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div key={skill} className="text-center bg-white dark:bg-gray-700 shadow-md p-4 rounded-lg text-gray-800 dark:text-white font-medium hover:scale-105 transition transform">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}