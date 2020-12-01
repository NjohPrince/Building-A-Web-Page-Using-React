import React from "react";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import { CaptionText } from "../components/textCaption/caption";
import { CardView } from "../components/card/card";
import rowImage from "../assets/images/cont.jfif";

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
`;

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  margin: 5px;
  button {
    height: 5px;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    border: 1px solid gray;

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
  .carousel__dot--selected {
    background-color: yellow;
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
      <CaptionText>View My Works</CaptionText>
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        totalSlides={4}
        visibleSlides={2}
      >
        <Slider>
          <StyledSlide index={0}>
            <CardView
              imgURL={rowImage}
              name="Front-End"
              descript="Just a CodeLover, who helps others acquire such skills too"
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <CardView
              imgURL={rowImage}
              name="Back-End"
              descript="Just a CodeLover, who helps others acquire such skills too"
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <CardView
              imgURL={rowImage}
              name="Management Systems"
              descript="Just a CodeLover, who helps others acquire such skills too"
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <CardView
              imgURL={rowImage}
              name="System Designer"
              descript="Just a CodeLover, who helps others acquire such skills too"
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </Container>
  );
}