import React from "react";
function LeftArrow(props) {
  return (
    <div onClick={props.goToPrevSlide}>
      <i
        className="fa fa-angle-left fa-2x"
        aria-hidden="true"
        style={{ color: "#004587" }}
      ></i>
    </div>
  );
}
export default LeftArrow;
