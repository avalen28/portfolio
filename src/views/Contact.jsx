import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact me!</h3>
      <div className="contact-info">
        <img src="/images/linkedin.png" alt="LinkedIn" />
        <Link to={"https://www.linkedin.com/in/alberto-valenzuela-munoz/"}>
          Alberto Valenzuela
        </Link>
      </div>
      <div className="contact-info">
        <img src="/images/github.png" alt="GitHub" />
        <Link to={"https://github.com/avalen28"}>@avalen28</Link>
      </div>
      <div className="contact-info">
        <img src="/images/mail.png" alt="mail" />
        <p>avalen28@gmail.com</p>
      </div>
      <div className="contact-info">
        <img src="/images/telephone.png" alt="telephone" />
        <p>+34 665-611-219</p>
      </div>
    </div>
  );
};

export default Contact;
