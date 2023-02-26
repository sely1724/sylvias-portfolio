import React from "react";
// icons for footer - https://react-icons.github.io/react-icons
import {
  // github:
  AiFillGithub,
  // email:
  AiFillMail,
  // linkedin:
  AiFillLinkedin,
  // resume:
  AiOutlineSolution,
} from "react-icons/ai";

// TO DO: ADD RESUME TO LINK TO

export default function Footer() {
  return (
    <div id="footer-contact">
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
      <div className="contact-icons">
        <a href="">
          <AiOutlineSolution />
        </a>
      </div>
    </div>
  );
}
