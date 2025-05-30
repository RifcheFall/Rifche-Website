import React, { Component } from "react";
import Header from "../../components/header/Header";
import CharityComponent from "../../containers/Charity/CharityComponent";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";

class Charity extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} />
        <CharityComponent theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Charity;
