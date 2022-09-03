import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <div className="">
      <div className="flex items-center justify-center space-x-2">
        <SunIcon className="h-6 w-6 text-yellow-500" />
        <label
          className="flex items-center h-5 p-1 duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer w-9 dark:bg-gray-600"
          htmlFor="toggle"
        >
          <div className="w-4 h-4 duration-300 ease-in-out transform bg-white rounded-full shadow-md toggle-dot dark:translate-x-3" />
          <input
            className="hidden"
            id="toggle"
            type="checkbox"
            onClick={onClick}
          />
        </label>
        <MoonIcon className="h-6 w-6 text-blue-500" />
      </div>
    </div>
  );
};

export default ThemeSwitch;
