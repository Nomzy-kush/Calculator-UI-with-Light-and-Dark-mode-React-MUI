import './App.css';
import React, { useState } from "react";
import Navbar from './Components/Navbar';
import Main from './Components/Main';

function App() {
  const [darkMode, setDarkMode] = useState("false");

  const handleToggle = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);

}

  return (
    <div className={darkMode ? "dark": "App"}>
      <Navbar handleToggle={handleToggle} darkMode={darkMode} />
      <Main />
    </div>
  );
}

export default App;
