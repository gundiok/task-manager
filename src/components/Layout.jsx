import React from "react";
import { Outlet} from "react-router-dom";
import classes from "../styles/Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
     
      <Outlet />
    </div>
  );
};

export default Layout;
