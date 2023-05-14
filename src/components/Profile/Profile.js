import React from "react";

import { useNavigate } from "react-router-dom";

import "./Profile.css";

const extras = [
  "major",
  "minor",
  "birthday",
  "home",
  "quote",
  "favorite thing 1",
  "favorite thing 2",
  "favorite thing 3",
  "favorite dartmouth tradition",
  "fun fact",
];

const extrasTitle = [
  "Major",
  "Minor",
  "Birthday",
  "Home",
  "Quote",
  "Favorite Thing",
  "Favorite Thing",
  "Favorite Thing",
  "Favorite Dartmouth Tradition",
  "Fun Fact",
];

const Profile = (props) => {
  let nav = useNavigate();

  const prof = () => {
    nav("/Person", {
      state: { info: props.person, extras: extras, extrasTitle: extrasTitle },
    });
  };

  let rands = [0, 0, 0];
  let tries = 0;
  rands[0] = Math.floor(Math.random() * extras.length);
  while (props.person[extras[rands[0]]] === null) {
    rands[0] = Math.floor(Math.random() * extras.length);
    tries += 1;
    if (tries > 80) {
      break;
    }
  }
  tries = 0;
  rands[1] = Math.floor(Math.random() * extras.length);
  while (rands[1] === rands[0] || props.person[extras[rands[1]]] === null) {
    rands[1] = Math.floor(Math.random() * extras.length);
    tries += 1;
    if (tries > 80) {
      break;
    }
  }
  tries = 0;
  rands[2] = Math.floor(Math.random() * extras.length);
  while (
    rands[2] === rands[1] ||
    rands[2] === rands[0] ||
    props.person[extras[rands[2]]] === null
  ) {
    tries += 1;
    if (tries > 80) {
      break;
    }
    rands[2] = Math.floor(Math.random() * extras.length);
  }

  return (
    <div className="profile">
      {/* <div className="back" style={ {backgroundImage: `url(${props.person.picture}` } }/> */}
      <img
        className="pic"
        src={props.person.picture}
        alt={"Picture of " + props.person.name}
      />
      <button className="profile-link" onClick={prof}>
        {props.person.name}
      </button>
      {rands.map((data, key) => {
        return (
          <div className="infobox" key={key}>
            {extrasTitle[data]}:
            <div className="info">{props.person[extras[data]]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
