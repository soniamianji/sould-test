import React from "react";
import styled from "styled-components";
import articleData from "../../rawArticleData";
import { Grid, Row, Col } from "../../config/girdSytem";
import squareImg from "../../assets/square.png";

const ArticleImgHolder = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;

  ${(props) => {
    if (props.imgSrc === "") {
      return `background-color: ${props.theme.regalGray};`;
    } else {
      return `background-image: url(${squareImg});`;
    }
  }}
`;
const ArticleHeader = styled.h3`
  margin: 0;
  color: ${(props) => props.color};
  font-family: ${(props) => props.theme.headerFontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  padding: 1rem;
  ${(props) => {
    if (props.imgSrc === "") {
      return `color: ${props.theme.mainBlue}; font-style: normal; font-size: ${props.theme.smFont};`;
    } else {
      return `color: ${props.theme.regalWhite} ; font-style: italic; font-size: ${props.theme.mdFont};`;
    }
  }}
`;

const ArticleParag = styled.p`
  padding: 1rem;
  position: relative;
  top: 165px;
  margin: 0;
  font-size: 20px;
  ${(props) => {
    if (props.imgSrc === "") {
      return `color: ${props.theme.mainBlue} `;
    } else {
      return `color: ${props.theme.regalWhite}; padding: 0 1rem;`;
    }
  }};
`;

const Article = () => {
  return (
    <Grid>
      {articleData.map((data, i) => (
        <Row maxWidth={"863px"} key={i} flexDirection={"column"}>
          <Col size={2} height={"300px"}>
            <ArticleImgHolder imgSrc={data[0].img}>
              <ArticleHeader imgSrc={data[0].img}>
                {data[0].title}
              </ArticleHeader>
              <ArticleParag imgSrc={data[0].img}>
                {data[0].description}
              </ArticleParag>
            </ArticleImgHolder>
          </Col>
          <Col size={2} height={"300px"}>
            <ArticleImgHolder imgSrc={data[1].img}>
              <ArticleHeader imgSrc={data[1].img}>
                {data[1].title}
              </ArticleHeader>
              <ArticleParag imgSrc={data[1].img}>
                {data[1].description}
              </ArticleParag>
            </ArticleImgHolder>
          </Col>
        </Row>
      ))}
    </Grid>
  );
};

export default Article;
