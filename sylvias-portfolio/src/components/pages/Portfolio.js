import React from "react";
import "../../App.css";

import Project from "../ProjectComponents"; //need to create
import jate from "../../portfolioImages/jate.png";
import dinner from "../../portfolioImages/dinner.png";
import weather from "../../portfolioImages/weather.png";
import calendar from "../../portfolioImages/workday.png";
import quiz from "../../portfolioImages/codequiz.png";
import goalie from "../../portfolioImages/goalie.png";

const Portfolio = () => {
  const PortfolioInfo = [
    {
      id: 1,
      name: "Goalie",
      description:
        "A social network API built with a Node.js/Express.js server and MySQL database that enables users to track and share their goals!",
      github: "https://github.com/sely1724/your-goals-tracker",
      website: "https://goalie.herokuapp.com/",
      image: goalie,
    },

    {
      id: 2,
      name: "JATE - Just Another Text Editor",
      description:
        "A text editor built as a Progressive Web Appliction.  It can also be edited offline.",
      github: "https://github.com/sely1724/pwa-text-editor",
      website: "https://pwa-text-editor-sae.herokuapp.com/",
      image: jate,
    },

    {
      id: 3,
      name: "Dinner & Drinks",
      description:
        "An application that recommends meals and/or drinks based on user added search filters",
      github: "https://github.com/sely1724/dinner-and-drinks",
      website: "https://sely1724.github.io/dinner-and-drinks/",
      image: dinner,
    },

    {
      id: 4,
      name: "Code Quiz",
      description: "Test your front end coding knowledge with the Code Quiz",
      github: "https://github.com/sely1724/code-quiz",
      website: "https://sely1724.github.io/code-quiz/",
      image: quiz,
    },

    {
      id: 5,
      name: "Weather Dashboard",
      description:
        "An application that uses user input to pull accurate and timely weather information from OpenWeatherAPI",
      github: "https://github.com/sely1724/weather-dashboard",
      website: "https://sely1724.github.io/weather-dashboard/",
      image: weather,
    },

    {
      id: 6,
      name: "Workday Calendar",
      description:
        "An application that enables users to schedule events. Colors indicate if scheduled event is in past, present, or future",
      github: "https://github.com/sely1724/work-day-scheduler",
      website: "https://sely1724.github.io/work-day-scheduler/",
      image: calendar,
    },
  ];

  localStorage.setItem("PortfolioInfo", JSON.stringify(PortfolioInfo));
  let PortfolioParsed = JSON.parse(localStorage.getItem("PortfolioInfo"));

  return (
    <div className="overflow-y-scroll bg-ptarmigan bg-center bg-no-repeat bg-cover bg-fixed my-2 mx-4 min-h-[37.5rem] max-h-[37.5rem]  p-6 border border-gray-200 rounded-sm  dark:bg-gray-800 dark:border-gray-700 ">
      <div className="my-1 flex flex-col items-center">
        <Project PortfolioInfo={PortfolioParsed} />
      </div>
    </div>
  );
};

export default Portfolio;
