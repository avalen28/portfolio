import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact with me</h3>
      <div className="contact-info">
        <img src="" alt="LinkedIn" />
        <Link>https://www.linkedin.com/in/alberto-valenzuela-munoz/</Link>
      </div>
      <div className="contact-info">
        <img src="" alt="GitHub" />
        <Link>https://github.com/avalen28</Link>
      </div>
      <div className="contact-info">
        <img src="" alt="gmail" />
        <p>avalen28@gmail.com</p>
      </div>
      <div className="contact-info">
        <img src="" alt="phone" />
        <p>+34 665-611-219</p>
      </div>
    </div>
  );
};

export default Contact;
