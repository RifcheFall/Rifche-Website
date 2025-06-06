import React, { Component } from "react";
import "./Header.css";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    const link = settings.isSplash ? "/splash" : "/home";
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div>
          <header className="header">
            <NavLink to={link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skill"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Skill
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              { <li>
                <NavLink
                  to="/projects"
                  // tag={Link}
                  style={({ isActive }) =>
    isActive
      ? { fontWeight: "bold", color: theme.text }
      : { color: theme.text }
  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li> }
              <li>
                <NavLink
                  to="/hobbies"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Hobbies and Interests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/charity"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  CAFALL Charity
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/opensource"
                  // tag={Link}
                  style={({ isActive }) =>
    isActive
      ? { fontWeight: "bold", color: theme.text }
      : { color: theme.text }
  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
                  // tag={Link}
                  style={({ isActive }) =>
                    isActive
                      ? { fontWeight: "bold", color: theme.text }
                      : { color: theme.text }
                  }
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </motion.div>
    );
  }
}
export default Header;
