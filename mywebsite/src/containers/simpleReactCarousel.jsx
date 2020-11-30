import React from "react";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import { CaptionText } from "../components/textCaption/caption";
import { CardView } from "../components/card/card";

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
`;

export function SectionSlide(props) {
  return (
    <Container>
      <CaptionText style={{color: 'white'}}>View My Works</CaptionText>
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        totalSlides={4}
        visibleSlides={2}
      >
        <Slider>
          <Slide index={0}>
            <CardView />
          </Slide>
          <Slide index={1}>
            <CardView />
          </Slide>
          <Slide index={2}>
            <CardView />
          </Slide>
          <Slide index={3}>
            <CardView />
          </Slide>
        </Slider>
        <DotGroup />
      </StyledCarouselProvider>
    </Container>
  );
}
