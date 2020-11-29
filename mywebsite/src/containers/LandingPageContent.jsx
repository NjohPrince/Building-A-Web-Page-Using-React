import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import BackgroundImg from "../assets/images/img.png";
import { LogoAndContent } from "../components/Caption/logoSection";
import { ScrollDown } from "../components/dropBut/dropButton";
import { Navigation } from "../components/header/navigator";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
`;

const FilterBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(55, 55, 55, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownArrowContainer = styled.div`
  margin: 4px;
`;

export function SectionUp(props) {

  const scrollToNextSection = () => {
    scroller.scrollTo("AboutSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="Sectionup">
      <Container>
        <FilterBackground>
          <Navigation />
          <LogoAndContent />
          <DownArrowContainer onClick={scrollToNextSection}>
            <ScrollDown />
          </DownArrowContainer>
        </FilterBackground>
      </Container>
    </Element>
  );
}
