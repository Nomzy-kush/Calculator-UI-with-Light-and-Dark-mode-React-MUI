import React from "react";
import IconButton from '@mui/material/IconButton';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const Navbar = ({ darkMode, handleToggle }) => {

  return (
    <>
    <nav>
        <p>Light</p>
        <div>
          {darkMode ? (
        <IconButton >
        <ToggleOnIcon sx={{ fontSize: 50 }} onClick={handleToggle} className={darkMode ? "toggle-light" : "toggle-dark"} />
        </IconButton>
          ) : (

        <IconButton >
        <ToggleOffIcon sx={{ fontSize: 50 }} onClick={handleToggle} className={darkMode ? "toggle-light" : "toggle-dark"} />
        </IconButton>
             )}
        </div>
        <p>Dark</p>
    </nav>
    </>
  )
}

export default Navbar
