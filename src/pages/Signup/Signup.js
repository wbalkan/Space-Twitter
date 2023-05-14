import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import "./Signup.css";

const navlinks = ["/Login"];

const Home = "/Home";

const Signup = () => {
  const [noMatch, setNoMatch] = useState(false);
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  let nav = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (pass1 === pass2) {
      nav(Home);
    } else {
      setNoMatch(true);
    }
  };

  return (
    <div className="signup-main">
      <NavBar links={navlinks} title="Signup" />
      <form className="signup-form" onSubmit={login}>
        <label>
          Username:
          <input className="textbox" type="text" />
        </label>
        <label>
          Password:
          <input
            className="textbox"
            type="text"
            onChange={(p1) => {
              setPass1(p1.target.value);
              setNoMatch(false);
            }}
          />
        </label>
        <label>
          Confirm Password:
          <input
            className="textbox"
            type="text"
            onChange={(p2) => {
              setPass2(p2.target.value);
              setNoMatch(false);
            }}
          />
        </label>
        {noMatch ? <div>Passwords must match!!</div> : null}
        <button className="enter">Enter</button>
      </form>
    </div>
  );
};

export default Signup;
