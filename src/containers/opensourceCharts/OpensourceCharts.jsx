import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart";
import IssueChart from "../../components/issueChart/IssueChart";
import { motion } from 'framer-motion';
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="os-charts-header-div">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              Contributions
            </h1>
          </motion.div>
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart />
          <IssueChart />
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;
