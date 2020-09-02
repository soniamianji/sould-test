import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import img from "../../assets/hero.png";
import Member from "../child/Member";
import Article from "../child/Article";
import ActionBtn from "../child/ActionBtn";
import SellingPointSection from "../child/SellingPointSection";
import Slider from "../child/Slider";
import rawMemberData from "../../rawMemberData";
import IntroParag from "../child/IntroParag";
import Footer from "../child/Footer";

const Hero = styled.div`
  background-image: url(${img});
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    height: 60vh;
    overflow: inherit;
  }
`;

const BtnSection = styled.div`
  margin: 4rem auto;
  text-align: center;
`;

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  return (
    <Fragment>
      <Hero>
        {!isMobile ? (
          rawMemberData.map((member, i) => (
            <Member memberImg={member.image} memberName={member.name} />
          ))
        ) : (
          <Slider />
        )}
      </Hero>
      <IntroParag />
      <Article />
      <BtnSection>
        <ActionBtn />
      </BtnSection>
      <SellingPointSection></SellingPointSection>
      <Footer />
    </Fragment>
  );
}

export default Home;
