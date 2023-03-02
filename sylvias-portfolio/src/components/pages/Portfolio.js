import React from "react";
import "../../App.css";
import Project from "../projectComponents"; //need to create
import goalie from "../../goalie.png";
import jate from "../../jate.png";
import dinner from "../../dinner.png";
import codeQuiz from "../../codequiz.png";
import weather from "../../weather.png";
//import workDay from "../../workday.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="projectList">
        <Project
          name="Goalie"
          description="A social network API built with a Node.js/Express.js server and MySQL database that enables users to track and share their goals!"
          github="https://github.com/sely1724/your-goals-tracker"
          website="https://goalie.herokuapp.com/"
          id="goalie"
        />
        <Project
          name="JATE - Just Another Text Editor"
          description="A text editor built as a Progressive Web Appliction.  It can also be edited offline."
          github="https://github.com/sely1724/pwa-text-editor"
          website="https://pwa-text-editor-sae.herokuapp.com/"
          id="jate"
        />
        <Project
          name="Dinner & Drinks"
          description="An application that recommends meals and/or drinks based on user added search filters"
          github="https://github.com/sely1724/dinner-and-drinks"
          website="https://sely1724.github.io/dinner-and-drinks/"
          id="dinner"
        />

        <Project
          name="Code Quiz"
          description="Test your front end coding knowledge with the Code Quiz"
          github="https://github.com/sely1724/code-quiz"
          website="https://sely1724.github.io/code-quiz/"
          id="quiz"
        />
        <Project
          name="Weather Dashboard"
          description="An application that uses user input to pull accurate and timely weather information from OpenWeatherAPI"
          github="https://github.com/sely1724/weather-dashboard"
          website="https://sely1724.github.io/weather-dashboard/"
          id="weather"
        />
        <Project
          name="Work Day Scheduler"
          description="An application that keeps your work day scheduled"
          github="https://github.com/sely1724/work-day-scheduler"
          website="https://sely1724.github.io/work-day-scheduler/"
          id="workday"
        />
      </div>
    </div>
  );
}
