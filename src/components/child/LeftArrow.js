import React from "react";
import styled from "styled-components";

export const Arrow = styled.i`
  color: ${(props) => props.theme.regalBlue};
`;
function LeftArrow(props) {
  return (
    <div onClick={props.goToPrevSlide}>
      <Arrow className="fa fa-angle-left fa-2x" aria-hidden="true"></Arrow>
    </div>
  );
}
export default LeftArrow;
