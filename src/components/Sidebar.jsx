import React from 'react';
import classes from "../styles/Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className= {classes.sideBarContainer}>
      <ul className= {classes.sideBarElements}>
        <li>My Dashboard</li>
        <li>Tasks</li>
        <li>Projects</li>
        <li>Calendar</li>
        <li>Planned</li>
        <li>Personal</li>
        <li>Family</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}

export default Sidebar
