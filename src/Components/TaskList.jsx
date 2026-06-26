import "./TaskList.css";
import TaskCard from "./TaskCard";

import { motion, AnimatePresence } from "framer-motion";

function TaskList({ tasks, setTasks }) {

  return (

    <motion.section
      className="task-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6
      }}
    >

      <motion.div
        className="task-list-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5
        }}
      >

        <h2>📋 Today's Tasks</h2>

        <motion.span
          key={tasks.length}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300
          }}
        >
          {tasks.length} Tasks
        </motion.span>

      </motion.div>

      <AnimatePresence>

        {tasks.map((task) => (

          <motion.div
            key={task.id}
            layout
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              x: -100,
              scale: 0.8
            }}
            transition={{
              duration: 0.35
            }}
          >

            <TaskCard
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />

          </motion.div>

        ))}

      </AnimatePresence>

    </motion.section>

  );

}

export default TaskList;