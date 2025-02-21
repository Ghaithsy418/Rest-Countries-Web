import { useEffect, useState } from "react";

export function useLocalStorage() {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    const final = localStorage.getItem("dark");
    return final
      ? JSON.parse(final)
      : window.matchMedia("(prefers-color-scheme: dark)").matches || false;
  });

  useEffect(
    function () {
      localStorage.setItem("dark", JSON.stringify(isDarkMode));
    },
    [isDarkMode],
  );

  return {isDarkMode, setIsDarkMode};
}
