import React, { useState, FC } from "react";

interface IThemeContext {
  darkMode: boolean;
  toggleDarkMode?: () => void;
  toggleLightMode?: () => void;
}

const getTheme = () => {
  const theme = window.localStorage.getItem('theme');
  if (!theme) return false
  return theme === 'light' ? false : true
}
const defaultState = {
  darkMode: getTheme(),
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

const ThemeProvider: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(defaultState.darkMode);

  const toggleDarkMode = () => {
    window.localStorage.setItem('theme', 'dark')
    setDarkMode(true);
  };
   const toggleLightMode = () => {
     window.localStorage.setItem('theme', 'light');
     setDarkMode(false);
   };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        toggleLightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider