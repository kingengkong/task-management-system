// src/App.jsx
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [dark, setDark] = useState(false);

  // Tambah / hapus class `dark` di <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Navbar / Toggle Mode */}
      <div className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Task Management System</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 dark:text-white"
        >
          {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* Dashboard */}
      <main className="p-6">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
