import React from "react";
import "font-awesome/css/font-awesome.min.css";
function RightArrow(props) {
  return (
    <div onClick={props.goToNextSlide}>
      <i
        className="fa fa-angle-right fa-2x"
        aria-hidden="true"
        style={{ color: "#004587" }}
      ></i>
    </div>
  );
}

export default RightArrow;
