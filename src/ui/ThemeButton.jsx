import { motion } from "framer-motion";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkMode";

const ThemeButton = function ThemeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      initial={{ opacity: 0, y: "-50vh" }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ opacity: 0, scale: 0.7 }}
      className="gap:2 flex cursor-pointer items-center text-sm font-bold"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <HiOutlineSun className="mr-2" />
      ) : (
        <HiOutlineMoon className="mr-2" />
      )}
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </motion.button>
  );
};

export default ThemeButton;
