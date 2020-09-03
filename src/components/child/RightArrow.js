import React from "react";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";

export const Arrow = styled.i`
  color: ${(props) => props.theme.regalBlue};
`;
function RightArrow(props) {
  return (
    <div onClick={props.goToNextSlide}>
      <Arrow className="fa fa-angle-right fa-2x" aria-hidden="true"></Arrow>
    </div>
  );
}

export default RightArrow;
