import React, { Component } from "react";
import "./Issues.css";
import { motion } from 'framer-motion';
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="issues-header-div">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="issues-header" style={{ color: theme.text }}>
              Issues
            </h1>
          </motion.div>
        </div>
        <div className="issues-body-div">
          {issuesData["data"].map((issue) => {
            return <IssueCard issue={issue} />;
          })}
        </div>
      </div>
    );
  }
}

export default Issues;
