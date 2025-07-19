import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-2 right-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md transition"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
