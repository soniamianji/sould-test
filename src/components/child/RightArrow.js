import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
class RightArrow extends Component {
  render() {
    return (
      <div onClick={this.props.goToNextSlide}>
        <i
          className="fa fa-angle-right fa-2x"
          aria-hidden="true"
          style={{ color: "#004587" }}
        ></i>
      </div>
    );
  }
}
export default RightArrow;
