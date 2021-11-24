import React, { FC, useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeSelector: FC = () => {
  const { darkMode, toggleDarkMode, toggleLightMode } =
    useContext(ThemeContext);
  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    e.preventDefault();
    if (type === "dark") {
      toggleDarkMode?.();
    } else {
      toggleLightMode?.();
    }
  };
  return (
    <div className="theme_selector-container">
      <button
        className={darkMode ? "theme_selector-selected" : ""}
        onClick={(e) => handleOnClick(e, "dark")}
        data-testid="button-dark"
      >
        <IoMoonOutline />
      </button>
      <button
        className={!darkMode ? "theme_selector-selected" : ""}
        onClick={(e) => handleOnClick(e, "light")}
        data-testid="button-light"
      >
        <IoSunnyOutline />
      </button>
    </div>
  );
};

export default ThemeSelector;
