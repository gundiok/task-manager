import React from "react";
import Header from "../components/Header";
import classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { FaBolt, FaLock, FaTasks } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Header />
      <main className={classes.main}>
        <p style={{ marginBottom: "3rem" }}>
          Your sleek, modern task manager — get things done with style.
        </p>
        <div className={classes.ctaButtons}>
          <Link to="/login" className={classes.btnLogin}>
            Log In
          </Link>
          <button className={classes.btnSignup}>Sign Up (coming soon)</button>
          <ul className={classes.featuresList}>
            <li>
              <FaTasks className={classes.icon} />{" "}
              <span>Easy task tracking</span>
            </li>
            <li>
              <FaBolt className={classes.icon} />{" "}
              <span>Lightning-fast interface</span>
            </li>
            <li>
              <FaLock className={classes.icon} />
              <span>Secure & private</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
