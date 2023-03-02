import React from "react";
import "../../App.css";
import sylvia from "../../sylvia.jpg";

export default function AboutMe() {
  return (
    <div id="aboutMe" className="mainComponent">
      <div className="aboutMeContainer">
        <div className="imageContainer">
          <img src={sylvia} alt="tbd" />
        </div>
        <div className="textContainer">
          <p>
            {" "}
            Hi :) My name is Sylvia. I run the merchandising team at a ecommerce
            company called Tavour. In my job I do everything from project
            management to data analytics. Write MORE HERE
            <br />
            <br />+ Find a more professional photo
            <br />
            <br />+ Add cool border to separate containers and bg img
            <br />
            <br />+ Center Text
          </p>
        </div>
      </div>
    </div>
  );
}
