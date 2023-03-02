import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="headerNav">
      <div className="developerName">
        <h1>Sylvia Ely</h1>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About Me")}
            // Check to see if the currentPage is `About Me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "About Me" ? "nav-item active" : "nav-item"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-item active" : "nav-item"
            }
          >
            Portfolio
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-item active" : "nav-item"
            }
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-item active" : "nav-item"
            }
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
