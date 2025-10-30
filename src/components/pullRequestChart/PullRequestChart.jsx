import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from 'framer-motion';
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [
            PullRequestData["open"],
            PullRequestData["merged"],
            PullRequestData["closed"],
          ],
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
        },
      ],
    };

    return (
      <div class="pr-chart">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </motion.div>
        <Doughnut
          data={data}
          options={{
            padding: "0",
            margin: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default PullRequestChart;
