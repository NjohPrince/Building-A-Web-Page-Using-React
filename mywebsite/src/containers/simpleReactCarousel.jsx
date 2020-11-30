import React from "react";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { CaptionText } from "../components/textCaption/caption";
import { CardView } from "../components/card/card";

const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 50%;
`;

export function SectionSlide(props) {
  return (
    <Container>
      <CaptionText>View My Works</CaptionText>
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={300}
        totalSlides={4}
        visibleSlides={1}
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
      </StyledCarouselProvider>
    </Container>
  );
}
