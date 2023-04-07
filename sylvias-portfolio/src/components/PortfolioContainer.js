import React, { useState } from "react";
import Header from "./Header";
import FooterApp from "./Footer";
import About from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        className="border-none"
      />

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <FooterApp
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        className="border-none"
      />
    </div>
  );
}
