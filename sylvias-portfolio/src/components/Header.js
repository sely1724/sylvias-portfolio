import React from "react";
import "../App.css";
import { Navbar } from "flowbite-react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    // <div className="headerNav">
    //   <div className="developerName">
    //     <h1>Sylvia Ely</h1>
    //   </div>

    //   <ul className="nav nav-tabs">
    //     <li className="nav-item">
    //       <a
    //         href="#about"
    //         onClick={() => handlePageChange("About Me")}
    //         // Check to see if the currentPage is `About Me`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={
    //           currentPage === "About Me" ? "nav-item active" : "nav-item"
    //         }
    //       >
    //         About Me
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#portfolio"
    //         onClick={() => handlePageChange("Portfolio")}
    //         // Check to see if the currentPage is `Projects`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={
    //           currentPage === "Portfolio" ? "nav-item active" : "nav-item"
    //         }
    //       >
    //         Portfolio
    //       </a>
    //     </li>

    //     <li className="nav-item">
    //       <a
    //         href="#resume"
    //         onClick={() => handlePageChange("Resume")}
    // Check to see if the currentPage is `Projects`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
    // className={
    //   currentPage === "Resume" ? "nav-item active" : "nav-item"
    // }
    //       >
    //         Resume
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#contact"
    //         onClick={() => handlePageChange("Contact")}
    //         // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={
    //           currentPage === "Contact" ? "nav-item active" : "nav-item"
    //         }
    //       >
    //         Contact Me
    //       </a>
    //     </li>
    //   </ul>
    // </div>

    <Navbar fluid={true} className="sticky top-0 border-none bg-transparent">
      <Navbar.Brand>
        <span className="font-medium hover:border-indigo-100 tracking-wide md:py-0 pl-0 pr-0 md:text-2xl rounded bg-transparent text-black md:p-0">
          Sylvia Ely
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="#about"
          onClick={() => handlePageChange("About Me")}
          // Check to see if the currentPage is `About Me`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "About Me" ? "nav-item active" : "nav-item"
          }
        >
          <span className="block md:py-0 pl-0 pr-0 md:text-md rounded bg-transparent text-black md:p-0 hover:border-[#FFFF00] border-transparent border-2">
            Home
          </span>
        </Navbar.Link>
        <Navbar.Link
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-item active" : "nav-item"
          }
        >
          <span className="block md:py-0 pl-0 pr-0 md:text-md rounded bg-transparent text-black md:p-0 hover:border-[#FFFF00] border-transparent border-2">
            Portfolio
          </span>
        </Navbar.Link>
        {/* TODO: wishlist */}
        <Navbar.Link
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Projects`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-item active" : "nav-item"}
        >
          <span className="block md:py-0 pl-0 pr-0 md:text-md rounded bg-transparent text-black md:p-0 hover:border-[#FFFF00] border-transparent border-2">
            Resume
          </span>
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          //         // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-item active" : "nav-item"}
        >
          <span className="block md:py-0 pl-0 pr-0 md:text-md rounded bg-transparent text-black md:p-0 hover:border-[#FFFF00] border-transparent border-2">
            Contact Me
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
