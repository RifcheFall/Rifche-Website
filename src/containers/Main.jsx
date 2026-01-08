import React, { Component } from "react";
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Skill from "../pages/skill/skillTree";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/AboutComponent";
import Hobbies from "../pages/Hobbies/Hobbies";
import Charity from "../pages/Charity/Charity";
import Contact from "../pages/contact/ContactComponent";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home theme={this.props.theme} />} />
            <Route path="/home" element={<Home theme={this.props.theme} />} />
            <Route path="/about" element={<About theme={this.props.theme} />} />
            <Route path="/skill" element={<Skill theme={this.props.theme} />} />
            <Route path="/experience" element={<Experience theme={this.props.theme} />} />
            <Route path="/education" element={<Education theme={this.props.theme} />} />
            <Route path="/hobbies" element={<Hobbies theme={this.props.theme} />} />
            <Route path="/charity" element={<Charity theme={this.props.theme} />} />
            <Route path="/opensource" element={<Opensource theme={this.props.theme} />} />
            <Route path="/contact" element={<Contact theme={this.props.theme} />} />
            <Route path="/projects" element={<Projects theme={this.props.theme} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
