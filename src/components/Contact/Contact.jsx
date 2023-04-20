import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";
const handleSubmit = () => {
  alert("Submit handled!");
};
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="main-container">
        <h1 className="section-title">Contact</h1>
        <p className="section-sub">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="contact__form-container">
          <form onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <input
                className="contact__form-input"
                type="text"
                placeholder="Enter your name"
                required
                id="name"
                name="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                className="contact__form-input"
                type="text"
                placeholder="Enter your email"
                required
                id="email"
                name="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <textarea
                required=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <div className="contact__form-field">
              <Button
                variant="contained"
                href="#contact"
                size="large"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
