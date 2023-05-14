import React from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import "./ViewProfile.css";

const navlinks = ["/People"];

const ViewProfile = (props) => {
  const { state } = useLocation();
  const { info, extras, extrasTitle } = state;

  return (
    <div className="person">
      <NavBar links={navlinks} />
      <div className="profile-full">
        <img
          className="zoomed-pic"
          src={info.picture}
          alt={"Picture of " + info.name}
        />
        <div>{info.name}</div>
        {extras.map((data, key) => {
          if (info[data] != null) {
            return (
              <div className="infobox">
                {extrasTitle[key]}
                <div className="info">{info[data]}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ViewProfile;
