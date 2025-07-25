import React from "react";
import { redirect } from "react-router";
import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";
import classes from "../styles/DashBoard.module.css"

const DashBoard = () => {
  return (
    <div className= {classes.dashboard}>
      <Sidebar/>
      <TaskList/>
    </div>
  );
};

export const dashboardLoader = () => {
  const token = localStorage.getItem("auth_token");

  if (!token) {return redirect("/login")};
  return null;
};

export default DashBoard;
