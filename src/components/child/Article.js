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
      return "background-color: #f4f7fa";
    } else {
      return ` background-image: url(${squareImg});`;
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
      return "color: #0048B4; font-style: normal; font-size:16px;";
    } else {
      return "color: white; font-style: italic; font-size:25px;";
    }
  }}
`;

const ArticleParag = styled.p`
  padding: 1rem;
  position: relative;
  top: 180px;
  margin: 0;
  font-size: 20px;
  ${(props) => {
    if (props.imgSrc === "") {
      return `color: #0048B4 `;
    } else {
      return `color: white; padding: 0 1rem;`;
    }
  }};
`;

const Article = () => {
  return (
    <Grid>
      {articleData.map((data, i) => (
        <Row maxWidth={"863px"} height={"308px"} key={i}>
          <Col size={2} marginLeft={"13px"} marginTop={"14px"}>
            <ArticleImgHolder imgSrc={data[0].img}>
              <ArticleHeader imgSrc={data[0].img}>
                {data[0].title}
              </ArticleHeader>
              <ArticleParag imgSrc={data[0].img}>
                {data[0].description}
              </ArticleParag>
            </ArticleImgHolder>
          </Col>
          <Col size={2} marginLeft={"13px"} marginTop={"14px"}>
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
