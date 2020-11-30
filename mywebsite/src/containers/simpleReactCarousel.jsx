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

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  margin: 5px;
  button {
    width: 10px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
  .carousel dot--selected {
    background-color: #c4c4c4;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

export function SectionSlide(props) {
  return (
    <Container>
      <CaptionText style={{ color: "white" }}>View My Works</CaptionText>
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        totalSlides={4}
        visibleSlides={2}
      >
        <Slider>
          <StyledSlide index={0}>
            <CardView />
          </StyledSlide>
          <StyledSlide index={1}>
            <CardView />
          </StyledSlide>
          <StyledSlide index={2}>
            <CardView />
          </StyledSlide>
          <StyledSlide index={3}>
            <CardView />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </Container>
  );
}