import React from "react";
import "../../App.css";

//https://stackoverflow.com/questions/60922523/how-to-make-a-pdf-download-on-a-button-click-with-react

export default function Resume() {
  return (
    <div className="downloadContainer">
      <button className="button">
        <a
          className="button"
          href="../../resume.pdf"
          download="ResumeOfficial.pdf"
        >
          Download Resume
        </a>
      </button>
    </div>
  );
}
