import React from "react";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import { CaptionText } from "../components/textCaption/caption";
import { CardView } from "../components/card/card";
import rowImage from "../assets/images/cont.jfif";
import rowImage2 from "../assets/images/images.png";

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
  border-right: 1px solid yellow;
`;

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  margin: 3px;
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
      <CaptionText>Services I Offer</CaptionText>
      <StyledCarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={350}
        totalSlides={4}
        visibleSlides={2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <CardView
              imgURL={rowImage2}
              name="Front-End"
              descript="HTML5, CSS3, JAVASCRIPT(Vanilla, JQuery), REACTjs"
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <CardView
              imgURL={rowImage}
              name="Back-End"
              descript="NODEjs, PHP"
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <CardView
              imgURL={rowImage}
              name="SEO"
              descript="Search Engine Optimisation with Ease"
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <CardView
              imgURL={rowImage}
              name="Management Systems"
              descript="Design and Build of Softwares for Managing your Systems: Shopping, Business, including Adverts"
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </Container>
  );
}
