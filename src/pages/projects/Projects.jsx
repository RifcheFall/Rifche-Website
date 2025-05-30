import React, { Component } from "react";
import Header from "../../components/header/Header";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

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
                <ProjectsImg theme={theme} />
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
          href="https://github.com/Tasin5541"
          newTab={true}
          theme={theme}
        />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
