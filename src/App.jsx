import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`bg ${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex flex-col justify-center items-center bg-slate-300 dark:bg-slate-500 dark:text-white">
        <Home />
      </div>
    </div>
  );
}

export default App;
