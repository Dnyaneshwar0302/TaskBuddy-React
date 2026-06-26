import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ tasks, setTasks }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Coding");
  const [dueDate, setDueDate] = useState("");

  const addTask = (e) => {

    e.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      description: "No description added.",
      priority: priority,
      category: category,
      dueDate: dueDate || "No Due Date",
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setPriority("Medium");
    setCategory("Coding");
    setDueDate("");
  };

  return (

    <form className="task-form-card" onSubmit={addTask}>

      <h2>Add New Task</h2>

      <div className="task-input-group">

        <input
          type="text"
          placeholder="✍ Enter your task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">
          + Add Task
        </button>

      </div>

      <div className="task-options">

        <div className="option">

          <label>Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>

        <div className="option">

          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Coding</option>
            <option>Study</option>
            <option>Career</option>
            <option>Personal</option>
            <option>Shopping</option>
            <option>Others</option>
          </select>

        </div>

        <div className="option">

          <label>Due Date</label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

        </div>

      </div>

    </form>

  );

}

export default TaskForm;