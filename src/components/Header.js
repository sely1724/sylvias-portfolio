import React from "react";
// Here we are importing a CSS file as a dependency
import "../styles/Header.css";
import Navigation from "./Navigation";

// TO DO: Work on navbar id or class for style
export default function Header() {
  return (
    <header className="header">
      <div>
        <Navigation />
      </div>
    </header>
  );
}
