import React from "react";
import styled from "styled-components";
import img from "../../assets/hero.png";
import Member from "../child/Member";
import Article from "../child/Article";
import ActionBtn from "../child/ActionBtn";
import SellingPointSection from "../child/SellingPointSection";

const Hero = styled.div`
  background-image: url(${img});
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  @media (min-width: 768px) {
    height: 60vh;
    overflow: inherit;
  }
`;

const MainParag = styled.div`
  margin: 4rem auto;
  padding: 3rem 1rem;
  text-align: left;
  color: ${(props) => props.theme.mainBlue};
  font-family: ${(props) => props.theme.bodyFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  @media (min-width: 768px) {
    max-width: 700px;
    height: 225px;
    text-align: center;
  }
`;

const BtnSection = styled.div`
  margin: 4rem auto;
  text-align: center;
`;

function Home() {
  return (
    <div>
      <Hero>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </Hero>
      <MainParag>
        <p>
          Quia nesciunt itaque et eos adipisci voluptate quod voluptate. Eum aut
          et nam omnis. m Eum aut et nam omnis. Sapiente sint expedita corrupti
          consequatur aut quam vel. Odio veniam harum voluptatem reprehenderit
          voluptates. Atque consectetur quo et voluptates quod laboriosam
          voluptatem. Quisquam aut quia perspiciatis possimus et consequatur.
          Atque consectetur quo et voluptates quod laboriosam voluptatem.
          Quisquam aut quia perspiciatis possimus et consequatur.
        </p>
      </MainParag>
      <Article />
      <BtnSection>
        <ActionBtn />
      </BtnSection>
      <SellingPointSection></SellingPointSection>
    </div>
  );
}

export default Home;
