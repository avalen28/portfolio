import React from "react";
import { Link } from "react-router-dom";

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
            <img src="/images/sql.png" alt="sql" />
            <img src="/images/postgresql.png" alt="postgresql" />
          </div>
          <div className="other-stack">
            <img src="/images/git.png" alt="Git" />
            <img src="/images/github.png" alt="github.js" />
            <img src="/images/postman.png" alt="postman" />
            <img src="/images/visualcode.png" alt="visualcode" />
            <img src="/images/docker.png" alt="docker" />
          </div>
        </div>
      </div>
      <div className="img-container-and-cv">
        <img src="/images/Alberto.jpg" alt="" className="profile-img" />
        <Link
          to={
            "https://drive.google.com/file/d/1O56o66C98kWDIoYOqNXBdC0wsFq969ss/view?usp=share_link"
          }
        >
          CV
        </Link>
      </div>
    </div>
  );
};

export default Home;
