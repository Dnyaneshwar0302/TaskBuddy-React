import { useState, useEffect } from "react";

import "./App.css";

import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import SearchBar from "./Components/SearchBar";
import FilterBar from "./Components/FilterBar";
import ProgressBar from "./Components/ProgressBar";
import TaskList from "./Components/TaskList";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React Components",
      description: "Complete the React Components chapter and practice examples.",
      priority: "High",
      category: "Study",
      dueDate: "30 Jun 2026",
      completed: false,
    },
    {
      id: 2,
      title: "Practice DSA",
      description: "Solve at least 3 LeetCode problems today.",
      priority: "Medium",
      category: "Coding",
      dueDate: "01 Jul 2026",
      completed: false,
    },
    {
      id: 3,
      title: "Infosys Preparation",
      description: "Revise Java and Coding Questions.",
      priority: "High",
      category: "Career",
      dueDate: "02 Jul 2026",
      completed: false,
    },
    {
      id: 4,
      title: "Gym Workout",
      description: "Complete today's workout.",
      priority: "Low",
      category: "Personal",
      dueDate: "Today",
      completed: false,
    },
  ]);

  // 🌙 Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 💾 Save Theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="container">

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
      />

      <SearchBar />

      <FilterBar />

      <ProgressBar
        total={tasks.length}
        completed={completedTasks}
      />

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />

    </div>
  );
}

export default App;