import React, { Component } from "react";

import { Transition } from "react-transition-group";

import "../css/App.css";

class TransitionComp extends Component {
  state = {
    show: false
  };

  showDiv = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <Transition
          in={this.state.show}
          timeout={1000}
          enter={true} // this will skip the "entering" state
          exit={true} // this will skip the "exiting" state
          onEnter={node => {
            console.log("Entered..."); // It will trigger event when the element "entering" state..
          }}
          onExit={node => {
            console.log("Exited..."); // It will trigger event when the element "exiting" state..
          }}
        >
          {/** Transition will return the function,
            where the "state" keyword has the four values "entering,entered,exiting,exited," 
         */}
          {state => (
            /**Inline Styles */
            // <div
            //   style={{
            //     background: "blue",
            //     height: "100px",
            //     transition: "all 2s ease",
            //     opacity: state === "entered" || state === "entering" ? 1 : 0
            //   }}
            <div className={`square square-${state}`}>
              {`square square-${state}`}
            </div>
          )}
        </Transition>
        <div className="showDiv" onClick={this.showDiv}>
          {this.state.show ? "Hide" : "Show"}
        </div>
      </div>
    );
  }
}

export default TransitionComp;
