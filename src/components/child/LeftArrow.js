import React, { Component } from "react";
class LeftArrow extends Component {
  render() {
    return (
      <div onClick={this.props.goToPrevSlide}>
        <i
          className="fa fa-angle-left fa-2x"
          aria-hidden="true"
          style={{ color: "#004587" }}
        ></i>
      </div>
    );
  }
}
export default LeftArrow;
