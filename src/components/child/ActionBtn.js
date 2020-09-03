import React from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const ACTION_BTN_TEXT = "Meddela mig när nästa artikel publiceras";

const ActionButton = styled.button`
appearance: none; 
border: 2px solid ${(props) => props.theme.mainBlue};
color: ${(props) => props.theme.mainBlue}; 
padding 0.25em 0.5em;
transition: background-color 0.25s, color 0.25s;
box-sizing: border-box;
border-radius: 5px;
font-family: ${(props) => props.theme.headerFontFamily};
font-style: normal;
font-weight: normal;
background-color: transparent;
padding: 1rem;
font-size: ${(props) => props.theme.mdFont};
@media (max-width:  ${(props) => props.theme.mobileBreakPoint}) {
   max-width: 300px;
  }

&:hover {
    background-color: ${(props) => props.theme.mainBlue};
    color: ${(props) => props.theme.regalWhite};
    cursor: pointer;
}
&:hover:after{
    filter:invert(0) brightness(100);
}
&:after{
    content: url(${arrow});
    margin-left: 12px;
}
`;

const ActionBtn = () => {
  return <ActionButton>{ACTION_BTN_TEXT}</ActionButton>;
};

export default ActionBtn;
