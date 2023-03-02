import React from "react";
import "../App.css";

function Project(props) {
  return (
    <div className="projects-card">
      <div className="image-card" id={props.id}></div>
      <div className="information-card">
        <h5>{props.name}</h5>
        <small>
          <a href={props.github}>Github</a>
        </small>
        <br />
        <small>
          <a href={props.website}>Website</a>
        </small>
      </div>
    </div>
  );
}

export default Project;
