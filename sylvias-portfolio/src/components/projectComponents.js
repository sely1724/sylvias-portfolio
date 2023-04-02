import React from "react";
import "../App.css";

function Project(props) {
  return (
    // <div className="projects-card">
    //   <div className="image-card" id={props.id}></div>
    //   <div className="information-card">
    //     <h5>{props.name}</h5>
    //     <small>
    //       <a href={props.github}>Github</a>
    //     </small>
    //     <br />
    //     <small>
    //       <a href={props.website}>Website</a>
    //     </small>
    //   </div>
    // </div>

    <>
      {props.PortfolioInfo.map((item) => (
        <div
          className="max-w-sm my-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
          key={item.id}
        >
          <a
            href={item.website}
            target="_blank"
            rel="noreferrer"
            // className="bg-ptarmigan bg-center bg-no-repeat bg-cover bg-fixed"
          >
            <img
              className="rounded-t-lg"
              src={item.image}
              alt={item.description}
            />
          </a>

          <div className="p-5">
            <h5>{item.name}</h5>
            <small>
              <a href={item.github} target="_blank" rel="noreferrer">
                Github
              </a>
            </small>
            <br />
            <small>
              <a href={item.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </small>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
