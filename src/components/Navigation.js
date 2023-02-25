import React from "react";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// WE WILL COME BACK TO THIS PART LATER...
const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
};

// In Navbar, we can assign a style from an object by using curly braces.
// We hold all of the navbar in a card
// Then separate tabs for each section
function Navbar() {
  return (
    <nav>
      <div style={styles.card}>
        <div style={styles.heading}>Home</div>
        <div style={styles.heading}>Work</div>
        <div style={styles.heading}>Contact</div>
        <div style={styles.heading}>Resume</div>
      </div>
    </nav>
  );
}

export default Navbar;
