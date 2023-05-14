import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import './NavBar.css';

const navdict = {
    "/Home": "Home",
    "/People": 'People',
    "/Posts": 'Posts',
    "/Signup": 'Sign Up',
    "/Login":  'Login',
}

const NavBar = (props) => {

    const loc = useLocation();
    const path = loc.pathname;

    let nav = useNavigate()

    return (
        <React.Fragment>
        <div className="bar">
            <div className="title">{props.title}</div>
            {props.links.map( (data, key) => {
                return(
                    <button className="button" type="button" key={key} onClick={() => {nav(data)}}>{navdict[data]}</button>
                )
            } )}
            
        </div>
        { ((path !== '/')&&(path !== '/Login')&&(path !== '/Signup')) ? <button className="signout" type="button" onClick={() => {nav('/Login')}}>Sign Out</button> : null}
        </React.Fragment>
    )

}

export default NavBar;