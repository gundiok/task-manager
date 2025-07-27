import React from "react";
import classes from "../styles/Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes.sideBarContainer}>
      <ul className={classes.sideBarElements}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>My Dashboard</li>
        <li>Tasks</li>
        <li>Projects</li>
        <li>Important</li>
        <li>Calendar</li>
        <li>Planned</li>
        <li>Personal</li>
        <li>Family</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
