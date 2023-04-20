import React from "react";
import Button from "@mui/material/Button";
import "./About.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="main-container">
        <h1 className="about__heading">Hi, I'm Kyle Lee.</h1>
        <p className="about__description">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <div className="about__btns">
          <Button variant="contained" href="#projects" size="large">
            Projects
          </Button>
          <Button variant="contained" href="#contact" size="large">
            Contact
          </Button>
        </div>
        <section></section>
      </div>
    </div>
  );
};

export default About;
