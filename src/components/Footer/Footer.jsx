import React from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-container footer__container">
        <div className="footer__main">
          <h2 className="footer__main-heading">KYLE LEE</h2>
          <p className="footer__main-sub">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="footer__social">
          <h2 className="footer__main-heading footer__social-heading">
            Social
          </h2>
          <div className="footer__social-icons">
            <a href="http://www.linkedin.com">
              <BsLinkedin />
            </a>
            <a href="http://www.github.com">
              <BsGithub />
            </a>
            <a href="http://instagram.com">
              <BsInstagram />
            </a>
            <a href="http://youtube.com">
              {" "}
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="footer__copyright">
          &copy; Copyright {new Date().getFullYear()}. Mady by{" "}
          <span className="footer__copyright-name">
            <a href="#about">KYLE LEE</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
