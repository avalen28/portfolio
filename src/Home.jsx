import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="info">
        <div className="presentation">
          <h1>Hello There! I'm Alberto</h1>
          <h2>A Full-Stack Web Developer</h2>
        </div>
        <div className="about-stack">
          <div className="frontend-stack">
            <img src="/images/html-5.png" alt="html5" />
            <img src="/images/css3.png" alt="css3" />
            <img src="/images/javaScript.png" alt="javaScript" />
            <img src="/images/react.png" alt="react" />
            <img src="/images/hbs.png" alt="handlebars" />
          </div>
          <div className="backend-stack">
            <img src="/images/express.png" alt="express.js" />
            <img src="/images/node.png" alt="node.js" />
            <img src="/images/mongoDB.png" alt="mongoDB" />
          </div>
          <div className="other-stack">
            <img src="/images/git.png" alt="Git" />
            <img src="/images/github.png" alt="github.js" />
            <img src="/images/postman.png" alt="postman" />
            <img src="/images/visualcode.png" alt="visualcode" />
          </div>
        </div>
      </div>
      <img
        src="/images/Maurice_Beverly_the_Hormone_Monster_Icon-removebg-preview.png"
        alt=""
        className="profile-img"
      />
    </div>
  );
};

export default Home;
