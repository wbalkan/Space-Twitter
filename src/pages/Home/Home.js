import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import PlanetSVG from "../../components/Planet/PlanetSVG";

import './Home.css';

const navlinks = ["/People", "/Posts"]

const Home = () => {
    return (
        <div className="main">
            <NavBar title='Home' links={navlinks}/>
            <div className="cover">Space</div>
            <PlanetSVG className='planet' />
            <div className="cover">Twitter</div>
        </div>
    )
}

export default Home;