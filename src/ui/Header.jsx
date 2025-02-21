import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkMode";
import { motion } from "framer-motion";

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-0 z-20 flex h-[10vh] w-[100%] items-center justify-between bg-white px-6 py-4 shadow-md sm:px-12 md:px-24 dark:bg-cyan-900">
      <h1 className="text-lg font-extrabold sm:text-xl md:text-2xl">
        Where in the world?
      </h1>
      <motion.button
        initial={{ opacity: 0, y: "-50vh" }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ opacity: 0, scale: 0.7 }}
        className="text-sm gap:2 flex cursor-pointer items-center font-bold"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <HiOutlineSun className="mr-2" />
        ) : (
          <HiOutlineMoon className="mr-2" />
        )}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </motion.button>
    </nav>
  );
}

export default Header;
