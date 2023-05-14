import React from "react";

import Profile from "../../components/Profile/Profile";
import NavBar from "../../components/NavBar/NavBar";

import people from "../../data/dali_social_media.json";

import "./People.css";

const navlinks = ["/Home", "/Posts"];

const People = () => {
  return (
    <div>
      <NavBar links={navlinks} title="People" />
      <div className="profiles">
        {people.map((data, key) => {
          return (
            <div key={key}>
              <Profile person={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
