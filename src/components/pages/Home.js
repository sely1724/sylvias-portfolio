import React from "react";
import { redirect } from "react-router-dom";

const loader = async () => {
  const user = await getUser();
  if (!user) {
    return redirect("/login");
  }
  return null;
};

export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div id="about-me">
        <div id="intro">
          <h1>Thanks for visiting.</h1>
          <br></br>
          <div id="content">
            <div>
              <h3>
                My name is Sylvia. I run the merchandising team at a ecommerce
                company called Tavour. In my job I do everything from project
                management to data analytics. In my spare time, I'm a current
                web developer bootcamp student at UW. And in my spare, spare
                time I forage for mushrooms, bike long distances, and try to
                remember to sleep.
              </h3>
              <br></br>

              <br></br>
            </div>
            <img src="/assets/images/headshot.png" alt="me" />
          </div>
          <div id="btns">
            <button onClick={() => navigate("contact")}>REACH OUT</button>
            <button onClick={() => navigate("projects")}>PREVIEW WORK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
