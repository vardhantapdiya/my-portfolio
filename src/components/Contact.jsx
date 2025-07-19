import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 transition" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">Contact</h2>
      <div className="max-w-xl mx-auto text-center text-gray-700 dark:text-gray-300">
        <p className="mb-4">Let's connect and create something amazing together!</p>
        <p className="mb-2">📧 Email: <a href="mailto:vardhantapdiya74@gmail.com" className="text-indigo-600 hover:underline">vardhantapdiya74@gmail.com</a></p>
        <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/vardhantapdiya/" target="_blank" className="text-indigo-600 hover:underline">https://www.linkedin.com/in/vardhantapdiya/</a></p>
      </div>
    </section>
  );
}