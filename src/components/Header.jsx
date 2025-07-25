import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" style={{textDecoration: "none"}}>
        <h1 className={classes.title}>TaskMaster</h1>
      </Link>
    </header>
  );
};

export default Header;
