import React from "react";

const About = () => {
  return (
    <div className="about-continer">
      <div className="about-header">
        <article className="article-intro">
          For the last 8+ years I've been working as a bulding engineer for the
          city hall of Barcelona, reviewing amazing projects from small
          restaurants to Vall d'Hebron Hospital. <br />
          <br />
          The other field that I've always been passionate about is tech, and
          now I'm changing careers to work as a full stack web developer.
          <br />
          <br />
          Architecture and coding are very similar, both need a solid structure,
          a beautiful look and lots of functionalities so... let's build
          something together!
        </article>
      </div>
      <img
        src="/images/background.png"
        alt="background"
        className="background-img"
      />
    </div>
  );
};

export default About;
