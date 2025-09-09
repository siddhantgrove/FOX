
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
  default: "bg-gray-900 text-gray-900",
  dark: "bg-blue-900 from-blue-600 via-gray-100 to-blue-600 text-white",
  sunset: "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white",
  ocean: "bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-600 text-white",
  forest: "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-700 text-white",
  galaxy: "bg-gradient-to-r from-purple-700 via-indigo-800 to-black text-white",
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("default");

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, themes }}>
      <div
        className={`${themes[currentTheme]} min-h-screen w-full transition-all duration-500`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

