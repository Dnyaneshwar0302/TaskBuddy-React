import "./Header.css";
import { motion } from "framer-motion";

function Header({ darkMode, setDarkMode }) {
  return (

    <motion.header
      className="header"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >

      <motion.div
        className="logo"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 220,
        }}
        whileHover={{
          scale: 1.15,
          rotate: 10,
        }}
      >
        ✓
      </motion.div>

      <motion.div
        className="header-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
      >

        <h1>TaskBuddy</h1>

        <p>Manage Your Tasks Efficiently</p>

        <span>
          Stay Organized • Stay Productive
        </span>

      </motion.div>

      <motion.button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </motion.button>

    </motion.header>

  );
}

export default Header;