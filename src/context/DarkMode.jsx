/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const darkModeContext = createContext();

function DarkModeProvider({ children }) {
  const { isDarkMode, setIsDarkMode } = useLocalStorage();

  function toggleDarkMode() {
    setIsDarkMode((dark) => !dark);
  }

  useEffect(
    function () {
      document.documentElement.classList.toggle("dark", isDarkMode);
    },
    [isDarkMode],
  );

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(darkModeContext);
  if (context === undefined)
    throw new Error("useDarkMode shouldn't be used here");

  return context;
}

export { DarkModeProvider, useDarkMode };
