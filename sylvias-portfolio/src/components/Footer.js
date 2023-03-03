import React from "react";
// icons for footer - https://react-icons.github.io/react-icons
import {
  // github:
  AiFillGithub,
  // email:
  AiFillMail,
  // linkedin:
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    // Start footer
    <div className="footerContainer">
      <div className="contact-icons">
        <a href="https://github.com/sely1724" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div className="contact-icons">
        <a href="mailto: sylvianne9417@gmail.com">
          <AiFillMail />
        </a>
      </div>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/sylviaely/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      {/* <div className="contact-icons">
        <a href="">
          <AiOutlineSolution />
        </a>
      </div> */}
    </div>
  );
}
