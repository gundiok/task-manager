import React from "react";
import { Form, useActionData } from "react-router-dom";
import classes from "../styles/Login.module.css";

const Login = () => {
  const data = useActionData();

  return (
    <div className={classes.loginWrapper}>
      <h2 style={{fontFamily: "sans-serif"}}>Sign into your dashboard</h2>
      <Form method="post" className={classes.loginForm}>
        {data?.error && (
          <p style={{ color: "red", fontWeight: "bold" }}>{data.error}</p>
        )}
        <input type="text" id="username" name="username" placeholder="Username"/>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default Login;
