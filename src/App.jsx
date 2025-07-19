import React from 'react'
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Routes, Route, Router } from 'react-router-dom';

export default function App() {
  return (
    <div className="font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <Navbar />
      <main className="pt-16"> {/* added top padding to prevent navbar overlap */}
        <Routes>
          <Route path='/' element={<>
            <Hero />
            <About />
            <Skills />
            <Contact />
          </>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </main>
    </div>
  )
}
