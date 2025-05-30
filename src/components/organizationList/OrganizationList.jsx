import React, { Component } from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { Fade } from "react-reveal";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <li className="organizations-inline" name={logo["login"]}>
                <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
>
                  <div className="organizations-flex">
                    <img
                      className="organizations-img"
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                    <span className="organizations-name">@{logo["login"]}</span>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
