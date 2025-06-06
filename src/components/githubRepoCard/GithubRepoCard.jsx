import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div
          className="repo-card-div"
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.repobody }}
        >
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.repotext }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.repotext }}>
            {repo.description}
          </p>
          {<div className="repo-left-stat">
            <div className="repo-creation-date subTitle">
              <p
                style={{ color: theme.secondaryText }}
              >
                Created on {repo.createdAt.split("T")[0]}
              </p>
              <div className="repo-details">
                <span>
                  <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 10 16" width="10" fill="rgb(106, 115, 125)" classname="repo-star-svg">
                    <path
                      fill-rule="evenodd"
                      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    ></path>
                  </svg>
                  <p>{repo.forkCount}</p>
                </span>
                <span>
                  <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)" classname="repo-star-svg">
                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                  </svg>
                  <p>{repo.stargazers.totalCount}</p>
                </span>
              </div>
            </div>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>}
        </div>
      </motion.div>
    </div>
  );
}