import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import People from './pages/People/People.js';
import Posts from './pages/Posts/Posts.js';
import ViewProfile from './pages/ViewProfile/ViewProfile.js';

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Signup />}></Route>
        <Route exact path="/Signup" element={ <Signup />}></Route>
        <Route exact path="/Home" element={< Home />} />
        <Route exact path="/Login" element={< Login />} />
        <Route exact path="/People" element={< People />} />
        <Route exact path="/Posts" element={< Posts />} />
        <Route exact path="/Person" element={< ViewProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
