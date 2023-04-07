import React from "react";
import "../../App.css";
import profile from "../../portfolioImages/yellowstone.jpeg";

const Portfolio = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div
      className="overflow-y-scroll bg-ptarmigan bg-center bg-no-repeat bg-cover bg-fixed my-2 mx-4 min-h-[37.5rem] 
    max-h-[37.5rem] flex align-items-center justify-content-center p-6 border border-gray-200 rounded-sm  dark:bg-gray-800 dark:border-gray-700 "
    >
      <div className="overflow-y-scroll bg-white relative mx-4 flex content-center my-4 p-4 max-h-[31rem] bg-opacity-75 border border-gray-200 rounded-lg grid grid-cols-2">
        <div>
          <h5>Proficiencies:</h5>
          <p>
            Hi, I'm Sylvia, a full-stack web developer with a passion for
            logical problem-solving. In college, I discovered my love for coding
            through writing SQL queries. And throughout my career I've been able
            to dive deep into querying to understand what kinds of product
            offerings influence customer behavior. <br /> I currently lead the
            merchandising team at Tavour, an app based retailer that sells craft
            beer lovers rare beers from across the country.
            <br /> I am a fast learner, an excellent problem solver, and strong
            collaborator. Outside of my full time career, I recently completed a
            bootcamp course to enhance my software development skills and am
            eager to contribute my expertise to a dynamic team.
          </p>
        </div>
        <div>
          <img
            className="h-1/4 max-w-auto object-center"
            src={profile}
            alt="sylvia's headshot"
          />
          <button onClick={onButtonClick}>Download Resume</button>
        </div>

        {/* <div className="resume-link">
          <p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/11gibUW3GNGG97NloVX6c3avDwi-2lfCU/view?usp=sharing"
              rel="noreferrer"
            >
              Click Here
            </a>{" "}
            to view and download my resume.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
