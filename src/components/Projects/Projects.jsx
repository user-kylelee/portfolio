import React from "react";
import "./Projects.css";
import image from "../../assets/img.png";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="main-container">
        <div className="section-title">Projects</div>
        <div className="section-sub">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </div>
        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img">
              <img className="img" src={image} alt="" srcSet="" />
            </div>
            <div className="projects__row-content">
              <div className="projects__row-content-title">
                <h2>Project 1</h2>
              </div>
              <div className="projects__row-content-skills">
                {/* <h3>Skills</h3> */}
                <div className="projects__row-content-skill">React</div>
                <div className="projects__row-content-skill">SASS</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
              </div>
              <div className="projects__row-content-sub">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                dolor perferendis odit sequi commodi delectus, eaque ex, tempore
                odio sed accusantium quibusdam incidunt accusamus vel maxime ad
                minus ducimus animi.
              </div>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img">
              <img className="img" src={image} alt="" srcSet="" />
            </div>
            <div className="projects__row-content">
              <div className="projects__row-content-title">
                <h2>Project 1</h2>
              </div>
              <div className="projects__row-content-skills">
                {/* <h3>Skills</h3> */}
                <div className="projects__row-content-skill">React</div>
                <div className="projects__row-content-skill">SASS</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
              </div>
              <div className="projects__row-content-sub">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                dolor perferendis odit sequi commodi delectus, eaque ex, tempore
                odio sed accusantium quibusdam incidunt accusamus vel maxime ad
                minus ducimus animi.
              </div>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img">
              <img className="img" src={image} alt="" srcSet="" />
            </div>
            <div className="projects__row-content">
              <div className="projects__row-content-title">
                <h2>Project 1</h2>
              </div>
              <div className="projects__row-content-skills">
                {/* <h3>Skills</h3> */}
                <div className="projects__row-content-skill">React</div>
                <div className="projects__row-content-skill">SASS</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
                <div className="projects__row-content-skill">GIT</div>
              </div>
              <div className="projects__row-content-sub">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                dolor perferendis odit sequi commodi delectus, eaque ex, tempore
                odio sed accusantium quibusdam incidunt accusamus vel maxime ad
                minus ducimus animi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
