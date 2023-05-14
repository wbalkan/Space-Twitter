import React from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import "./Login.css";
const navlinks = ["/Signup"];

const Home = "/Home";

const Login = () => {
  let nav = useNavigate();
  const login = () => {
    nav(Home);
  };

  return (
    <div className="login-main">
      <NavBar title={"Login"} links={navlinks} />

      <form className="loginForm" onSubmit={login}>
        <label>
          <div>Username:</div>
          <input className="textbox" type="text" />
        </label>
        <label>
          <div>Password:</div>
          <input className="textbox" type="text" />
        </label>
        <button className="enter">Enter</button>
      </form>
    </div>
  );
};

export default Login;
