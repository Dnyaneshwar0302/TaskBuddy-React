import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TaskCard.css";

function TaskCard({ task, tasks, setTasks }) {

  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const priorityClass = task.priority.toLowerCase();

  const priorityEmoji = {
    High: "🔴",
    Medium: "🟡",
    Low: "🟢",
  };

  const categoryEmoji = {
    Coding: "💻",
    Study: "📚",
    Career: "💼",
    Personal: "🏃",
    Shopping: "🛒",
    Others: "🎯",
  };

  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const toggleComplete = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  const saveTask = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? { ...t, title: editTitle }
          : t
      )
    );

    setEditing(false);
  };

  return (

    <motion.div
      className="task-card"
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
    >

      <div className="task-left">

        <motion.input
          whileTap={{ scale: 1.3 }}
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
          className="task-check"
        />

        <div className="task-details">

          <AnimatePresence mode="wait">

            {editing ? (

              <motion.input
                key="edit"
                initial={{ opacity: 0, scale: .8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

            ) : (

              <motion.h3
                key="title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  opacity: task.completed ? .5 : 1,
                }}
              >
                {task.title}
              </motion.h3>

            )}

          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {task.description}
          </motion.p>

        </div>

      </div>

      <div className="task-right">

        <motion.span
          whileHover={{ scale: 1.08 }}
          className={`priority ${priorityClass}`}
        >
          {priorityEmoji[task.priority]} {task.priority}
        </motion.span>

        <motion.span
          whileHover={{ scale: 1.08 }}
          className="category"
        >
          {categoryEmoji[task.category]} {task.category}
        </motion.span>

        <span className="due-date">
          📅 {task.dueDate}
        </span>

        <div className="task-buttons">

          {editing ? (

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: .95 }}
              className="edit-btn"
              onClick={saveTask}
            >
              💾 Save
            </motion.button>

          ) : (

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: .95 }}
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              ✏ Edit
            </motion.button>

          )}

          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: -2,
            }}
            whileTap={{ scale: .92 }}
            className="delete-btn"
            onClick={deleteTask}
          >
            🗑 Delete
          </motion.button>

        </div>

      </div>

    </motion.div>

  );

}

export default TaskCard;