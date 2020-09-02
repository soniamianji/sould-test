import React, { Component } from "react";
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "../../App.css";
import rawMemberData from "../../rawMemberData";
import styled from "styled-components";

const SliderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 51.5vh;
`;
const SliderItems = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

const SliderText = styled.div`
  width: 80vw;
`;
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: rawMemberData.length,
    };
  }
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    this.setState({
      activeIndex: index,
    });
  }
  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <SliderDiv>
        <SliderItems>
          <LeftArrow goToPrevSlide={() => this.goToPrevSlide()} />
          <SliderText>
            <Slide activeIndex={this.state.activeIndex} />
          </SliderText>
          <RightArrow goToNextSlide={() => this.goToNextSlide()} />
        </SliderItems>
      </SliderDiv>
    );
  }
}
