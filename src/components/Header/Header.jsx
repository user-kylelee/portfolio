import { useState } from "react";
import "./Header.css";
import Hamburger from "hamburger-react";
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div id="header" className="header">
      <div className="header__logo-container">
        {/* <div className="header__logo-img">Logo</div> */}
        <div className="header__logo-sub">KYLE LEE</div>
      </div>
      <div className="mobile hamburger">
        <Hamburger
          className="hamburger-icon"
          toggled={expanded}
          toggle={setExpanded}
        />
      </div>
      <div className={expanded ? "header__main expanded" : "header__main"}>
        <div className="header__link">
          <a href="/" onClick={() => setExpanded(!expanded)}>
            HOME
          </a>
        </div>
        <div className="header__link">
          <a href="#about" onClick={() => setExpanded(!expanded)}>
            ABOUT ME
          </a>
        </div>
        <div className="header__link">
          <a href="#projects" onClick={() => setExpanded(!expanded)}>
            PROJECTS
          </a>
        </div>
        <div className="header__link">
          <a href="#contact" onClick={() => setExpanded(!expanded)}>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
