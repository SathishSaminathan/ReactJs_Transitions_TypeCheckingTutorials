import React, { Component } from "react";

import { CSSTransition } from "react-transition-group";

import "../css/App.css";

class Fade extends Component {
  state = {
    show: false
  };

  showDiv = () => {
    this.setState({
      show: !this.state.show
    });
    return this.state.show;
  };
  render() {
    return (
      <div>
        <CSSTransition in={this.state.show} timeout={5000} classNames="square">
          {/** classNames are used to give the name for the classes in CSSTransition,
          Since we are giving classNames="square", it will generate the classes like "square-enter,square-enter-active,square-exit,square-enter-active"
        */}
          <div className="square">helloooo</div>
        </CSSTransition>
        <div className="showDiv" onClick={this.showDiv}>
          {this.state.show ? "Hide" : "Show"}
        </div>
      </div>
    );
  }
}

export default Fade;
