import React, { Component } from "react";
import Header from "../../components/header/Header.jsx";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard.jsx";
import Button from "../../components/button/Button.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
// import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg.jsx";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={new URL(`../../assests/images/${projectsHeader["avatar_image_path"]}`, import.meta.url).href}
											alt=""
										/> */}
                <img src="/images/photo_1.jpg" alt="" />
                {/* <ProjectsImg theme={theme} /> */}
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="repo-cards-div-pad">
          <div className="repo-cards-div-main">
            {ProjectsData.data.map((repo) => {
              return <GithubRepoCard repo={repo} theme={theme} />;
            })}
          </div>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://www.youtube.com/@CherifFall1/videos"
          newTab={true}
          theme={theme}
        />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
